// ============================================================
// Manual Tools Layer — Human-Driven Strategy Tools
// Modular, reusable tools accessible from the dashboard
// ============================================================

var ManualTools = {
    // =============================================
    // 1. Campaign Builder
    // =============================================
    CampaignBuilder: {
        campaigns: [],

        createCampaign: function(config) {
            var campaign = {
                id: Utils.generateID(),
                name: config.name || 'New Campaign',
                type: config.type || 'release',       // release, tour, merchandise, event
                channel: config.channel || 'Spotify',
                startDate: config.startDate || Date.now(),
                endDate: config.endDate || Date.now() + 30 * 86400000,
                budget: config.budget || 0,
                status: 'draft',                      // draft, active, paused, completed, archived
                objectives: config.objectives || ['awareness'],
                targetAudience: config.targetAudience || {},
                creativeAssets: config.creativeAssets || [],
                timeline: config.timeline || [],
                metrics: {
                    impressions: 0,
                    clicks: 0,
                    conversions: 0,
                    spend: 0,
                    ctr: 0,
                    cpc: 0,
                    cpa: 0,
                    roas: 0
                },
                notes: config.notes || '',
                createdAt: Date.now(),
                updatedAt: Date.now()
            };
            this.campaigns.push(campaign);
            this._save();
            return campaign;
        },

        updateCampaign: function(id, updates) {
            var campaign = this.getCampaign(id);
            if (!campaign) return null;
            Object.assign(campaign, updates);
            campaign.updatedAt = Date.now();
            this._save();
            return campaign;
        },

        getCampaign: function(id) {
            return this.campaigns.find(function(c) { return c.id === id; }) || null;
        },

        deleteCampaign: function(id) {
            this.campaigns = this.campaigns.filter(function(c) { return c.id !== id; });
            this._save();
        },

        activateCampaign: function(id) {
            return this.updateCampaign(id, { status: 'active' });
        },

        pauseCampaign: function(id) {
            return this.updateCampaign(id, { status: 'paused' });
        },

        completeCampaign: function(id) {
            return this.updateCampaign(id, { status: 'completed' });
        },

        getActiveCampaigns: function() {
            return this.campaigns.filter(function(c) { return c.status === 'active'; });
        },

        _save: function() {
            Storage.save('pm_manual_campaigns', this.campaigns);
        },

        _load: function() {
            this.campaigns = Storage.load('pm_manual_campaigns', []);
        }
    },

    // =============================================
    // 2. Audience Selector
    // =============================================
    AudienceSelector: {
        segments: [],

        createSegment: function(config) {
            var segment = {
                id: Utils.generateID(),
                name: config.name || 'New Segment',
                description: config.description || '',
                criteria: config.criteria || {},     // { ageRange, gender, location, interests, behaviors, platforms }
                estimatedSize: config.estimatedSize || 0,
                source: config.source || 'manual',   // manual, ai, imported
                status: 'active',
                createdAt: Date.now()
            };
            this.segments.push(segment);
            this._save();
            return segment;
        },

        updateSegment: function(id, updates) {
            var segment = this.getSegment(id);
            if (!segment) return null;
            Object.assign(segment, updates);
            this._save();
            return segment;
        },

        getSegment: function(id) {
            return this.segments.find(function(s) { return s.id === id; }) || null;
        },

        deleteSegment: function(id) {
            this.segments = this.segments.filter(function(s) { return s.id !== id; });
            this._save();
        },

        // Combine multiple segments into a union or intersection
        combineSegments: function(segmentIds, mode) {
            mode = mode || 'union'; // 'union' or 'intersection'
            var combined = {
                id: Utils.generateID(),
                name: 'Combined Segment (' + mode + ')',
                description: mode === 'union' ? 'Union of selected segments' : 'Intersection of selected segments',
                criteria: {
                    combinedFrom: segmentIds,
                    combineMode: mode
                },
                source: 'combined',
                status: 'active',
                createdAt: Date.now()
            };
            this.segments.push(combined);
            this._save();
            return combined;
        },

        // Estimate overlap between segments
        estimateOverlap: function(segmentIdA, segmentIdB) {
            var segA = this.getSegment(segmentIdA);
            var segB = this.getSegment(segmentIdB);
            if (!segA || !segB) return 0;
            // Simplified estimation based on criteria similarity
            var overlap = 0;
            if (segA.criteria.location && segB.criteria.location && segA.criteria.location === segB.criteria.location) {
                overlap += 30;
            }
            if (segA.criteria.ageRange && segB.criteria.ageRange && segA.criteria.ageRange === segB.criteria.ageRange) {
                overlap += 25;
            }
            if (segA.criteria.interests && segB.criteria.interests) {
                var common = segA.criteria.interests.filter(function(i) { return segB.criteria.interests.indexOf(i) > -1; });
                overlap += common.length * 10;
            }
            return Math.min(overlap, 100);
        },

        _save: function() {
            Storage.save('pm_audience_segments', this.segments);
        },

        _load: function() {
            this.segments = Storage.load('pm_audience_segments', []);
        }
    },

    // =============================================
    // 3. Geo Targeting Tool
    // =============================================
    GeoTargeting: {
        locations: [],

        addLocation: function(config) {
            var location = {
                id: Utils.generateID(),
                name: config.name || '',
                country: config.country || '',
                city: config.city || '',
                region: config.region || '',
                lat: config.lat || 0,
                lng: config.lng || 0,
                radius: config.radius || 50,     // km
                priority: config.priority || 'medium', // high, medium, low
                budgetAllocation: config.budgetAllocation || 0,
                notes: config.notes || '',
                createdAt: Date.now()
            };
            this.locations.push(location);
            this._save();
            return location;
        },

        removeLocation: function(id) {
            this.locations = this.locations.filter(function(l) { return l.id !== id; });
            this._save();
        },

        updateLocation: function(id, updates) {
            var location = this.getLocation(id);
            if (!location) return null;
            Object.assign(location, updates);
            this._save();
            return location;
        },

        getLocation: function(id) {
            return this.locations.find(function(l) { return l.id === id; }) || null;
        },

        // Get locations sorted by priority
        getByPriority: function(priority) {
            if (priority) {
                return this.locations.filter(function(l) { return l.priority === priority; });
            }
            return this.locations.sort(function(a, b) {
                var priorityOrder = { high: 0, medium: 1, low: 2 };
                return (priorityOrder[a.priority] || 1) - (priorityOrder[b.priority] || 1);
            });
        },

        // Import geo-targeting from AI recommendation
        importFromAI: function(geoTargeting) {
            var imported = 0;
            if (geoTargeting && geoTargeting.tiers) {
                geoTargeting.tiers.forEach(function(tier) {
                    if (tier.regions) {
                        tier.regions.forEach(function(region) {
                            this.addLocation({
                                name: region,
                                country: region,
                                region: tier.name,
                                priority: tier.tier === 0 ? 'high' : tier.tier === 1 ? 'high' : tier.tier === 2 ? 'medium' : 'low',
                                budgetAllocation: tier.budgetAllocation / Math.max(tier.regions.length, 1),
                                notes: 'Imported from AI: ' + tier.name
                            });
                            imported++;
                        }.bind(this));
                    }
                }.bind(this));
            }
            this._save();
            return imported;
        },

        // Export for ad platform targeting
        exportForPlatform: function(platform) {
            var exported = [];
            this.locations.forEach(function(loc) {
                var target = {
                    location: loc.name,
                    radius: loc.radius + 'km'
                };
                if (platform === 'google') {
                    target.country = loc.country;
                    target.city = loc.city;
                }
                if (platform === 'meta') {
                    target.geo_locations = {
                        countries: [loc.country],
                        cities: loc.city ? [{ key: loc.city }] : []
                    };
                }
                exported.push(target);
            });
            return exported;
        },

        _save: function() {
            Storage.save('pm_geo_targets', this.locations);
        },

        _load: function() {
            this.locations = Storage.load('pm_geo_targets', []);
        }
    },

    // =============================================
    // 4. Creative Planner
    // =============================================
    CreativePlanner: {
        ideas: [],

        addIdea: function(config) {
            var idea = {
                id: Utils.generateID(),
                title: config.title || 'New Creative Idea',
                type: config.type || 'video',       // video, image, copy, audio, interactive
                description: config.description || '',
                platform: config.platform || 'multi',
                hook: config.hook || '',
                concept: config.concept || '',
                assetsNeeded: config.assetsNeeded || [],
                status: 'idea',                      // idea, drafted, in_production, approved, published
                priority: config.priority || 'medium',
                assignee: config.assignee || '',
                dueDate: config.dueDate || null,
                tags: config.tags || [],
                variations: config.variations || [],
                notes: config.notes || '',
                createdAt: Date.now(),
                updatedAt: Date.now()
            };
            this.ideas.push(idea);
            this._save();
            return idea;
        },

        updateIdea: function(id, updates) {
            var idea = this.getIdea(id);
            if (!idea) return null;
            Object.assign(idea, updates);
            idea.updatedAt = Date.now();
            this._save();
            return idea;
        },

        getIdea: function(id) {
            return this.ideas.find(function(i) { return i.id === id; }) || null;
        },

        deleteIdea: function(id) {
            this.ideas = this.ideas.filter(function(i) { return i.id !== id; });
            this._save();
        },

        // Move idea through pipeline
        advanceStatus: function(id) {
            var idea = this.getIdea(id);
            if (!idea) return null;
            var flow = ['idea', 'drafted', 'in_production', 'approved', 'published'];
            var idx = flow.indexOf(idea.status);
            if (idx < flow.length - 1) {
                idea.status = flow[idx + 1];
                idea.updatedAt = Date.now();
                this._save();
            }
            return idea;
        },

        // Get ideas by status
        getByStatus: function(status) {
            return this.ideas.filter(function(i) { return i.status === status; });
        },

        // Get ideas by platform
        getByPlatform: function(platform) {
            return this.ideas.filter(function(i) { return i.platform === platform || i.platform === 'multi'; });
        },

        // Import from AI creative intelligence
        importFromAI: function(creativeBrief) {
            var imported = [];
            if (creativeBrief && creativeBrief.hookConcepts) {
                creativeBrief.hookConcepts.forEach(function(hook) {
                    var idea = this.addIdea({
                        title: 'Hook: ' + hook.substring(0, 50),
                        type: 'video',
                        hook: hook,
                        concept: creativeBrief.keyMessages ? creativeBrief.keyMessages[0] : '',
                        platform: 'TikTok',
                        status: 'idea',
                        tags: ['ai-generated', 'hook']
                    });
                    imported.push(idea);
                }.bind(this));
            }
            if (creativeBrief && creativeBrief.contentPillars) {
                creativeBrief.contentPillars.forEach(function(pillar) {
                    var idea = this.addIdea({
                        title: 'Content: ' + pillar.name,
                        type: 'video',
                        concept: pillar.description,
                        platform: 'multi',
                        status: 'idea',
                        tags: ['ai-generated', 'pillar']
                    });
                    imported.push(idea);
                }.bind(this));
            }
            this._save();
            return imported;
        },

        _save: function() {
            Storage.save('pm_creative_ideas', this.ideas);
        },

        _load: function() {
            this.ideas = Storage.load('pm_creative_ideas', []);
        }
    },

    // =============================================
    // 5. Content Calendar
    // =============================================
    ContentCalendar: {
        entries: [],

        addEntry: function(config) {
            var entry = {
                id: Utils.generateID(),
                date: config.date || Date.now(),
                time: config.time || '09:00',
                platform: config.platform || 'Instagram',
                contentType: config.contentType || 'post',
                caption: config.caption || '',
                assets: config.assets || [],
                projectId: config.projectId || null,
                status: 'scheduled',                    // scheduled, drafted, published, cancelled
                notes: config.notes || '',
                createdAt: Date.now()
            };
            this.entries.push(entry);
            this._save();
            return entry;
        },

        updateEntry: function(id, updates) {
            var entry = this.getEntry(id);
            if (!entry) return null;
            Object.assign(entry, updates);
            this._save();
            return entry;
        },

        getEntry: function(id) {
            return this.entries.find(function(e) { return e.id === id; }) || null;
        },

        deleteEntry: function(id) {
            this.entries = this.entries.filter(function(e) { return e.id !== id; });
            this._save();
        },

        // Get entries for a date range
        getRange: function(startDate, endDate) {
            var start = new Date(startDate).getTime();
            var end = new Date(endDate).getTime();
            return this.entries
                .filter(function(e) {
                    var d = new Date(e.date).getTime();
                    return d >= start && d <= end;
                })
                .sort(function(a, b) { return new Date(a.date) - new Date(b.date); });
        },

        // Get entries by platform
        getByPlatform: function(platform) {
            return this.entries.filter(function(e) { return e.platform === platform; });
        },

        // Get entries by project
        getByProject: function(projectId) {
            return this.entries.filter(function(e) { return e.projectId === projectId; });
        },

        // Import from AI content calendar
        importFromAI: function(calendar) {
            var imported = 0;
            if (calendar && calendar.length) {
                calendar.forEach(function(item) {
                    this.addEntry({
                        date: item.date,
                        time: item.time || '12:00',
                        platform: item.platform || 'Instagram',
                        contentType: item.contentType || 'post',
                        caption: item.caption || '',
                        assets: item.assetsNeeded || [],
                        projectId: item.projectId || null,
                        status: 'scheduled'
                    });
                    imported++;
                }.bind(this));
            }
            this._save();
            return imported;
        },

        // Get calendar summary for a period
        getSummary: function(startDate, endDate) {
            var entries = this.getRange(startDate, endDate);
            var platforms = {};
            entries.forEach(function(e) {
                platforms[e.platform] = (platforms[e.platform] || 0) + 1;
            });
            return {
                totalEntries: entries.length,
                byPlatform: platforms,
                byStatus: {
                    scheduled: entries.filter(function(e) { return e.status === 'scheduled'; }).length,
                    drafted: entries.filter(function(e) { return e.status === 'drafted'; }).length,
                    published: entries.filter(function(e) { return e.status === 'published'; }).length,
                    cancelled: entries.filter(function(e) { return e.status === 'cancelled'; }).length
                }
            };
        },

        _save: function() {
            Storage.save('pm_content_calendar', this.entries);
        },

        _load: function() {
            this.entries = Storage.load('pm_content_calendar', []);
        }
    },

    // =============================================
    // 6. Budget Allocator
    // =============================================
    BudgetAllocator: {
        allocations: [],

        createAllocation: function(config) {
            var allocation = {
                id: Utils.generateID(),
                projectId: config.projectId || null,
                name: config.name || 'Budget Allocation',
                totalBudget: config.totalBudget || 0,
                currency: config.currency || 'USD',
                categories: config.categories || {
                    paidAdvertising: 0,
                    contentProduction: 0,
                    influencerMarketing: 0,
                    prAndPress: 0,
                    playlistPromotion: 0,
                    eventsAndTours: 0,
                    toolsAndSoftware: 0,
                    contingency: 0
                },
                spent: config.spent || {
                    paidAdvertising: 0,
                    contentProduction: 0,
                    influencerMarketing: 0,
                    prAndPress: 0,
                    playlistPromotion: 0,
                    eventsAndTours: 0,
                    toolsAndSoftware: 0,
                    contingency: 0
                },
                notes: config.notes || '',
                createdAt: Date.now(),
                updatedAt: Date.now()
            };

            // Validate: categories should sum to total
            var catSum = Object.values(allocation.categories).reduce(function(a, b) { return a + b; }, 0);
            if (catSum !== allocation.totalBudget) {
                // Auto-adjust contingency to match
                var diff = allocation.totalBudget - catSum + allocation.categories.contingency;
                allocation.categories.contingency = Math.max(0, diff);
            }

            this.allocations.push(allocation);
            this._save();
            return allocation;
        },

        updateAllocation: function(id, updates) {
            var allocation = this.getAllocation(id);
            if (!allocation) return null;
            Object.assign(allocation, updates);
            allocation.updatedAt = Date.now();
            this._save();
            return allocation;
        },

        getAllocation: function(id) {
            return this.allocations.find(function(a) { return a.id === id; }) || null;
        },

        deleteAllocation: function(id) {
            this.allocations = this.allocations.filter(function(a) { return a.id !== id; });
            this._save();
        },

        // Get budget remaining per category
        getRemaining: function(id) {
            var allocation = this.getAllocation(id);
            if (!allocation) return null;
            var remaining = {};
            for (var key in allocation.categories) {
                remaining[key] = allocation.categories[key] - (allocation.spent[key] || 0);
            }
            return remaining;
        },

        // Get overall budget utilization
        getUtilization: function(id) {
            var allocation = this.getAllocation(id);
            if (!allocation) return 0;
            var totalSpent = Object.values(allocation.spent).reduce(function(a, b) { return a + b; }, 0);
            return allocation.totalBudget > 0 ? Math.round((totalSpent / allocation.totalBudget) * 100) : 0;
        },

        // Generate recommended budget split based on project
        recommendSplit: function(project) {
            return RolloutEngine._generateBudgetAllocation(project);
        },

        _save: function() {
            Storage.save('pm_budget_allocations', this.allocations);
        },

        _load: function() {
            this.allocations = Storage.load('pm_budget_allocations', []);
        }
    },

    // =============================================
    // 7. Influencer Manager
    // =============================================
    InfluencerManager: {
        contacts: [],

        addContact: function(config) {
            var contact = {
                id: Utils.generateID(),
                name: config.name || '',
                handle: config.handle || '',
                platform: config.platform || 'Instagram',     // Instagram, TikTok, YouTube, Twitter, Blog
                tier: config.tier || 'micro',                 // macro, mid, micro
                followers: config.followers || 0,
                engagementRate: config.engagementRate || 0,
                genreAffinity: config.genreAffinity || [],
                ratePerPost: config.ratePerPost || 0,
                ratePerStory: config.ratePerStory || 0,
                ratePerReel: config.ratePerReel || 0,
                email: config.email || '',
                agency: config.agency || '',
                notes: config.notes || '',
                status: 'active',                            // active, contacted, contracted, inactive
                createdAt: Date.now(),
                updatedAt: Date.now()
            };
            this.contacts.push(contact);
            this._save();
            return contact;
        },

        updateContact: function(id, updates) {
            var contact = this.getContact(id);
            if (!contact) return null;
            Object.assign(contact, updates);
            contact.updatedAt = Date.now();
            this._save();
            return contact;
        },

        getContact: function(id) {
            return this.contacts.find(function(c) { return c.id === id; }) || null;
        },

        deleteContact: function(id) {
            this.contacts = this.contacts.filter(function(c) { return c.id !== id; });
            this._save();
        },

        // Get contacts by tier
        getByTier: function(tier) {
            return this.contacts.filter(function(c) { return c.tier === tier; });
        },

        // Get contacts by platform
        getByPlatform: function(platform) {
            return this.contacts.filter(function(c) { return c.platform === platform; });
        },

        // Get contacts by genre affinity
        getByGenre: function(genre) {
            return this.contacts.filter(function(c) { return c.genreAffinity.indexOf(genre) > -1; });
        },

        // Filter contacts matching project needs
        matchForProject: function(project) {
            var genre = project.genre || 'pop';
            var mode = project.marketingMode || 'organic';
            var budget = (project.budget && project.budget.total) || 0;

            return this.contacts.filter(function(c) {
                if (c.genreAffinity.indexOf(genre) === -1) return false;
                if (c.status !== 'active') return false;

                // Tier filtering based on budget
                if (budget < 5000 && c.tier === 'macro') return false;
                if (budget < 1000 && c.tier === 'mid') return false;

                return true;
            });
        },

        // Estimate campaign cost with a contact
        estimateCost: function(contactId, deliverables) {
            var contact = this.getContact(contactId);
            if (!contact) return 0;

            var cost = 0;
            deliverables.forEach(function(d) {
                if (d === 'post') cost += contact.ratePerPost;
                if (d === 'story') cost += contact.ratePerStory;
                if (d === 'reel') cost += contact.ratePerReel;
            });
            return cost;
        },

        // Import from AI influencer plan
        importFromAI: function(influencerPlan) {
            var imported = 0;
            if (influencerPlan && influencerPlan.tiers) {
                influencerPlan.tiers.forEach(function(tier) {
                    // This creates placeholder contact slots
                    for (var i = 0; i < tier.count; i++) {
                        this.addContact({
                            name: tier.tier.charAt(0).toUpperCase() + tier.tier.slice(1) + ' Influencer ' + (i + 1),
                            handle: '@tbd_' + tier.tier + '_' + i,
                            platform: 'Instagram',
                            tier: tier.tier,
                            genreAffinity: [projectModel ? (typeof projectModel.genre !== 'undefined' ? projectModel.genre : 'pop') : 'pop'],
                            ratePerPost: tier.costRange ? parseInt(tier.costRange.replace(/[^0-9]/g, '').split('-')[0]) : 500,
                            status: 'contact_needed',
                            notes: 'AI recommendation - needs outreach'
                        });
                        imported++;
                    }
                }.bind(this));
            }
            this._save();
            return imported;
        },

        _save: function() {
            Storage.save('pm_influencers', this.contacts);
        },

        _load: function() {
            this.contacts = Storage.load('pm_influencers', []);
        }
    },

    // =============================================
    // 8. Playlist Pitching Tool
    // =============================================
    PlaylistPitching: {
        pitches: [],

        createPitch: function(config) {
            var pitch = {
                id: Utils.generateID(),
                playlistName: config.playlistName || '',
                platform: config.platform || 'Spotify',
                curator: config.curator || '',
                curatorEmail: config.curatorEmail || '',
                status: 'pending',                     // pending, sent, responded, accepted, rejected
                response: '',
                dateSent: null,
                dateResponded: null,
                trackId: config.trackId || null,
                projectId: config.projectId || null,
                notes: config.notes || '',
                priority: config.priority || 'medium',
                followUpCount: 0,
                createdAt: Date.now()
            };
            this.pitches.push(pitch);
            this._save();
            return pitch;
        },

        updatePitch: function(id, updates) {
            var pitch = this.getPitch(id);
            if (!pitch) return null;
            Object.assign(pitch, updates);
            pitch.updatedAt = Date.now();
            this._save();
            return pitch;
        },

        getPitch: function(id) {
            return this.pitches.find(function(p) { return p.id === id; }) || null;
        },

        deletePitch: function(id) {
            this.pitches = this.pitches.filter(function(p) { return p.id !== id; });
            this._save();
        },

        // Mark pitch as sent
        markSent: function(id) {
            return this.updatePitch(id, {
                status: 'sent',
                dateSent: new Date().toISOString()
            });
        },

        // Record response
        recordResponse: function(id, accepted, response) {
            return this.updatePitch(id, {
                status: accepted ? 'accepted' : 'rejected',
                response: response || '',
                dateResponded: new Date().toISOString()
            });
        },

        // Get pitches by status
        getByStatus: function(status) {
            return this.pitches.filter(function(p) { return p.status === status; });
        },

        // Get pitches by platform
        getByPlatform: function(platform) {
            return this.pitches.filter(function(p) { return p.platform === platform; });
        },

        // Get success rate
        getStats: function() {
            var total = this.pitches.length;
            var accepted = this.pitches.filter(function(p) { return p.status === 'accepted'; }).length;
            var rejected = this.pitches.filter(function(p) { return p.status === 'rejected'; }).length;
            var pending = this.pitches.filter(function(p) { return p.status === 'pending' || p.status === 'sent'; }).length;

            return {
                total: total,
                accepted: accepted,
                rejected: rejected,
                pending: pending,
                successRate: total > 0 ? Math.round((accepted / total) * 100) : 0
            };
        },

        // Import from AI playlist plan
        importFromAI: function(playlistPlan) {
            var imported = 0;
            if (playlistPlan && playlistPlan.playlists) {
                playlistPlan.playlists.forEach(function(pl) {
                    if (pl.priority === 'high' || pl.priority === 'medium') {
                        this.createPitch({
                            playlistName: pl.name,
                            platform: pl.platform || 'Spotify',
                            priority: pl.priority,
                            status: 'pending',
                            notes: 'AI recommendation - ' + (pl.contactMethod || 'pitch via platform')
                        });
                        imported++;
                    }
                }.bind(this));
            }
            this._save();
            return imported;
        },

        // Follow up on pending pitches (increments followUpCount)
        followUp: function(id) {
            var pitch = this.getPitch(id);
            if (!pitch || pitch.status !== 'sent') return null;
            pitch.followUpCount++;
            pitch.updatedAt = Date.now();
            this._save();
            return pitch;
        },

        _save: function() {
            Storage.save('pm_playlist_pitches', this.pitches);
        },

        _load: function() {
            this.pitches = Storage.load('pm_playlist_pitches', []);
        }
    },

    // --- Initialize all manual tools ---
    init: function() {
        this.CampaignBuilder._load();
        this.AudienceSelector._load();
        this.GeoTargeting._load();
        this.CreativePlanner._load();
        this.ContentCalendar._load();
        this.BudgetAllocator._load();
        this.InfluencerManager._load();
        this.PlaylistPitching._load();
    }
};

window.ManualTools = ManualTools;
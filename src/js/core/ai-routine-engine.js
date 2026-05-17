// ============================================================
// AI Routine Engine — Smart Automation
// Automatically generates marketing plans when a project is created
// ============================================================

var AIRoutineEngine = {
    // --- Activate AI generation for a project ---
    activate: function(project) {
        project.audienceMapping = this.generateAudienceMapping(project);
        project.geoTargeting = this.generateGeoTargeting(project);
        project.platformStrategy = project.platformStrategy || PlatformIntel.getStrategy(project);
        project.creativeRequirements = this.generateCreativeRequirements(project);
        project.rolloutTimeline = this.generateRolloutTimeline(project);
        project.adsStructure = this.generateAdsStructure(project);
        project.influencerPlan = this.generateInfluencerPlan(project);
        project.playlistPlan = this.generatePlaylistPlan(project);
        project.kpis = project.kpis || AnalyticsEngine.generateKPIs(project);
        project.expectedResults = this.generateExpectedResults(project);
        project.aiGenerated = true;
        project.aiGeneratedAt = Date.now();
        return project;
    },

    // --- AI: Audience Mapping ---
    generateAudienceMapping: function(project) {
        var genre = project.genre || 'pop';
        var mode = project.marketingMode || 'organic';
        var followers = (project.artistProfile && project.artistProfile.followers) || 0;
        var listeners = (project.artistProfile && project.artistProfile.monthlyListeners) || 0;

        var segments = [];

        // Core fans segment
        segments.push({
            name: 'Core Fans',
            description: 'Existing followers and engaged listeners',
            size: followers > 0 ? 'est_' + (followers * 0.3).toFixed(0) : 'unknown',
            priority: 'high',
            targeting: {
                lookalike: true,
                source: 'saved_tracks + followers',
                platforms: ['spotifyAdStudio', 'metaAds']
            }
        });

        // Genre explorers segment
        segments.push({
            name: 'Genre Explorers',
            description: 'Listeners of similar genres and artists',
            size: 'est_' + Math.max(10000, listeners * 2).toFixed(0),
            priority: 'high',
            targeting: {
                interestBased: true,
                genres: [genre],
                platforms: ['googleAds', 'tiktokAds', 'metaAds']
            }
        });

        // Casual listeners segment
        segments.push({
            name: 'Casual Listeners',
            description: 'Broad music consumers in target demographics',
            size: 'est_' + Math.max(50000, listeners * 5).toFixed(0),
            priority: 'medium',
            targeting: {
                demographic: true,
                ageRange: '18-34',
                platforms: ['youtubeAds', 'metaAds', 'tiktokAds']
            }
        });

        // Discovery segment
        segments.push({
            name: 'Discovery Pool',
            description: 'New listener acquisition targets',
            size: 'est_' + Math.max(100000, listeners * 10).toFixed(0),
            priority: mode === 'viral' ? 'high' : 'medium',
            targeting: {
                behavioral: true,
                interests: ['music discovery', 'playlist curation', 'concerts'],
                platforms: ['spotifyAdStudio', 'soundcloud', 'tiktokAds']
            }
        });

        return {
            segments: segments,
            totalEstimatedReach: segments.reduce(function(sum, s) {
                var n = parseInt(s.size.replace('est_', '')) || 0;
                return sum + n;
            }, 0),
            recommendedApproach: mode === 'aggressive' ? 'full-funnel simultaneous' : 'sequential: core → explorers → casual → discovery'
        };
    },

    // --- AI: Geo Targeting ---
    generateGeoTargeting: function(project) {
        var mode = project.marketingMode || 'organic';
        var genre = project.genre || 'pop';
        var type = project.type || 'single';

        var tiers = [];

        // Tier 1: Primary markets
        tiers.push({
            tier: 1,
            name: 'Primary Markets',
            regions: ['United States', 'United Kingdom', 'Canada', 'Australia'],
            budgetAllocation: mode === 'global' ? 40 : 55,
            rationale: 'Highest streaming volume and engagement rates'
        });

        // Tier 2: Secondary markets
        tiers.push({
            tier: 2,
            name: 'Secondary Markets',
            regions: ['Germany', 'France', 'Brazil', 'Mexico', 'Japan'],
            budgetAllocation: mode === 'global' ? 30 : 25,
            rationale: 'Strong growth potential and genre affinity'
        });

        // Tier 3: Expansion markets
        tiers.push({
            tier: 3,
            name: 'Expansion Markets',
            regions: ['Netherlands', 'Sweden', 'South Korea', 'India', 'Nigeria'],
            budgetAllocation: mode === 'global' ? 20 : 10,
            rationale: 'Emerging streaming markets with rising engagement'
        });

        // Genre-specific adjustments
        if (genre === 'latin') {
            tiers[1].regions.push('Colombia', 'Argentina', 'Chile', 'Peru');
            tiers[1].budgetAllocation += 10;
        }
        if (genre === 'k-pop') {
            tiers[1].regions.push('South Korea', 'Philippines', 'Indonesia');
            tiers[0].regions.push('South Korea');
        }
        if (genre === 'afrobeats' || genre === 'world') {
            tiers[2].regions.push('Nigeria', 'Ghana', 'Kenya', 'South Africa');
            tiers[2].budgetAllocation += 10;
        }

        // Tour-specific geo targeting
        if (type === 'tour') {
            tiers.push({
                tier: 0,
                name: 'Tour Cities',
                regions: [], // Populated from tour dates
                budgetAllocation: 15,
                rationale: 'Concentrated spend around confirmed tour dates',
                dynamic: true
            });
        }

        return {
            tiers: tiers,
            totalRegions: tiers.reduce(function(sum, t) { return sum + t.regions.length; }, 0),
            mode: mode === 'local' ? 'city-level' : mode === 'global' ? 'country-level' : 'country-level'
        };
    },

    // --- AI: Platform Strategy ---
    generatePlatformStrategy: function(project) {
        return PlatformIntel.getStrategy(project);
    },

    // --- AI: Creative Requirements Checklist ---
    generateCreativeRequirements: function(project) {
        var type = project.type || 'single';
        var genre = project.genre || 'pop';
        var mode = project.marketingMode || 'organic';

        var requirements = {
            mustHave: [],
            recommended: [],
            optional: []
        };

        // Must-have assets
        requirements.mustHave.push({
            asset: 'High-quality cover art',
            specs: '3000x3000px minimum, RGB, no text overlays on Spotify',
            timeline: 'Before campaign launch'
        });
        requirements.mustHave.push({
            asset: 'Audio file (WAV/FLAC)',
            specs: '44.1kHz/16-bit minimum, mastered',
            timeline: 'Before distribution'
        });
        requirements.mustHave.push({
            asset: 'Metadata sheet',
            specs: 'ISRC, UPC, songwriter credits, genre tags',
            timeline: 'Before distribution'
        });

        // Type-specific requirements
        if (type === 'album') {
            requirements.mustHave.push({
                asset: 'Album trailer video (60-90s)',
                specs: '16:9 + 9:16 versions, cinematic grade',
                timeline: 'T-14 days'
            });
            requirements.mustHave.push({
                asset: 'Track-by-track visualizers (3-5)',
                specs: '1080x1080, loopable for social',
                timeline: 'T-7 days'
            });
        }
        if (type === 'single') {
            requirements.mustHave.push({
                asset: 'Lyric video or visualizer',
                specs: '1080x1920 vertical + 1920x1080 horizontal',
                timeline: 'T-7 days'
            });
        }
        if (type === 'ep') {
            requirements.mustHave.push({
                asset: 'EP trailer (45-60s)',
                specs: 'Multi-format: 16:9, 9:16, 1:1',
                timeline: 'T-10 days'
            });
        }
        if (type === 'tour') {
            requirements.mustHave.push({
                asset: 'Tour poster / flyer',
                specs: 'Print-ready + social versions',
                timeline: 'T-30 days'
            });
            requirements.mustHave.push({
                asset: 'Venue footage or city-specific content',
                specs: 'B-roll for geo-targeted ads',
                timeline: 'Ongoing'
            });
        }

        // Genre-specific
        if (['pop', 'electronic', 'hip-hop'].indexOf(genre) > -1) {
            requirements.recommended.push({
                asset: 'Dance/choreo clip (15-30s)',
                specs: 'TikTok/Reels native format',
                timeline: 'T-3 days'
            });
        }
        if (['rock', 'indie', 'metal'].indexOf(genre) > -1) {
            requirements.recommended.push({
                asset: 'Live performance clip',
                specs: 'Raw energy, crowd shots preferred',
                timeline: 'T-7 days'
            });
        }
        if (['r&b', 'jazz', 'classical'].indexOf(genre) > -1) {
            requirements.recommended.push({
                asset: 'Studio session / behind-the-scenes',
                specs: 'Cinematic, warm grading',
                timeline: 'T-10 days'
            });
        }

        // Mode-specific
        if (mode === 'viral') {
            requirements.mustHave.push({
                asset: '3-5 TikTok hook variations',
                specs: 'First 3 seconds must hook, trending sounds OK',
                timeline: 'T-3 days'
            });
        }
        if (mode === 'brand') {
            requirements.mustHave.push({
                asset: 'Brand-safe long-form content (2-3 min)',
                specs: 'Interview, story, or mini-doc style',
                timeline: 'T-14 days'
            });
        }
        if (mode === 'aggressive') {
            requirements.mustHave.push({
                asset: 'A/B test creative variants (6-10)',
                specs: 'Different hooks, CTAs, formats',
                timeline: 'T-7 days'
            });
        }

        return requirements;
    },

    // --- AI: Generate Rollout Timeline ---
    generateRolloutTimeline: function(project) {
        var type = project.type || 'single';
        var mode = project.marketingMode || 'organic';
        var releaseDate = (project.timeline && project.timeline.releaseDate) || Date.now() + 30 * 86400000;

        var phases = [];

        // Phase 1: Teaser (T-30 to T-14)
        phases.push({
            phase: 1,
            name: 'Teaser / Pre-Awareness',
            days: 'T-30 to T-14',
            duration: 16,
            activities: [
                'Seed content to core fans and mailing list',
                'Behind-the-scenes social posts',
                'Playlist pitching begins',
                'Influencer seeding outreach'
            ],
            budgetAllocation: 10,
            kpiTargets: {
                impressions: 'build',
                engagement: 'seed',
                saves: 'early'
            }
        });

        // Phase 2: Launch (T-14 to T+7)
        phases.push({
            phase: 2,
            name: 'Launch Blitz',
            days: 'T-14 to T+7',
            duration: 21,
            activities: [
                'Paid ads go live across primary platforms',
                'Music video / visualizer premiere',
                'Press release distribution',
                'Social media push (daily content)',
                'Influencer content goes live',
                'Spotify canvas + story ads activate'
            ],
            budgetAllocation: mode === 'aggressive' ? 55 : 45,
            kpiTargets: {
                streams: 'peak',
                saves: 'high',
                followers: 'growth_spike',
                playlistAdds: 'target'
            }
        });

        // Phase 3: Sustain (T+7 to T+30)
        phases.push({
            phase: 3,
            name: 'Sustain & Optimize',
            days: 'T+7 to T+30',
            duration: 23,
            activities: [
                'Optimize ads based on performance data',
                'Retargeting campaigns activate',
                'User-generated content push',
                'Playlist pitching continues',
                'Radio / sync opportunities pursued'
            ],
            budgetAllocation: 25,
            kpiTargets: {
                streams: 'sustained',
                saves: 'steady',
                roi: 'positive'
            }
        });

        // Phase 4: Long-tail (T+30 to T+90)
        phases.push({
            phase: 4,
            name: 'Long-Tail & Legacy',
            days: 'T+30 to T+90',
            duration: 60,
            activities: [
                'Reduced paid spend, organic focus',
                'Compilation / remix opportunities',
                'Sync licensing outreach',
                'Tour / live event promotion (if applicable)',
                'Performance analytics review'
            ],
            budgetAllocation: 10,
            kpiTargets: {
                streams: 'cumulative',
                revenue: 'maximize',
                catalog: 'evergreen'
            }
        });

        // Adjust for project type
        if (type === 'single') {
            phases[0].duration = 7;
            phases[0].days = 'T-14 to T-7';
            phases[1].duration = 14;
            phases[1].days = 'T-7 to T+7';
        }
        if (type === 'ep') {
            phases[0].duration = 14;
            phases[0].days = 'T-21 to T-7';
        }
        if (type === 'tour') {
            phases[0].name = 'Announcement & Presale';
            phases[1].name = 'On-Sale Blitz';
            phases[2].name = 'Tour Active';
            phases[3].name = 'Post-Tour Recap';
        }

        return {
            phases: phases,
            totalDuration: type === 'single' ? 21 : type === 'ep' ? 45 : 90,
            releaseDate: releaseDate,
            keyMilestones: this._generateMilestones(project, phases, releaseDate)
        };
    },

    _generateMilestones: function(project, phases, releaseDate) {
        var milestones = [];
        var type = project.type || 'single';

        milestones.push({
            name: 'Project Kickoff',
            date: new Date(Date.now() + 7 * 86400000).toISOString().split('T')[0],
            status: 'pending'
        });
        milestones.push({
            name: type.charAt(0).toUpperCase() + type.slice(1) + ' Delivered',
            date: new Date(Date.now() + 14 * 86400000).toISOString().split('T')[0],
            status: 'pending'
        });
        milestones.push({
            name: 'Creative Assets Complete',
            date: new Date(Date.now() + 21 * 86400000).toISOString().split('T')[0],
            status: 'pending'
        });
        milestones.push({
            name: 'Pre-Launch Teaser Live',
            date: new Date(releaseDate - 14 * 86400000).toISOString().split('T')[0],
            status: 'pending'
        });
        milestones.push({
            name: 'Release Day',
            date: new Date(releaseDate).toISOString().split('T')[0],
            status: 'pending'
        });
        milestones.push({
            name: '30-Day Review',
            date: new Date(releaseDate + 30 * 86400000).toISOString().split('T')[0],
            status: 'pending'
        });
        milestones.push({
            name: '90-Day Review',
            date: new Date(releaseDate + 90 * 86400000).toISOString().split('T')[0],
            status: 'pending'
        });

        return milestones;
    },

    // --- AI: Ads Structure Blueprint ---
    generateAdsStructure: function(project) {
        var strategy = project.platformStrategy || PlatformIntel.getStrategy(project);
        var budget = (project.budget && project.budget.total) || 0;
        var type = project.type || 'single';

        var ads = {
            campaignStructure: [],
            adGroups: [],
            totalBudget: budget,
            budgetAllocation: {}
        };

        // Build campaign structure per platform
        var primaryPlatforms = strategy.primaryPlatforms || [];
        var budgetPerPlatform = budget / Math.max(primaryPlatforms.length, 1);

        primaryPlatforms.forEach(function(platformName) {
            var platform = PlatformIntel.getPlatform(platformName);
            if (!platform) return;

            var campaign = {
                platform: platformName,
                platformName: platform.name,
                purpose: platform.purpose,
                budget: Math.round(budgetPerPlatform),
                adGroups: []
            };

            // Create ad groups based on project type
            if (type === 'album' || type === 'ep') {
                campaign.adGroups.push({
                    name: 'Awareness - Album/EP',
                    objective: 'reach',
                    budget: Math.round(budgetPerPlatform * 0.4),
                    audiences: ['core_fans', 'genre_explorers'],
                    formats: platform.formats.slice(0, 2)
                });
                campaign.adGroups.push({
                    name: 'Consideration - Track Previews',
                    objective: 'engagement',
                    budget: Math.round(budgetPerPlatform * 0.35),
                    audiences: ['genre_explorers', 'casual_listeners'],
                    formats: ['video', 'audio']
                });
                campaign.adGroups.push({
                    name: 'Conversion - Stream/Save',
                    objective: 'conversion',
                    budget: Math.round(budgetPerPlatform * 0.25),
                    audiences: ['engaged_viewers', 'retargeting'],
                    formats: ['display', 'audio']
                });
            } else {
                campaign.adGroups.push({
                    name: 'Single Launch',
                    objective: 'reach',
                    budget: Math.round(budgetPerPlatform * 0.5),
                    audiences: ['core_fans', 'genre_explorers', 'casual_listeners'],
                    formats: platform.formats.slice(0, 2)
                });
                campaign.adGroups.push({
                    name: 'Remix / Deep Cut',
                    objective: 'engagement',
                    budget: Math.round(budgetPerPlatform * 0.3),
                    audiences: ['core_fans', 'discovery_pool'],
                    formats: ['audio', 'video']
                });
                campaign.adGroups.push({
                    name: 'Conversion',
                    objective: 'conversion',
                    budget: Math.round(budgetPerPlatform * 0.2),
                    audiences: ['engaged_viewers', 'retargeting'],
                    formats: ['display']
                });
            }

            ads.campaignStructure.push(campaign);
            ads.budgetAllocation[platformName] = Math.round(budgetPerPlatform);
        });

        return ads;
    },

    // --- AI: Influencer Plan ---
    generateInfluencerPlan: function(project) {
        var genre = project.genre || 'pop';
        var mode = project.marketingMode || 'organic';
        var type = project.type || 'single';

        var tiers = [];

        // Macro influencers (500K+)
        tiers.push({
            tier: 'macro',
            followerRange: '500K-5M',
            count: mode === 'aggressive' ? 5 : mode === 'global' ? 8 : 2,
            role: 'Album/single premiere coverage, story takeovers',
            expectedReach: '500K-5M per post',
            costRange: '$2,000-$25,000 per post'
        });

        // Mid-tier influencers (50K-500K)
        tiers.push({
            tier: 'mid',
            followerRange: '50K-500K',
            count: mode === 'aggressive' ? 10 : mode === 'global' ? 15 : 5,
            role: 'Track reviews, playlist features, content creation',
            expectedReach: '50K-500K per post',
            costRange: '$500-$5,000 per post'
        });

        // Micro influencers (10K-50K)
        tiers.push({
            tier: 'micro',
            followerRange: '10K-50K',
            count: mode === 'aggressive' ? 20 : 10,
            role: 'Authentic reviews, story mentions, UGC creation',
            expectedReach: '10K-50K per post',
            costRange: '$100-$1,000 per post'
        });

        // Genre-specific influencer types
        var influencerTypes = [];
        if (['pop', 'hip-hop', 'r&b'].indexOf(genre) > -1) {
            influencerTypes.push('music bloggers', 'lifestyle creators', 'dance creators');
        }
        if (genre === 'electronic') {
            influencerTypes.push('DJ culture accounts', 'festival vloggers', 'EDM reviewers');
        }
        if (['rock', 'indie', 'metal'].indexOf(genre) > -1) {
            influencerTypes.push('music journalists', 'zine creators', 'live music reviewers');
        }
        if (genre === 'latin') {
            influencerTypes.push('Latin music blogs', 'reggaeton creators', 'cultural influencers');
        }
        if (genre === 'k-pop') {
            influencerTypes.push('K-pop fan accounts', 'reaction channels', 'dance cover creators');
        }

        return {
            tiers: tiers,
            influencerTypes: influencerTypes,
            totalEstimatedInfluencers: tiers.reduce(function(sum, t) { return sum + t.count; }, 0),
            outreachTimeline: 'T-21 to T-7',
            contentLiveDate: 'T-3 to T+7'
        };
    },

    // --- AI: Playlist Pitching Plan ---
    generatePlaylistPlan: function(project) {
        var genre = project.genre || 'pop';
        var type = project.type || 'single';
        var mode = project.marketingMode || 'organic';

        var playlists = [];

        // Major editorial playlists
        playlists.push({
            name: 'New Music Friday',
            platform: 'Spotify',
            followers: '15M+',
            type: 'editorial',
            genreFit: 'all',
            priority: 'high',
            contactMethod: 'Spotify for Artists / pitching tool'
        });
        playlists.push({
            name: 'Release Radar',
            platform: 'Spotify',
            followers: '10M+',
            type: 'algorithmic',
            genreFit: 'all',
            priority: 'high',
            contactMethod: 'Automatic (based on listener data)'
        });
        playlists.push({
            name: 'Discover Weekly',
            platform: 'Spotify',
            followers: '10M+',
            type: 'algorithmic',
            genreFit: 'all',
            priority: 'high',
            contactMethod: 'Automatic (based on listener data)'
        });

        // Genre-specific playlists
        var genrePlaylists = {
            'pop': ['Today\'s Top Hits', 'Pop Rising', 'Pop Sauce'],
            'hip-hop': ['RapCaviar', 'Most Necessary', 'Hip-Hop Central'],
            'rock': ['Rock Classics', 'New Rock', 'Rock This'],
            'electronic': ['mint', 'Dance Rising', 'Electronic Rising'],
            'r&b': ['R&B Now', 'Hot R&B', 'New R&B'],
            'latin': ['Viva Latino', 'Baila Reggaeton', 'Hot Latin'],
            'jazz': ['Jazz Classics', 'Coffee Table Jazz', 'Late Night Jazz'],
            'indie': ['Indie Pop', 'Lorem', 'Indie Mix']
        };

        (genrePlaylists[genre] || []).forEach(function(name) {
            playlists.push({
                name: name,
                platform: 'Spotify',
                followers: '100K-5M',
                type: 'editorial',
                genreFit: genre,
                priority: 'medium',
                contactMethod: 'Spotify for Artists / pitching tool'
            });
        });

        // Platform-specific
        playlists.push({
            name: 'Apple Music New Music Daily',
            platform: 'Apple Music',
            followers: '5M+',
            type: 'editorial',
            priority: 'medium',
            contactMethod: 'Label partnership / Apple Music for Artists'
        });
        playlists.push({
            name: 'YouTube Music Hot Tracks',
            platform: 'YouTube Music',
            followers: '3M+',
            type: 'algorithmic',
            priority: 'medium',
            contactMethod: 'Automatic'
        });
        playlists.push({
            name: 'Deezer New Releases',
            platform: 'Deezer',
            followers: '2M+',
            type: 'editorial',
            priority: 'low',
            contactMethod: 'Label partnership'
        });
        playlists.push({
            name: 'SoundCloud Trending',
            platform: 'SoundCloud',
            followers: '1M+',
            type: 'algorithmic',
            priority: mode === 'organic' ? 'high' : 'medium',
            contactMethod: 'Repost network / community engagement'
        });

        return {
            playlists: playlists,
            totalTargets: playlists.length,
            pitchingTimeline: 'T-14 to T-3',
            followUpTimeline: 'T+1 to T+14',
            successRate: '15-30% for editorial, 40-60% for algorithmic'
        };
    },

    // --- AI: Expected Results ---
    generateExpectedResults: function(project) {
        var budget = (project.budget && project.budget.total) || 0;
        var genre = project.genre || 'pop';
        var mode = project.marketingMode || 'organic';
        var type = project.type || 'single';
        var followers = (project.artistProfile && project.artistProfile.followers) || 10000;

        var baseMultiplier = mode === 'aggressive' ? 3 : mode === 'brand' ? 2 : mode === 'viral' ? 4 : 1;
        var genreMultiplier = genre === 'pop' || genre === 'hip-hop' ? 1.5 : 1;

        return {
            estimatedStreams: {
                '30_days': Math.round(followers * 3 * baseMultiplier * genreMultiplier),
                '60_days': Math.round(followers * 6 * baseMultiplier * genreMultiplier),
                '90_days': Math.round(followers * 10 * baseMultiplier * genreMultiplier)
            },
            estimatedSaves: {
                '30_days': Math.round(followers * 0.5 * baseMultiplier),
                '60_days': Math.round(followers * 1.2 * baseMultiplier),
                '90_days': Math.round(followers * 2 * baseMultiplier)
            },
            estimatedFollowers: {
                '30_days': Math.round(followers * 0.1 * baseMultiplier),
                '60_days': Math.round(followers * 0.25 * baseMultiplier),
                '90_days': Math.round(followers * 0.5 * baseMultiplier)
            },
            estimatedPlaylistAdds: {
                '30_days': Math.round(5 * baseMultiplier),
                '60_days': Math.round(15 * baseMultiplier),
                '90_days': Math.round(30 * baseMultiplier)
            },
            cpmEstimate: { low: 2, mid: 5, high: 12 },
            cpcEstimate: { low: 0.15, mid: 0.50, high: 2.00 },
            ctrEstimate: { low: '0.5%', mid: '1.2%', high: '3.5%' },
            budgetEfficiency: budget > 0 ? 'ROI expected in ' + (mode === 'aggressive' ? '30' : '60') + ' days' : 'Organic growth, slower ROI'
        };
    },

    // --- Check if AI has been generated for a project ---
    isComplete: function(project) {
        return !!(project && project.aiGenerated);
    }
};

window.AIRoutineEngine = AIRoutineEngine;
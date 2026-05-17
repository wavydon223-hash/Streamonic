// ============================================================
// Rollout Engine — Full Plan Generator
// Integrates with both manual tools and AI tools
// ============================================================

var RolloutEngine = {
    // --- Generate full rollout plan ---
    generatePlan: function(project) {
        var type = project.type || 'single';
        var mode = project.marketingMode || 'organic';
        var genre = project.genre || 'pop';
        var budget = (project.budget && project.budget.total) || 0;
        var releaseDate = (project.timeline && project.timeline.releaseDate) || Date.now() + 30 * 86400000;

        var plan = {
            projectId: project.id,
            version: '1.0',
            generatedAt: Date.now(),
            type: type,
            mode: mode,
            genre: genre,
            releaseDate: releaseDate,
            phases: [],
            dailySchedule: [],
            paidAdsPlan: this._generatePaidAdsPlan(project),
            influencerPlan: project.influencerPlan || AIRoutineEngine.generateInfluencerPlan(project),
            playlistPlan: project.playlistPlan || AIRoutineEngine.generatePlaylistPlan(project),
            pressPlan: this._generatePressPlan(project),
            budgetAllocation: this._generateBudgetAllocation(project),
            kpis: project.kpis || AnalyticsEngine.generateKPIs(project),
            integrationNotes: this._generateIntegrationNotes(project)
        };

        plan.phases = this._generatePhases(project, plan);
        plan.dailySchedule = this._generateDailySchedule(project, plan);

        return plan;
    },

    // --- Generate phases ---
    _generatePhases: function(project, plan) {
        var type = project.type || 'single';
        var mode = project.marketingMode || 'organic';
        var releaseDate = plan.releaseDate;

        var phases = [];

        // Pre-production
        phases.push({
            name: 'Pre-Production',
            phase: 0,
            startOffsetDays: -60,
            endOffsetDays: -30,
            duration: 30,
            milestones: [
                'Finalize creative direction',
                'Complete all recordings / production',
                'Deliver master files',
                'Finalize metadata and credits',
                'Approve cover art and visual assets'
            ],
            deliverables: ['Master audio files', 'Cover art', 'Metadata sheet', 'Creative brief'],
            status: 'completed'
        });

        // Pre-launch
        var preLaunchDuration = type === 'single' ? 14 : type === 'ep' ? 21 : 30;
        phases.push({
            name: 'Pre-Launch',
            phase: 1,
            startOffsetDays: -preLaunchDuration,
            endOffsetDays: -1,
            duration: preLaunchDuration,
            milestones: [
                'Distribute to DSPs',
                'Submit playlist pitches',
                'Begin teaser content',
                'Activate influencer seeding',
                'Set up ad campaigns (creatives + targeting)',
                'Send press release to media'
            ],
            deliverables: ['Teaser content', 'Playlist pitches', 'Ad creatives', 'Press kit'],
            status: 'pending'
        });

        // Launch
        var launchDuration = type === 'single' ? 7 : type === 'ep' ? 14 : 30;
        phases.push({
            name: 'Launch',
            phase: 2,
            startOffsetDays: 0,
            endOffsetDays: launchDuration,
            duration: launchDuration,
            milestones: [
                'Release goes live on all platforms',
                'Paid ads activate',
                'Social media push begins',
                'Influencer content goes live',
                'Press coverage begins',
                'Playlist adds confirmed'
            ],
            deliverables: ['Music video / visualizer', 'Social content (daily)', 'Ad campaigns live', 'Press coverage'],
            status: 'pending'
        });

        // Post-launch sustain
        var sustainDuration = type === 'tour' ? 90 : 60;
        phases.push({
            name: 'Sustain',
            phase: 3,
            startOffsetDays: launchDuration + 1,
            endOffsetDays: launchDuration + sustainDuration,
            duration: sustainDuration,
            milestones: [
                'Optimize ad campaigns based on data',
                'Retargeting campaigns activate',
                'Continue playlist pitching',
                'Release remix / acoustic / bonus content',
                'Community engagement push',
                'Performance review at midpoint'
            ],
            deliverables: ['Optimized ads', 'Remix / bonus content', 'Performance reports'],
            status: 'pending'
        });

        // Long-tail
        phases.push({
            name: 'Long-Tail',
            phase: 4,
            startOffsetDays: launchDuration + sustainDuration + 1,
            endOffsetDays: launchDuration + sustainDuration + 90,
            duration: 90,
            milestones: [
                'Catalog integration into live sets / tours',
                'Sync licensing outreach',
                'Compilation opportunities',
                'Annual performance review',
                'Plan next release cycle'
            ],
            deliverables: ['Sync pitch deck', 'Catalog report', 'Next project planning'],
            status: 'pending'
        });

        return phases;
    },

    // --- Generate daily content schedule ---
    _generateDailySchedule: function(project, plan) {
        var schedule = [];
        var type = project.type || 'single';
        var genre = project.genre || 'pop';

        // Pre-launch week content
        for (var d = -7; d < 0; d++) {
            var dayActivities = [];
            if (d % 2 === 0) {
                dayActivities.push({
                    time: '10:00',
                    platform: 'Instagram Stories',
                    content: 'Teaser / countdown',
                    asset: 'graphic'
                });
            }
            if (d % 3 === 0) {
                dayActivities.push({
                    time: '18:00',
                    platform: 'TikTok',
                    content: 'Behind-the-scenes or snippet',
                    asset: 'video'
                });
            }
            schedule.push({
                day: d,
                label: 'T' + d,
                activities: dayActivities
            });
        }

        // Launch week — heavy content
        for (var d = 0; d < 7; d++) {
            var dayActivities = [];
            dayActivities.push({
                time: '00:00',
                platform: 'All DSPs',
                content: 'Release goes live',
                asset: 'audio'
            });
            dayActivities.push({
                time: '09:00',
                platform: 'Instagram',
                content: 'Release announcement post',
                asset: 'image + copy'
            });
            dayActivities.push({
                time: '12:00',
                platform: 'Twitter/X',
                content: 'Release tweet with link',
                asset: 'copy + link'
            });
            if (d === 0) {
                dayActivities.push({
                    time: '14:00',
                    platform: 'YouTube',
                    content: 'Music video premiere',
                    asset: 'video'
                });
            }
            if (d % 2 === 0) {
                dayActivities.push({
                    time: '18:00',
                    platform: 'TikTok',
                    content: 'Hook clip / challenge',
                    asset: 'video'
                });
            }
            schedule.push({
                day: d,
                label: 'Launch Day +' + d,
                activities: dayActivities
            });
        }

        // Post-launch weeks
        for (var d = 7; d < 30; d++) {
            var dayActivities = [];
            if (d % 3 === 0) {
                dayActivities.push({
                    time: '12:00',
                    platform: 'Instagram',
                    content: 'Engagement post (poll, Q&A, story)',
                    asset: 'image / interactive'
                });
            }
            if (d % 5 === 0) {
                dayActivities.push({
                    time: '18:00',
                    platform: 'TikTok',
                    content: 'New angle on the track',
                    asset: 'video'
                });
            }
            if (d === 14) {
                dayActivities.push({
                    time: '10:00',
                    platform: 'All',
                    content: '14-day performance review + strategy adjustment',
                    asset: 'report'
                });
            }
            if (d === 21 && type !== 'single') {
                dayActivities.push({
                    time: '12:00',
                    platform: 'All DSPs',
                    content: 'Next single / EP track release (if applicable)',
                    asset: 'audio'
                });
            }
            if (dayActivities.length > 0) {
                schedule.push({
                    day: d,
                    label: 'Day +' + d,
                    activities: dayActivities
                });
            }
        }

        return schedule;
    },

    // --- Paid ads plan ---
    _generatePaidAdsPlan: function(project) {
        var strategy = project.platformStrategy || PlatformIntel.getStrategy(project);
        var budget = (project.budget && project.budget.total) || 0;
        var type = project.type || 'single';

        var plan = {
            totalBudget: budget,
            currency: (project.budget && project.budget.currency) || 'USD',
            campaigns: [],
            weeklyBudget: Math.round(budget / 12),
            recommendations: []
        };

        if (budget === 0) {
            plan.recommendations.push('No paid budget allocated — focus on organic strategies');
            plan.recommendations.push('Consider a minimum of $500-1000 for initial paid push');
            plan.recommendations.push('Leverage Spotify for Artists free tools and organic playlist pitching');
            return plan;
        }

        var platforms = strategy.primaryPlatforms || [];
        var budgetPerPlatform = budget / Math.max(platforms.length, 1);

        platforms.forEach(function(platformName) {
            var platform = PlatformIntel.getPlatform(platformName);
            if (!platform) return;

            var campaign = {
                platform: platform.name,
                purpose: platform.purpose,
                budget: Math.round(budgetPerPlatform),
                weeklyBudget: Math.round(budgetPerPlatform / 12),
                objectives: [],
                recommendedFormats: platform.formats.slice(0, 3),
                targetAudience: platform.audienceType,
                estimatedReach: PlatformIntel.estimateReach(platformName, budgetPerPlatform),
                tips: platform.strategies.slice(0, 2)
            };

            // Set objectives based on project type
            if (type === 'album') {
                campaign.objectives = ['awareness', 'consideration', 'conversion'];
            } else if (type === 'single') {
                campaign.objectives = ['awareness', 'conversion'];
            } else if (type === 'tour') {
                campaign.objectives = ['awareness', 'ticket_conversion'];
            } else {
                campaign.objectives = ['awareness', 'engagement'];
            }

            plan.campaigns.push(campaign);
        });

        plan.recommendations = [
            'Start with awareness campaigns, then shift budget to conversion after 7 days',
            'A/B test at least 3 creative variants per platform',
            'Monitor CPM and CPC daily during first week — reallocate underperforming platforms',
            'Use retargeting audiences after 1000+ impressions on awareness campaigns',
            'Dayparting: increase spend during 12pm-2pm and 7pm-11pm in target timezones'
        ];

        return plan;
    },

    // --- Press plan ---
    _generatePressPlan: function(project) {
        var type = project.type || 'single';
        var genre = project.genre || 'pop';

        return {
            timeline: {
                pressRelease: 'T-14 days',
                MediaOutreach: 'T-10 days',
                exclusivePremieres: 'T-3 to T-1 days',
                followUp: 'T+1 to T+7 days'
            },
            targets: this._getPressTargets(genre, type),
            assetsNeeded: [
                'Press release (formatted for wire services)',
                'Fact sheet with streaming links',
                'High-res photos (portrait + action shots)',
                'Cover art (high-res)',
                'Artist bio (short + long)',
                'Track list with credits',
                'Advance streaming link (for reviewers)'
            ],
            pitchAngles: this._getPitchAngles(project),
            distributionChannels: [
                'PR Newswire / Music-specific wire services',
                'Direct email to editors and playlist curators',
                'Music blog submission platforms',
                'Social media DMs to key journalists'
            ]
        };
    },

    _getPressTargets: function(genre, type) {
        var universal = ['Pitchfork', 'Rolling Stone', 'Billboard', 'Complex', 'NME', 'Stereogum'];
        var genreSpecific = {
            'pop': ['Teen Vogue', 'Cosmopolitan', 'PopSugar'],
            'hip-hop': ['XXL', 'The FADER', 'HipHopDX'],
            'rock': ['Kerrang!', 'Spin', 'Guitar World'],
            'electronic': ['DJ Mag', 'Resident Advisor', 'Mixmag'],
            'r&b': ['Vibe', 'The Source', 'SoulBounce'],
            'latin': ['Billboard Latin', 'Remezcla', 'Mitú'],
            'jazz': ['DownBeat', 'JazzTimes', 'All About Jazz'],
            'indie': ['Paste', 'Under the Radar', 'The Line of Best Fit']
        };
        return (genreSpecific[genre] || []).concat(universal);
    },

    _getPitchAngles: function(project) {
        var type = project.type || 'single';
        var angles = [];

        if (type === 'album') {
            angles.push('Concept album narrative and artistic vision');
            angles.push('Production credits and notable collaborations');
        }
        if (type === 'single') {
            angles.push('Lead single representing artistic evolution');
            angles.push('Streaming and chart potential story');
        }
        if (type === 'tour') {
            angles.push('Tour announcement and venue details');
            angles.push('Live show production and setlist preview');
        }
        angles.push('Artist backstory and personal narrative');
        angles.push('Genre trends and cultural relevance');

        return angles;
    },

    // --- Budget allocation ---
    _generateBudgetAllocation: function(project) {
        var budget = (project.budget && project.budget.total) || 0;
        var type = project.type || 'single';
        var mode = project.marketingMode || 'organic';

        var allocation = {
            paidAdvertising: 0,
            contentProduction: 0,
            influencerMarketing: 0,
            prAndPress: 0,
            playlistPromotion: 0,
            eventsAndTours: 0,
            contingency: 0,
            total: budget
        };

        if (budget === 0) {
            allocation.note = 'No budget — all organic strategies';
            return allocation;
        }

        // Base allocations by type
        if (type === 'album') {
            allocation.paidAdvertising = Math.round(budget * 0.35);
            allocation.contentProduction = Math.round(budget * 0.20);
            allocation.influencerMarketing = Math.round(budget * 0.15);
            allocation.prAndPress = Math.round(budget * 0.10);
            allocation.playlistPromotion = Math.round(budget * 0.10);
            allocation.eventsAndTours = Math.round(budget * 0.05);
            allocation.contingency = budget - allocation.paidAdvertising - allocation.contentProduction - allocation.influencerMarketing - allocation.prAndPress - allocation.playlistPromotion - allocation.eventsAndTours;
        } else if (type === 'single') {
            allocation.paidAdvertising = Math.round(budget * 0.45);
            allocation.contentProduction = Math.round(budget * 0.15);
            allocation.influencerMarketing = Math.round(budget * 0.15);
            allocation.prAndPress = Math.round(budget * 0.08);
            allocation.playlistPromotion = Math.round(budget * 0.10);
            allocation.contingency = budget - allocation.paidAdvertising - allocation.contentProduction - allocation.influencerMarketing - allocation.prAndPress - allocation.playlistPromotion;
        } else if (type === 'tour') {
            allocation.paidAdvertising = Math.round(budget * 0.25);
            allocation.contentProduction = Math.round(budget * 0.15);
            allocation.influencerMarketing = Math.round(budget * 0.10);
            allocation.prAndPress = Math.round(budget * 0.10);
            allocation.eventsAndTours = Math.round(budget * 0.35);
            allocation.contingency = budget - allocation.paidAdvertising - allocation.contentProduction - allocation.influencerMarketing - allocation.prAndPress - allocation.eventsAndTours;
        } else {
            allocation.paidAdvertising = Math.round(budget * 0.30);
            allocation.contentProduction = Math.round(budget * 0.20);
            allocation.influencerMarketing = Math.round(budget * 0.15);
            allocation.prAndPress = Math.round(budget * 0.10);
            allocation.playlistPromotion = Math.round(budget * 0.15);
            allocation.contingency = budget - allocation.paidAdvertising - allocation.contentProduction - allocation.influencerMarketing - allocation.prAndPress - allocation.playlistPromotion;
        }

        // Mode adjustments
        if (mode === 'aggressive') {
            var shift = Math.round(allocation.paidAdvertising * 0.15);
            allocation.paidAdvertising += shift;
            allocation.contingency -= shift;
        }
        if (mode === 'organic') {
            var shift = Math.round(allocation.paidAdvertising * 0.3);
            allocation.paidAdvertising -= shift;
            allocation.contentProduction += Math.round(shift * 0.5);
            allocation.contingency += Math.round(shift * 0.5);
        }

        allocation.contingency = Math.max(0, allocation.contingency);

        return allocation;
    },

    _generateIntegrationNotes: function(project) {
        return {
            manualOverrides: 'All AI-generated plans can be overridden via Manual Tools panel',
            syncWithDashboard: 'Changes in Project Management update plan timelines automatically',
            aiRegeneration: 'Click "Regenerate AI Plan" to re-run all AI recommendations',
            exportFormats: ['PDF', 'CSV', 'JSON'],
            apiReady: 'Structure supports future integration with external APIs (Spotify, Meta, Google Ads)'
        };
    },

    // --- Update plan phase status ---
    updatePhaseStatus: function(plan, phaseNumber, status) {
        if (plan.phases[phaseNumber]) {
            plan.phases[phaseNumber].status = status;
            plan.updatedAt = Date.now();
        }
        return plan;
    },

    // --- Save/Load plan ---
    savePlan: function(plan) {
        Storage.save('pm_plan_' + plan.projectId, plan);
        return plan;
    },

    loadPlan: function(projectId) {
        return Storage.load('pm_plan_' + projectId, null);
    }
};

window.RolloutEngine = RolloutEngine;
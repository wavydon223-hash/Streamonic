// ============================================================
// Analytics & Optimization Layer — Tracking & AI Recommendations
// ============================================================

var AnalyticsEngine = {
    // --- Generate KPIs for a project ---
    generateKPIs: function(project) {
        var type = project.type || 'single';
        var mode = project.marketingMode || 'organic';
        var budget = (project.budget && project.budget.total) || 0;
        var followers = (project.artistProfile && project.artistProfile.followers) || 10000;

        var kpis = {
            streams: {
                target30: Math.round(followers * 2 * (mode === 'aggressive' ? 3 : mode === 'viral' ? 4 : 1)),
                target60: Math.round(followers * 5 * (mode === 'aggressive' ? 3 : mode === 'viral' ? 4 : 1)),
                target90: Math.round(followers * 10 * (mode === 'aggressive' ? 3 : mode === 'viral' ? 4 : 1)),
                unit: 'streams',
                metric: 'total'
            },
            saves: {
                target30: Math.round(followers * 0.3 * (mode === 'aggressive' ? 2 : 1)),
                target60: Math.round(followers * 0.8 * (mode === 'aggressive' ? 2 : 1)),
                target90: Math.round(followers * 1.5 * (mode === 'aggressive' ? 2 : 1)),
                unit: 'saves',
                metric: 'engagement'
            },
            followers: {
                target30: Math.round(followers * 0.05 * (mode === 'viral' ? 3 : 1)),
                target60: Math.round(followers * 0.15 * (mode === 'viral' ? 3 : 1)),
                target90: Math.round(followers * 0.3 * (mode === 'viral' ? 3 : 1)),
                unit: 'followers',
                metric: 'growth'
            },
            playlistAdds: {
                target30: mode === 'organic' ? 3 : mode === 'aggressive' ? 15 : 8,
                target60: mode === 'organic' ? 8 : mode === 'aggressive' ? 35 : 20,
                target90: mode === 'organic' ? 15 : mode === 'aggressive' ? 60 : 35,
                unit: 'playlists',
                metric: 'discovery'
            },
            geoPerformance: {
                trackedBy: ['country', 'city', 'region'],
                benchmarks: {
                    topMarketShare: '>40% of streams from top market',
                    geographicSpread: 'Streams across 5+ countries = healthy',
                    localizedGrowth: 'Month-over-month growth per market'
                }
            },
            audiencePerformance: {
                metrics: ['listener_retention', 'skip_rate', 'completion_rate', 'repeat_listens'],
                benchmarks: {
                    goodRetention: '>60% listen past 30 seconds',
                    goodCompletion: '>25% full listen',
                    goodRepeatRate: '>15% repeat within 7 days'
                }
            },
            creativePerformance: {
                metrics: ['hook_completion', 'share_rate', 'save_to_stream_ratio'],
                benchmarks: {
                    goodHookRate: '>50% watch past hook point',
                    goodShareRate: '>2% share rate on social',
                    goodSaveRatio: '>1:10 save to stream ratio'
                }
            },
            paidMetrics: {
                cpm: { good: '<$8', average: '$8-$15', poor: '>$15' },
                cpc: { good: '<$0.50', average: '$0.50-$1.50', poor: '>$1.50' },
                ctr: { good: '>2%', average: '1-2%', poor: '<1%' },
                cpl: { good: '<$2', average: '$2-$5', poor: '>$5' },
                roas: { good: '>3x', average: '1.5-3x', poor: '<1.5x' }
            },
            conversionMetrics: {
                streamToSave: '>15% = strong',
                saveToFollow: '>5% = strong',
                clickToStream: '>25% = strong',
                impressionToClick: '>1% = strong'
            }
        };

        return kpis;
    },

    // --- AI: Generate optimization recommendations ---
    generateRecommendations: function(project, currentData) {
        var recommendations = [];
        var mode = project.marketingMode || 'organic';
        var budget = (project.budget && project.budget.total) || 0;

        // Budget-based recommendations
        if (budget > 0) {
            recommendations.push({
                category: 'budget',
                priority: 'high',
                title: 'Reallocate underperforming platform spend',
                description: 'Review CPM/CPC by platform after 7 days. Shift 20% of budget from highest-CPM platform to best-performing.',
                action: 'Check platform analytics → adjust budget split',
                estimatedImpact: '15-25% improvement in cost efficiency'
            });
        }

        // Creative recommendations
        recommendations.push({
            category: 'creative',
            priority: 'high',
            title: 'A/B test hook variations',
            description: 'Create 3-5 variations of opening hooks. Test on TikTok and Reels to identify highest-retention version.',
            action: 'Use Creative Intelligence module to generate variations',
            estimatedImpact: '30-50% improvement in watch time'
        });

        // Audience recommendations
        recommendations.push({
            category: 'audience',
            priority: 'medium',
            title: 'Refine lookalike audiences',
            description: 'Build lookalike audiences from listeners who saved the track. Layer with genre interest targeting.',
            action: 'Export saved listeners → create LAL in ad platforms',
            estimatedImpact: '20-35% improvement in conversion rate'
        });

        // Playlist recommendations
        recommendations.push({
            category: 'playlist',
            priority: mode === 'organic' ? 'high' : 'medium',
            title: 'Increase editorial playlist pitching',
            description: 'Follow up on pending pitches. Target genre-specific and mood-based playlists for broader reach.',
            action: 'Use Playlist Pitching Tool to track and follow up',
            estimatedImpact: '10-30% stream increase from editorial placement'
        });

        // Timing recommendations
        recommendations.push({
            category: 'timing',
            priority: 'medium',
            title: 'Optimize posting schedule',
            description: 'Analyze engagement data to find peak posting times per platform and timezone.',
            action: 'Review platform insights → schedule content for peak hours',
            estimatedImpact: '10-20% improvement in engagement'
        });

        // Retargeting recommendations
        if (budget > 1000) {
            recommendations.push({
                category: 'retargeting',
                priority: 'high',
                title: 'Activate retargeting funnels',
                description: 'Create retargeting campaigns for video viewers (50%+ watched), website visitors, and engaged social users.',
                action: 'Set up custom audiences in Meta and Google Ads',
                estimatedImpact: '2-3x higher conversion rate vs cold audiences'
            });
        }

        // Influencer recommendations
        recommendations.push({
            category: 'influencer',
            priority: mode === 'viral' ? 'high' : 'medium',
            title: 'Amplify top-performing influencer content',
            description: 'Identify which influencer posts drive the most engagement. Boost those posts as paid ads.',
            action: 'Review influencer performance → boost top 3 posts',
            estimatedImpact: '40-60% reach amplification'
        });

        // Geo recommendations
        recommendations.push({
            category: 'geo',
            priority: 'medium',
            title: 'Increase spend in top-performing markets',
            description: 'Identify top 3 markets by stream volume and listener growth. Increase geo-targeted spend in those regions.',
            action: 'Analyze geo data → adjust campaign targeting',
            estimatedImpact: '15-25% efficiency gain'
        });

        return {
            recommendations: recommendations,
            generatedAt: Date.now(),
            nextReviewDate: new Date(Date.now() + 7 * 86400000).toISOString().split('T')[0],
            reviewCadence: 'weekly'
        };
    },

    // --- Track actual performance against KPIs ---
    trackPerformance: function(projectId, kpis, actualData) {
        var results = {
            projectId: projectId,
            trackedAt: Date.now(),
            metrics: {},
            status: 'on_track',
            alerts: []
        };

        for (var key in kpis) {
            if (key === 'geoPerformance' || key === 'audiencePerformance' || key === 'creativePerformance' || key === 'paidMetrics' || key === 'conversionMetrics') {
                results.metrics[key] = {
                    definition: kpis[key],
                    actual: actualData[key] || null,
                    status: actualData[key] ? 'tracking' : 'pending_data'
                };
                continue;
            }

            var kpi = kpis[key];
            var actual = actualData[key] || 0;
            var target30 = kpi.target30 || 0;
            var progress = target30 > 0 ? Math.round((actual / target30) * 100) : 0;

            results.metrics[key] = {
                target30: target30,
                target60: kpi.target60,
                target90: kpi.target90,
                actual: actual,
                progress: progress,
                unit: kpi.unit,
                status: progress >= 80 ? 'on_track' : progress >= 40 ? 'needs_attention' : 'at_risk'
            };

            if (progress < 40) {
                results.alerts.push({
                    metric: key,
                    severity: 'warning',
                    message: key.charAt(0).toUpperCase() + key.slice(1) + ' at ' + progress + '% of 30-day target'
                });
                if (progress < 20) {
                    results.status = 'at_risk';
                }
            }
        }

        return results;
    },

    // --- Generate summary report ---
    generateReport: function(project, performanceData) {
        var metrics = performanceData.metrics || {};
        var streams = metrics.streams || {};
        var saves = metrics.saves || {};
        var followers = metrics.followers || {};

        return {
            title: 'Campaign Performance Report',
            projectName: project.name || 'Untitled Project',
            artist: project.artist || 'Unknown',
            generatedAt: new Date().toLocaleDateString(),
            period: '30-day snapshot',
            summary: {
                totalStreams: streams.actual || 0,
                totalSaves: saves.actual || 0,
                newFollowers: followers.actual || 0,
                streamProgress: streams.progress || 0,
                saveProgress: saves.progress || 0,
                followerProgress: followers.progress || 0,
                overallStatus: performanceData.status || 'tracking'
            },
            topRecommendations: (performanceData.recommendations || []).slice(0, 3),
            alerts: performanceData.alerts || [],
            nextSteps: [
                'Review underperforming metrics',
                'Adjust budget allocation if needed',
                'Test new creative variations',
                'Follow up on playlist pitches',
                'Schedule weekly review'
            ]
        };
    },

    // --- Save/Load analytics data ---
    saveAnalytics: function(projectId, data) {
        Storage.save('pm_analytics_' + projectId, data);
    },

    loadAnalytics: function(projectId) {
        return Storage.load('pm_analytics_' + projectId, { metrics: {}, status: 'no_data' });
    }
};

window.AnalyticsEngine = AnalyticsEngine;
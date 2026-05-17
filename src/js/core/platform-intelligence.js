// ============================================================
// Platform Intelligence Layer — Platform Logic & Strategy
// ============================================================

var PlatformIntel = {
    // --- Platform definitions ---
    platforms: {
        googleAds: {
            name: 'Google Ads',
            purpose: 'high_intent',
            formats: ['search', 'display', 'youtube', 'performance_max'],
            bestFor: ['singles', 'albums', 'tours'],
            audienceType: 'intent-based',
            avgCPM: { low: 2, high: 8 },
            avgCPC: { low: 0.50, high: 3.50 },
            recommended: true,
            strategies: [
                'Brand campaign searches for artist + genre',
                'Competitor conquesting campaigns',
                'Song title + "download" / "stream" keywords',
                'Tour date + city targeting'
            ]
        },
        metaAds: {
            name: 'Meta Ads (FB/IG)',
            purpose: 'awareness_retargeting',
            formats: ['image', 'video', 'carousel', 'reels', 'stories'],
            bestFor: ['albums', 'singles', 'eps', 'tours'],
            audienceType: 'interest-behavior',
            avgCPM: { low: 3, high: 12 },
            avgCPC: { low: 0.30, high: 2.00 },
            recommended: true,
            strategies: [
                '1% LAL from email list / streaming links',
                'Engagement campaign → Messenger/DM opt-in',
                'Retarget website visitors + video viewers',
                'Event response ads for tour dates'
            ]
        },
        tiktokAds: {
            name: 'TikTok Ads',
            purpose: 'viral_reach',
            formats: ['in-feed', 'topview', 'branded_effect', 'spark'],
            bestFor: ['singles', 'eps', 'albums'],
            audienceType: 'behavioral_interest',
            avgCPM: { low: 3, high: 10 },
            avgCPC: { low: 0.20, high: 1.50 },
            recommended: true,
            strategies: [
                'Spark ads on organic viral content',
                'TopView for album launch day',
                'In-feed with native-style creative',
                'Hashtag challenge for dance/trend hooks'
            ]
        },
        youtubeAds: {
            name: 'YouTube Ads',
            purpose: 'trust_building',
            formats: ['skippable', 'non_skippable', 'bumper', 'discovery', 'shorts'],
            bestFor: ['albums', 'singles', 'eps', 'tours'],
            audienceType: 'intent_contextual',
            avgCPM: { low: 4, high: 15 },
            avgCPC: { low: 0.10, high: 0.80 },
            recommended: true,
            strategies: [
                'Pre-roll on similar artist channels',
                'Music video premiere with countdown',
                'Shorts teasers driving to full video',
                'Discovery ads targeting genre playlists'
            ]
        },
        spotifyAdStudio: {
            name: 'Spotify Ad Studio',
            purpose: 'direct_listener_targeting',
            formats: ['audio', 'video', 'display'],
            bestFor: ['singles', 'albums', 'eps'],
            audienceType: 'listening_behavior',
            avgCPM: { low: 5, high: 20 },
            avgCPC: { low: 0.15, high: 0.60 },
            recommended: true,
            strategies: [
                'Audio ads on genre-matched playlists',
                'Sponsored sessions for full album playthrough',
                'Video ads between songs for visual artists',
                'Custom audience from saved tracks'
            ]
        },
        appleMusic: {
            name: 'Apple Music',
            purpose: 'premium_listener_targeting',
            formats: ['audio', 'display'],
            bestFor: ['albums', 'singles'],
            audienceType: 'demographic_behavioral',
            avgCPM: { low: 8, high: 25 },
            avgCPC: { low: 0.30, high: 1.20 },
            recommended: false,
            strategies: [
                'Featured placement via label partnership',
                'Connect station sponsorship',
                'Spatial audio exclusives for premium tier'
            ]
        },
        amazonMusic: {
            name: 'Amazon Music',
            purpose: 'purchase_intent',
            formats: ['audio', 'display'],
            bestFor: ['albums', 'singles'],
            audienceType: 'purchase_behavior',
            avgCPM: { low: 4, high: 12 },
            avgCPC: { low: 0.25, high: 1.00 },
            recommended: false,
            strategies: [
                'Alexa integration for new releases',
                'Sponsored playlists in genre stations',
                'Prime Day / Black Friday exclusives'
            ]
        },
        soundcloud: {
            name: 'SoundCloud',
            purpose: 'indie_discovery',
            formats: ['audio', 'repost'],
            bestFor: ['singles', 'eps', 'indie'],
            audienceType: 'community_based',
            avgCPM: { low: 2, high: 6 },
            avgCPC: { low: 0.10, high: 0.50 },
            recommended: false,
            strategies: [
                'Premier uploads for exclusivity',
                'Repost exchange with similar artists',
                'Comment engagement for algorithm boost'
            ]
        },
        deezer: {
            name: 'Deezer',
            purpose: 'global_reach',
            formats: ['audio', 'display'],
            bestFor: ['albums', 'singles', 'global'],
            audienceType: 'geographic_demographic',
            avgCPM: { low: 3, high: 10 },
            avgCPC: { low: 0.20, high: 0.80 },
            recommended: false,
            strategies: [
                'Flow playlist integration',
                'Geo-targeted launch campaigns',
                'Deezer Sessions exclusive content'
            ]
        }
    },

    // --- Get strategy for a project ---
    getStrategy: function(project) {
        var mode = project.marketingMode || 'organic';
        var type = project.type || 'single';
        var genre = project.genre || 'pop';
        var budget = (project.budget && project.budget.total) || 0;

        var strategy = {
            primaryPlatforms: [],
            secondaryPlatforms: [],
            formatRecommendations: [],
            audienceApproach: '',
            budgetSplit: {},
            timelineNotes: ''
        };

        // Select primary platforms based on marketing mode
        if (mode === 'viral') {
            strategy.primaryPlatforms = ['tiktokAds', 'spotifyAdStudio', 'youtubeAds'];
            strategy.secondaryPlatforms = ['metaAds', 'soundcloud'];
            strategy.audienceApproach = 'Broad interest + behavioral targeting with viral content hooks';
            strategy.timelineNotes = 'Front-load spend in first 7 days for maximum viral momentum';
        }
        if (mode === 'brand') {
            strategy.primaryPlatforms = ['metaAds', 'googleAds', 'youtubeAds'];
            strategy.secondaryPlatforms = ['spotifyAdStudio', 'appleMusic'];
            strategy.audienceApproach = '1% LAL + interest targeting with premium creative';
            strategy.timelineNotes = 'Steady 30-day build with retargeting layers';
        }
        if (mode === 'aggressive') {
            strategy.primaryPlatforms = ['googleAds', 'metaAds', 'tiktokAds', 'youtubeAds', 'spotifyAdStudio'];
            strategy.secondaryPlatforms = ['appleMusic', 'amazonMusic'];
            strategy.audienceApproach = 'Full-funnel: awareness → consideration → conversion';
            strategy.timelineNotes = 'Heavy first 14 days, then optimize based on ROAS';
        }
        if (mode === 'organic') {
            strategy.primaryPlatforms = ['spotifyAdStudio', 'soundcloud'];
            strategy.secondaryPlatforms = ['tiktokAds', 'metaAds'];
            strategy.audienceApproach = 'Community-first: playlists, reposts, influencer seeding';
            strategy.timelineNotes = 'Slow build over 60-90 days with grassroots momentum';
        }
        if (mode === 'global') {
            strategy.primaryPlatforms = ['googleAds', 'metaAds', 'youtubeAds', 'deezer'];
            strategy.secondaryPlatforms = ['spotifyAdStudio', 'appleMusic', 'amazonMusic'];
            strategy.audienceApproach = 'Geo-segmented campaigns per market with localized creative';
            strategy.timelineNotes = 'Staggered regional launches over 90 days';
        }
        if (mode === 'local') {
            strategy.primaryPlatforms = ['googleAds', 'metaAds', 'spotifyAdStudio'];
            strategy.secondaryPlatforms = ['soundcloud'];
            strategy.audienceApproach = 'Hyper-local geo targeting with local influencer partnerships';
            strategy.timelineNotes = 'Concentrated 30-day push around local events';
        }

        // Budget split across primary platforms
        if (strategy.primaryPlatforms.length > 0) {
            var split = 100 / strategy.primaryPlatforms.length;
            strategy.primaryPlatforms.forEach(function(p) {
                strategy.budgetSplit[p] = Math.round(split * 10) / 10;
            });
        }

        // Format recommendations by type
        if (type === 'album') {
            strategy.formatRecommendations = [
                'Video ads with album trailer / visualizer',
                'Carousel ads showcasing track listing',
                'Audio ads with 30-second preview clips',
                'Countdown to release date creatives'
            ];
        } else if (type === 'single') {
            strategy.formatRecommendations = [
                'Short-form video (TikTok/Reels/Shorts)',
                'Audio-first ads with hook preview',
                'Static image with lyric quote',
                'Story ads with swipe-up to stream'
            ];
        } else if (type === 'ep') {
            strategy.formatRecommendations = [
                'Lead single video ad',
                'Playlist-style carousel',
                'Behind-the-scenes content series',
                'Bundle announcement creative'
            ];
        } else if (type === 'tour') {
            strategy.formatRecommendations = [
                'Event response ads with date selector',
                'Geo-fenced video ads per city',
                'Retargeting ads for ticket page visitors',
                'Fan-generated content compilations'
            ];
        }

        return strategy;
    },

    // --- Get platform by name ---
    getPlatform: function(name) {
        return this.platforms[name] || null;
    },

    // --- Get all recommended platforms ---
    getRecommendedPlatforms: function() {
        var result = {};
        for (var key in this.platforms) {
            if (this.platforms[key].recommended) {
                result[key] = this.platforms[key];
            }
        }
        return result;
    },

    // --- Calculate estimated reach per platform ---
    estimateReach: function(platformName, budget, cpm) {
        var platform = this.platforms[platformName];
        if (!platform) return 0;
        var effectiveCPM = cpm || ((platform.avgCPM.low + platform.avgCPM.high) / 2);
        return Math.round((budget / effectiveCPM) * 1000);
    }
};

window.PlatformIntel = PlatformIntel;
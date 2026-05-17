// ============================================================
// Project Model — Project Understanding Layer & Data Models
// ============================================================

var ProjectModel = {
    // --- Project Types & Genres ---
    TYPES: ['album', 'single', 'ep', 'tour', 'compilation', 'soundtrack'],
    GENRES: ['pop', 'hip-hop', 'rock', 'electronic', 'r&b', 'country', 'jazz', 'classical', 'latin', 'k-pop', 'reggaeton', 'indie', 'metal', 'folk', 'world'],
    MARKETING_MODES: ['viral', 'brand', 'aggressive', 'organic', 'global', 'local'],

    // --- Create a new project ---
    createProject: function(config) {
        var project = {
            id: Utils.generateID(),
            name: config.name || 'Untitled Project',
            type: config.type || 'single',            // album, single, ep, tour
            genre: config.genre || 'pop',
            artist: config.artist || '',
            artistProfile: config.artistProfile || {
                followers: 0,
                monthlyListeners: 0,
                topMarkets: [],
                genreAffinity: []
            },
            brandIdentity: config.brandIdentity || {
                tone: 'energetic',        // energetic, chill, dark, uplifting, nostalgic
                colorPalette: [],
                visualStyle: 'modern'
            },
            timeline: config.timeline || {
                startDate: Date.now(),
                releaseDate: null,
                phases: []
            },
            budget: config.budget || {
                total: 0,
                currency: 'USD',
                allocations: {}
            },
            marketingMode: config.marketingMode || 'organic',
            status: 'planning',           // planning, active, paused, completed
            createdAt: Date.now(),
            updatedAt: Date.now(),
            metadata: config.metadata || {}
        };
        return project;
    },

    // --- AI: Identify marketing mode from project attributes ---
    identifyMarketingMode: function(project) {
        var score = {
            viral: 0,
            brand: 0,
            aggressive: 0,
            organic: 0,
            global: 0,
            local: 0
        };

        // Genre signals
        var genre = (project.genre || '').toLowerCase();
        if (['pop', 'hip-hop', 'electronic', 'k-pop', 'reggaeton'].indexOf(genre) > -1) {
            score.viral += 3;
            score.aggressive += 2;
        }
        if (['rock', 'indie', 'metal'].indexOf(genre) > -1) {
            score.brand += 2;
            score.organic += 2;
        }
        if (['jazz', 'classical', 'folk'].indexOf(genre) > -1) {
            score.brand += 3;
            score.organic += 2;
        }
        if (['latin', 'world'].indexOf(genre) > -1) {
            score.global += 3;
            score.viral += 2;
        }

        // Type signals
        if (project.type === 'album') {
            score.brand += 3;
            score.aggressive += 2;
        }
        if (project.type === 'single') {
            score.viral += 3;
            score.aggressive += 2;
        }
        if (project.type === 'ep') {
            score.organic += 2;
            score.brand += 2;
        }
        if (project.type === 'tour') {
            score.local += 3;
            score.brand += 2;
        }

        // Budget signals
        if (project.budget && project.budget.total) {
            if (project.budget.total > 100000) {
                score.aggressive += 3;
                score.global += 2;
            } else if (project.budget.total > 25000) {
                score.brand += 2;
                score.global += 1;
            } else {
                score.organic += 3;
                score.local += 2;
            }
        }

        // Artist profile signals
        if (project.artistProfile) {
            var followers = project.artistProfile.followers || 0;
            var listeners = project.artistProfile.monthlyListeners || 0;
            if (followers > 1000000 || listeners > 5000000) {
                score.global += 3;
                score.aggressive += 2;
            } else if (followers > 50000 || listeners > 200000) {
                score.brand += 2;
                score.viral += 2;
            } else {
                score.organic += 3;
                score.local += 2;
            }
        }

        // Determine primary mode
        var bestMode = 'organic';
        var bestScore = 0;
        for (var mode in score) {
            if (score[mode] > bestScore) {
                bestScore = score[mode];
                bestMode = mode;
            }
        }

        project.marketingMode = bestMode;
        project.marketingScores = score;
        project.updatedAt = Date.now();
        return project;
    },

    // --- AI: Enrich project with full analysis ---
    analyzeProject: function(config) {
        var project = this.createProject(config);
        project = this.identifyMarketingMode(project);
        project.audienceProfile = this._generateAudienceProfile(project);
        project.platformStrategy = PlatformIntel.getStrategy(project);
        project.rolloutPlan = RolloutEngine.generatePlan(project);
        project.creativeBrief = CreativeIntel.generateBrief(project);
        project.kpis = AnalyticsEngine.generateKPIs(project);
        return project;
    },

    // --- AI: Generate audience profile ---
    _generateAudienceProfile: function(project) {
        var genre = project.genre || 'pop';
        var type = project.type || 'single';
        var followers = (project.artistProfile && project.artistProfile.followers) || 0;

        var demographics = {
            ageRange: '18-34',
            gender: 'all',
            topMarkets: ['United States', 'United Kingdom', 'Germany'],
            interests: ['music', 'live events', 'social media']
        };

        if (genre === 'k-pop') {
            demographics.ageRange = '16-28';
            demographics.topMarkets = ['South Korea', 'Japan', 'United States', 'Brazil'];
            demographics.interests.push('k-drama', 'fashion', 'dance');
        }
        if (genre === 'latin') {
            demographics.ageRange = '18-35';
            demographics.topMarkets = ['Mexico', 'Colombia', 'United States', 'Spain'];
            demographics.interests.push('dance', 'festivals', 'lifestyle');
        }
        if (genre === 'classical' || genre === 'jazz') {
            demographics.ageRange = '25-55';
            demographics.interests.push('culture', 'arts', 'education');
        }
        if (genre === 'metal') {
            demographics.ageRange = '16-30';
            demographics.interests.push('gaming', 'subculture', 'live events');
        }

        if (followers > 1000000) {
            demographics.scale = 'mega';
        } else if (followers > 100000) {
            demographics.scale = 'large';
        } else if (followers > 10000) {
            demographics.scale = 'mid';
        } else {
            demographics.scale = 'emerging';
        }

        return demographics;
    },

    // --- Save/Load project ---
    saveProject: function(project) {
        var arr = Storage.load('pm_projects', []);
        var idx = arr.findIndex(function(p) { return p.id === project.id; });
        if (idx > -1) {
            arr[idx] = project;
        } else {
            arr.unshift(project);
        }
        Storage.save('pm_projects', arr);
        return project;
    },

    loadProjects: function() {
        return Storage.load('pm_projects', []);
    },

    loadProject: function(id) {
        var arr = this.loadProjects();
        for (var i = 0; i < arr.length; i++) {
            if (arr[i].id === id) return arr[i];
        }
        return null;
    },

    deleteProject: function(id) {
        var arr = this.loadProjects();
        arr = arr.filter(function(p) { return p.id !== id; });
        Storage.save('pm_projects', arr);
    }
};

window.ProjectModel = ProjectModel;
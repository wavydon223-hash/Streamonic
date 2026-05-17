// ============================================================
// Creative Intelligence Layer — AI Content Generation
// Modular structure for future API integration
// ============================================================

var CreativeIntel = {
    // --- Generate creative brief for a project ---
    generateBrief: function(project) {
        var genre = project.genre || 'pop';
        var type = project.type || 'single';
        var mode = project.marketingMode || 'organic';
        var brand = project.brandIdentity || {};

        return {
            projectName: project.name || 'Untitled',
            artist: project.artist || 'Unknown Artist',
            genre: genre,
            type: type,
            marketingMode: mode,
            tone: brand.tone || 'energetic',
            visualStyle: brand.visualStyle || 'modern',
            colorPalette: brand.colorPalette || [],
            keyMessages: this._generateKeyMessages(project),
            contentPillars: this._generateContentPillars(project),
            targetEmotions: this._generateTargetEmotions(project),
            hookConcepts: this._generateHookConcepts(project),
            visualDirections: this._generateVisualDirections(project)
        };
    },

    // --- AI: Generate TikTok hooks ---
    generateTikTokHooks: function(project, count) {
        count = count || 5;
        var genre = project.genre || 'pop';
        var hooks = [];

        var hookTemplates = {
            pop: [
                'Wait for the drop at 0:{}... 🎵',
                'POV: You just discovered your new favorite song',
                'This {} sound is going viral and here\'s why',
                'Rating {} out of 10... be honest 🎧',
                'If you don\'t know this artist yet, we need to talk',
                'The {} genre just leveled up 🔥',
                'Stop scrolling — this is your next most played song',
                '{} days until you can\'t stop singing this'
            ],
            'hip-hop': [
                'Bars for days. New {} heat 🔥',
                'This flow switch at 0:{} is insane',
                'If you know, you know — {} vibes',
                'The underground {} scene is about to blow',
                '{} just made my whole playlist obsolete'
            ],
            electronic: [
                'This {} drop hits different at 0:{}',
                'Made this {} beat in {} minutes',
                'The EDM community needs to hear this',
                '{} BPM pure energy 🎛️'
            ],
            'r&b': [
                'This {} R&B track is therapy',
                'Vocal run at 0:{} had me SHOOK 🎤',
                'Smooth {} vibes for your late night playlist',
                '{} mood unlocked 🌙'
            ],
            rock: [
                'Turn it UP. New {} anthem 🎸',
                'This {} riff is stuck in my head',
                'Rock isn\'t dead — proof at 0:{}',
                '{} energy is unmatched'
            ],
            latin: [
                'This {} rhythm is CONTAGIOUS 🌴',
                'Dancing to {} and I can\'t stop',
                '{} vibes from {} that hit different',
                'The {} remix we didn\'t know we needed'
            ],
            'k-pop': [
                'The {} choreography in this is EVERYTHING',
                'K-pop just got a new anthem 🎶',
                '0:{} — wait for it... {}',
                'This {} concept is so refreshing'
            ]
        };

        var templates = hookTemplates[genre] || hookTemplates['pop'];
        for (var i = 0; i < count; i++) {
            var template = templates[i % templates.length];
            hooks.push({
                id: 'hook_' + i,
                text: template.replace(/\{\}/g, function() {
                    return project.name || 'this track';
                }),
                type: 'tiktok',
                estimatedHookTime: Math.floor(Math.random() * 15) + 1,
                apealScore: Math.round(Math.random() * 40 + 60)
            });
        }

        return hooks;
    },

    // --- AI: Generate Reels scripts ---
    generateReelsScripts: function(project, count) {
        count = count || 3;
        var scripts = [];
        var genre = project.genre || 'pop';

        for (var i = 0; i < count; i++) {
            scripts.push({
                id: 'reels_' + i,
                title: this._reelsTitle(project, i),
                duration: '15-30s',
                structure: {
                    hook: this._reelsHook(project, genre, i),
                    body: this._reelsBody(project, genre, i),
                    cta: this._reelsCTA(project, i)
                },
                format: i % 2 === 0 ? 'performance' : 'lifestyle',
                musicCue: 'Track plays from 0:' + (i * 5)
            });
        }

        return scripts;
    },

    // --- AI: Generate ad copy ---
    generateAdCopy: function(project, platform, objective) {
        var genre = project.genre || 'pop';
        var type = project.type || 'single';
        var name = project.name || 'Untitled';
        var artist = project.artist || 'Artist';

        var copies = {
            primary: {
                headline: this._adHeadline(project, platform),
                body: this._adBody(project, platform, objective),
                cta: this._adCTA(project, objective)
            },
            variations: []
        };

        // Generate 3 variations
        var variationStyles = ['urgency', 'social_proof', 'curiosity'];
        variationStyles.forEach(function(style) {
            copies.variations.push({
                style: style,
                headline: this._adHeadlineVariation(project, platform, style),
                body: this._adBodyVariation(project, platform, style),
                cta: this._adCTA(project, objective)
            }.bind(this));
        }.bind(this));

        return copies;
    },

    // --- AI: Generate YouTube intro script ---
    generateYouTubeIntro: function(project) {
        return {
            duration: '15-30s',
            script: [
                {
                    time: '0-3s',
                    visual: 'Logo/artist visual with motion graphics',
                    audio: 'Music bed or signature sound',
                    text: 'You\'re watching ' + (project.artist || 'Artist')
                },
                {
                    time: '3-8s',
                    visual: 'Album art / single cover reveal',
                    audio: 'Track snippet or beat drop',
                    text: 'New release: ' + (project.name || 'Untitled')
                },
                {
                    time: '8-15s',
                    visual: 'Artist performance or lifestyle shots',
                    audio: 'Track continues',
                    text: 'Stream now everywhere'
                },
                {
                    time: '15-20s',
                    visual: 'Subscribe button animation + links',
                    audio: 'Music fades under voice',
                    text: 'Subscribe for more. Link in description.'
                }
            ],
            notes: 'Keep branding consistent. End card should link to streaming platforms.'
        };
    },

    // --- AI: Generate press draft ---
    generatePressDraft: function(project) {
        var genre = project.genre || 'pop';
        var type = project.type || 'single';

        return {
            headline: project.artist + ' Drops New ' + (type.charAt(0).toUpperCase() + type.slice(1)) + ': \"' + project.name + '\"',
            subheadline: 'The ' + genre + ' artist delivers ' + (type === 'album' ? 'a genre-defining collection' : 'their latest sonic statement'),
            body: this._pressBody(project),
            boilerplate: this._pressBoilerplate(project),
            contact: {
                name: 'PR Team',
                email: 'press@' + (project.artist || 'artist').toLowerCase().replace(/\s+/g, '') + '.com',
                phone: 'TBD'
            },
            mediaAssets: [
                'High-res cover art (3000x3000)',
                'Artist press photo (portrait + landscape)',
                'Track list / EP credits',
                'Artist bio (short + long version)'
            ]
        };
    },

    // --- AI: Generate content calendar ---
    generateContentCalendar: function(project, days) {
        days = days || 30;
        var calendar = [];
        var startDate = new Date();
        var genre = project.genre || 'pop';
        var type = project.type || 'single';

        var contentTypes = this._getContentTypes(project);

        for (var d = 0; d < days; d++) {
            var date = new Date(startDate.getTime() + d * 86400000);
            var dayOfWeek = date.getDay();

            // Skip some days for organic feel (post 4-5x per week)
            if (dayOfWeek === 0 && Math.random() > 0.5) continue;

            var contentType = contentTypes[d % contentTypes.length];
            calendar.push({
                date: date.toISOString().split('T')[0],
                day: ['Sun','Mon','Tue','Wed','Thu','Fri','Sat'][dayOfWeek],
                contentType: contentType.type,
                platform: contentType.platform,
                caption: this._generateCaption(project, contentType, d),
                assetsNeeded: contentType.assets,
                status: 'planned',
                notes: ''
            });
        }

        return calendar;
    },

    // --- AI: Generate creative variations ---
    generateVariations: function(project, baseCreative, count) {
        count = count || 5;
        var variations = [];

        for (var i = 0; i < count; i++) {
            variations.push({
                id: 'var_' + i,
                name: baseCreative.name + ' - Variation ' + (i + 1),
                hook: this._varyHook(baseCreative.hook, i),
                visual: this._varyVisual(baseCreative.visual, i),
                copy: this._varyCopy(baseCreative.copy, i),
                cta: baseCreative.cta,
                estimatedPerformance: {
                    reach: Math.round(baseCreative.estimatedReach * (0.7 + Math.random() * 0.6)),
                    engagement: Math.round(baseCreative.estimatedEngagement * (0.6 + Math.random() * 0.8))
                }
            });
        }

        return variations;
    },

    // --- Internal helpers ---
    _generateKeyMessages: function(project) {
        var messages = [];
        var type = project.type || 'single';
        messages.push('New ' + type + ' from ' + (project.artist || 'artist'));
        messages.push('Available on all streaming platforms');
        if (type === 'tour') messages.push('Live dates announced');
        if (type === 'album') messages.push('A sonic journey through ' + (project.genre || 'music'));
        return messages;
    },

    _generateContentPillars: function(project) {
        return [
            { name: 'Music First', description: 'Let the music speak — audio-driven content' },
            { name: 'Behind the Scenes', description: 'Studio sessions, creative process, personal moments' },
            { name: 'Community', description: 'Fan engagement, reactions, challenges' },
            { name: 'Lifestyle', description: 'Artist life, aesthetic, brand alignment' }
        ];
    },

    _generateTargetEmotions: function(project) {
        var tone = (project.brandIdentity && project.brandIdentity.tone) || 'energetic';
        var map = {
            energetic: ['excitement', 'anticipation', 'joy'],
            chill: ['relaxation', 'nostalgia', 'peace'],
            dark: ['intrigue', 'mystery', 'intensity'],
            uplifting: ['inspiration', 'hope', 'empowerment'],
            nostalgic: ['warmth', 'sentimentality', 'longing']
        };
        return map[tone] || ['excitement', 'curiosity'];
    },

    _generateHookConcepts: function(project) {
        return [
            'The opening sound that stops the scroll',
            'A visual metaphor for the song\'s theme',
            'Artist in an unexpected setting',
            'Fan reaction compilation setup',
            'Before/after transformation concept'
        ];
    },

    _generateVisualDirections: function(project) {
        var style = (project.brandIdentity && project.brandIdentity.visualStyle) || 'modern';
        var palette = (project.brandIdentity && project.brandIdentity.colorPalette) || ['#7c3aed', '#00e5ff'];
        return {
            style: style,
            palette: palette,
            typography: 'Bold sans-serif, high contrast',
            motion: 'Fast cuts for hooks, smooth transitions for verses',
            lighting: style === 'dark' ? 'Low-key, high contrast' : 'Bright, saturated'
        };
    },

    _reelsTitle: function(project, index) {
        var titles = ['Sound On 🔊', 'You Need to Hear This', 'New Drop Alert', 'This Goes Hard', 'Artist Pick'];
        return titles[index % titles.length] + ' — ' + (project.name || 'Untitled');
    },

    _reelsHook: function(project, genre, index) {
        var hooks = [
            'The moment you\'ve been waiting for',
            'This changes everything',
            'Stop what you\'re doing and listen',
            genre + ' just got an upgrade',
            'First listen reaction guaranteed'
        ];
        return hooks[index % hooks.length];
    },

    _reelsBody: function(project, genre, index) {
        return 'Full track plays over ' + (index === 0 ? 'visualizer' : index === 1 ? 'lifestyle montage' : 'behind-the-scenes') + ' footage with ' + genre + ' energy.';
    },

    _reelsCTA: function(project, index) {
        var ctas = ['Stream now', 'Full link in bio', 'Save this', 'Share with a friend', 'Follow for more'];
        return ctas[index % ctas.length];
    },

    _adHeadline: function(project, platform) {
        var templates = {
            googleAds: project.name + ' — Now Streaming',
            metaAds: 'New Music from ' + (project.artist || 'Artist'),
            tiktokAds: '🔥 ' + (project.name || 'New Track') + ' just dropped',
            youtubeAds: project.name + ' — Official Audio',
            spotifyAdStudio: 'Now Playing: ' + project.name
        };
        return templates[platform] || project.name;
    },

    _adBody: function(project, platform, objective) {
        var type = project.type || 'single';
        var bodies = {
            awareness: 'Discover the latest from ' + (project.artist || 'artist') + '. Stream now on all platforms.',
            consideration: type.charAt(0).toUpperCase() + type + ' alert. ' + (project.name || 'New music') + ' is here.',
            conversion: 'Stream ' + project.name + ' now. Available on Spotify, Apple Music, YouTube Music and more.'
        };
        return bodies[objective] || bodies.awareness;
    },

    _adCTA: function(project, objective) {
        var ctas = {
            awareness: 'Listen Now',
            consideration: 'Stream Here',
            conversion: 'Play on Spotify'
        };
        return ctas[objective] || 'Listen Now';
    },

    _adHeadlineVariation: function(project, platform, style) {
        var base = this._adHeadline(project, platform);
        var modifiers = {
            urgency: base + ' — Limited Time',
            social_proof: base + ' (1M+ Streams)',
            curiosity: 'Why Is Everyone Listening to ' + project.name + '?',
            question: 'Have You Heard ' + (project.artist || 'This Artist') + '\'s New Track?'
        };
        return modifiers[style] || base;
    },

    _adBodyVariation: function(project, platform, style) {
        var genre = project.genre || 'pop';
        var bodies = {
            urgency: 'Don\'t miss out. ' + (project.name || 'This track') + ' is taking over the ' + genre + ' charts.',
            social_proof: 'Join millions already streaming. ' + (project.name || 'New music') + ' from ' + (project.artist || 'artist'),
            curiosity: 'One listen and you\'ll understand why ' + (project.artist || 'they') + ' is the talk of the town.',
            question: 'The answer might surprise you. Stream ' + (project.name || 'new music') + ' today.'
        };
        return bodies[style] || bodies.curiosity;
    },

    _pressBody: function(project) {
        var type = project.type || 'single';
        var genre = project.genre || 'pop';
        return (project.artist || 'Artist') + ' announces ' + type + ' "' + (project.name || 'Untitled') + '", a ' + genre + ' release that showcases the artist\'s evolution. Available on all major streaming platforms.';
    },

    _pressBoilerplate: function(project) {
        return (project.artist || 'Artist') + ' is a genre-defining artist pushing the boundaries of contemporary music. With a growing global fanbase and a string of critically acclaimed releases, they continue to redefine the sound of modern ' + (project.genre || 'music') + '.';
    },

    _getContentTypes: function(project) {
        var genre = project.genre || 'pop';
        var type = project.type || 'single';
        var types = [
            { type: 'audio_preview', platform: 'TikTok', assets: ['15s clip', 'caption'] },
            { type: 'behind_scenes', platform: 'Instagram Reels', assets: ['video', 'caption'] },
            { type: 'lyric_card', platform: 'Instagram Stories', assets: ['image', 'text overlay'] },
            { type: 'announcement', platform: 'Twitter/X', assets: ['image', 'copy'] },
            { type: 'playlist_add', platform: 'Spotify', assets: ['link'] },
            { type: 'fan_engagement', platform: 'TikTok', assets: ['prompt', 'caption'] },
            { type: 'countdown', platform: 'Instagram Stories', assets: ['graphic'] }
        ];
        if (type === 'tour') {
            types.push({ type: 'tour_date', platform: 'Instagram', assets: ['image', 'date', 'link'] });
            types.push({ type: 'venue_spotlight', platform: 'Stories', assets: ['video', 'caption'] });
        }
        return types;
    },

    _varyHook: function(hook, index) {
        var variations = [
            hook,
            hook.replace('!', '?'),
            'Wait for it... ' + hook.toLowerCase(),
            hook.split(' ').reverse().join(' '),
            'POV: ' + hook.toLowerCase()
        ];
        return variations[index % variations.length];
    },

    _varyVisual: function(visual, index) {
        var styles = ['cinematic', 'grainy', 'neon', 'minimal', 'retro'];
        return (visual || 'standard') + ' — ' + styles[index % styles.length] + ' grade';
    },

    _varyCopy: function(copy, index) {
        if (!copy) return '';
        var tones = ['formal', 'casual', 'hype', 'mysterious', 'playful'];
        return '[' + tones[index % tones.length] + '] ' + copy;
    }
};

window.CreativeIntel = CreativeIntel;
// ============================================================
// Brand Mode — Brand Kit Integration (Placeholder)
// Assembles all Brand Mode components into one unified object.
// No external APIs, no real AI generation.
// ============================================================

/**
 * Generate a unified Brand Kit by assembling all Brand Mode components.
 * Calls generateBrandStory(), generateVisualIdentity(), and generateBrandPillars(),
 * and adds placeholder audiencePersona and messagingGuide.
 *
 * @returns {{
 *   story: brandStory,
 *   visuals: visualIdentity,
 *   pillars: brandPillar[],
 *   persona: audiencePersona,
 *   messaging: messagingGuide
 * }}
 */
function generateBrandKit() {
    return {
        story: generateBrandStory(),
        visuals: generateVisualIdentity(),
        pillars: generateBrandPillars(),
        persona: {
            name: "Core Listener",
            ageRange: "22-35",
            interests: ["music discovery", "live events", "artist culture", "vinyl collecting"],
            motivations: "Seeks authentic artistic expression and emotional connection through music",
            painPoints: "Overwhelmed by disposable content, wants deeper artist-fan relationships"
        },
        messaging: {
            tone: "Warm, confident, and artistically driven",
            doSay: [
                "Share the story behind the music",
                "Invite fans into the creative process",
                "Use inclusive language that builds community"
            ],
            dontSay: [
                "Generic promotional language",
                "Anything that feels corporate or inauthentic",
                "Comparisons that diminish other artists"
            ],
            keyPhrases: [
                "Sound of transformation",
                "Music for the ones who listen deeper",
                "Built from the inside out"
            ]
        }
    };
}

window.generateBrandKit = generateBrandKit;
// ============================================================
// Organic Mode — Storytelling Arc Generator (Placeholder)
// Generates an array of storyArc objects using placeholder data.
// No external APIs, no real story content.
// ============================================================

/**
 * Generate an array of placeholder storyArc objects.
 * Matches the storyArc data structure defined in organic-mode-models.js.
 *
 * @returns {storyArc[]}
 */
function generateStoryArcs() {
    return [
        {
            arcName: "The Journey Begins",
            theme: "Starting from zero and building a dream",
            stages: [
                "Introduction — Who I am and why I make music",
                "First Wins — The first song that gained traction",
                "Setbacks — The struggles and self-doubt",
                "Breakthrough — The moment everything clicked"
            ]
        },
        {
            arcName: "Behind the Album",
            theme: "The creative process behind the latest release",
            stages: [
                "The Spark — Where the first idea came from",
                "Building the Sound — Production and experimentation",
                "Writing the Lyrics — Vulnerability on paper",
                "Recording — Capturing the magic in the studio",
                "Release Day — Sharing it with the world"
            ]
        },
        {
            arcName: "Fan Stories",
            theme: "How the music has impacted real listeners",
            stages: [
                "Call for Stories — Asking fans to share their experiences",
                "Spotlight Week — Featuring the most powerful stories",
                "Live Reactions — Reading fan messages on stream",
                "Full Circle — How fan love fuels new music"
            ]
        },
        {
            arcName: "Genre Evolution",
            theme: "Exploring new sounds and pushing boundaries",
            stages: [
                "Roots — Where my sound started",
                "Experimentation — Trying new genres and styles",
                "The Pivot — When the sound shifted unexpectedly",
                "The New Identity — Embracing the evolution"
            ]
        },
        {
            arcName: "30 Days of Music",
            theme: "A daily creative challenge over one month",
            stages: [
                "Day 1-7 — Writing a song a day from scratch",
                "Day 8-14 — Collaborating with other artists",
                "Day 15-21 — Remixing and reimagining old tracks",
                "Day 22-30 — Releasing the best of the month"
            ]
        }
    ];
}

window.generateStoryArcs = generateStoryArcs;
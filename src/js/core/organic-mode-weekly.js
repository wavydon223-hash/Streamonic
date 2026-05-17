// ============================================================
// Organic Mode — Weekly Content Plan Generator (Placeholder)
// Generates an array of weeklyContentPlan objects using placeholder data.
// No external APIs, no real content generation.
// ============================================================

/**
 * Generate an array of 7 placeholder weeklyContentPlan objects.
 * Matches the weeklyContentPlan data structure defined in organic-mode-models.js.
 *
 * @returns {weeklyContentPlan[]}
 */
function generateWeeklyContentPlan() {
    return [
        {
            day: "Monday",
            contentType: "Motivation",
            description: "Start the week with an inspiring quote or story about the creative journey",
            platform: "Instagram"
        },
        {
            day: "Tuesday",
            contentType: "Behind the Scenes",
            description: "Share a casual moment from the studio or rehearsal space",
            platform: "TikTok"
        },
        {
            day: "Wednesday",
            contentType: "Lyric Breakdown",
            description: "Dive into the meaning behind a specific lyric or verse",
            platform: "YouTube Shorts"
        },
        {
            day: "Thursday",
            contentType: "Community Spotlight",
            description: "Feature a fan cover, artwork, or story from the community",
            platform: "Instagram Stories"
        },
        {
            day: "Friday",
            contentType: "New Music Teaser",
            description: "Drop a 15-second snippet of upcoming music to build anticipation",
            platform: "TikTok"
        },
        {
            day: "Saturday",
            contentType: "Live Session",
            description: "Go live for an acoustic performance or Q&A with fans",
            platform: "YouTube"
        },
        {
            day: "Sunday",
            contentType: "Reflection",
            description: "Share personal thoughts, weekly highlights, and gratitude",
            platform: "Email Newsletter"
        }
    ];
}

window.generateWeeklyContentPlan = generateWeeklyContentPlan;
// ============================================================
// Viral Mode — Basic Trend Matcher (Placeholder)
// Generates an array of trendMatch objects using placeholder data.
// No external APIs, no real trend fetching.
// ============================================================

/**
 * Generate an array of placeholder trendMatch objects.
 * Matches the trendMatch data structure defined in viral-mode-models.js.
 *
 * @returns {trendMatch[]}
 */
function generateTrendMatches() {
    return [
        {
            name: "#MidnightVibes",
            platform: "TikTok",
            formatType: "challenge",
            description: "Dark aesthetic clips with moody lighting and slow transitions trending at 2.1M uses"
        },
        {
            name: "Drop the Beat",
            platform: "Reels",
            formatType: "meme",
            description: "Users drop a beat transition synced to a bass hit, widely remixed across genres"
        },
        {
            name: "Wait For It",
            platform: "Shorts",
            formatType: "storytime",
            description: "Suspenseful pause before a reveal, driving high watch-through and replays"
        },
        {
            name: "#FlipTheSwitch",
            platform: "TikTok",
            formatType: "transition",
            description: "Quick outfit or scene change synced to a beat switch, 3.4M uses"
        },
        {
            name: "POV Remix",
            platform: "Reels",
            formatType: "reaction",
            description: "Point-of-view reaction format where creators lip-sync or respond to trending audio"
        },
        {
            name: "Glow Up",
            platform: "TikTok",
            formatType: "challenge",
            description: "Before-and-after transformation clips set to motivational audio, 5.7M uses"
        },
        {
            name: "Speed Ramp",
            platform: "Shorts",
            formatType: "transition",
            description: "Slow-to-fast speed transition synced to percussion hits for dramatic effect"
        },
        {
            name: "#TellMeWithoutTellingMe",
            platform: "Reels",
            formatType: "storytime",
            description: "Indirect storytelling format revealing personal details through visuals and captions"
        },
        {
            name: "Bass Face",
            platform: "TikTok",
            formatType: "meme",
            description: "Exaggerated facial expression timed to a heavy bass drop, highly shareable"
        },
        {
            name: "Choreo Challenge",
            platform: "Shorts",
            formatType: "challenge",
            description: "Simple 8-count dance routine designed for duets and chain reactions"
        }
    ];
}

window.generateTrendMatches = generateTrendMatches;
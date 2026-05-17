// ============================================================
// Local Mode — Regional Trend Scanner (Placeholder)
// Generates an array of regionalTrend objects using placeholder data.
// No external APIs, no real trend scanning.
// ============================================================

/**
 * Generate an array of placeholder regionalTrend objects.
 * Matches the regionalTrend data structure defined in local-mode-models.js.
 *
 * @returns {regionalTrend[]}
 */
function generateRegionalTrends() {
    return [
        {
            trendName: "Saudi Reaction Meme",
            platform: "TikTok",
            description: "A trending reaction format popular in KSA",
            country: "KSA"
        },
        {
            trendName: "Emirati Dialect Challenge",
            platform: "Instagram",
            description: "Challenge using Emirati Arabic phrases and expressions",
            country: "UAE"
        },
        {
            trendName: "GCC Coffee Culture",
            platform: "YouTube",
            description: "Trend showcasing traditional GCC coffee preparation and serving",
            country: "GCC"
        },
        {
            trendName: "Kuwaiti Poetry Snippets",
            platform: "TikTok",
            description: "Short clips of traditional and modern Kuwaiti poetry",
            country: "Kuwait"
        },
        {
            trendName: "Bahraini Pearl Diving Heritage",
            platform: "Instagram",
            description: "Content highlighting Bahrain's pearl diving history and traditions",
            country: "Bahrain"
        },
        {
            trendName: "Omani Frankincense Rituals",
            platform: "YouTube Shorts",
            description: "Videos showcasing traditional Omani frankincense usage and ceremonies",
            country: "Oman"
        },
        {
            trendName: "Qatar Desert Camping",
            platform: "TikTok",
            description: "Trend featuring desert camping experiences in Qatar",
            country: "Qatar"
        }
    ];
}

window.generateRegionalTrends = generateRegionalTrends;
// ============================================================
// Distribution Mode — Distribution Route Generator (Placeholder)
// Generates an array of distributionRoute objects using placeholder data.
// No external APIs, no real routing logic.
// ============================================================

/**
 * Generate an array of placeholder distributionRoute objects.
 * Matches the distributionRoute data structure defined in distribution-mode-models.js.
 *
 * @returns {distributionRoute[]}
 */
function generateDistributionRoutes() {
    return [
        {
            routeName: "Viral → Short‑Form Blast",
            sourceMode: "Viral",
            targetPlatforms: ["TikTok", "Instagram Reels", "YouTube Shorts"],
            description: "A high‑velocity route for short‑form viral content."
        },
        {
            routeName: "Brand → Multi‑Platform Awareness",
            sourceMode: "Brand",
            targetPlatforms: ["Instagram Feed", "Facebook", "X/Twitter", "LinkedIn"],
            description: "Route brand content to platforms suitable for awareness and engagement."
        },
        {
            routeName: "Aggressive → Conversion Funnel",
            sourceMode: "Aggressive",
            targetPlatforms: ["TikTok", "Instagram", "YouTube", "Facebook"],
            description: "Route aggressive campaign content to platforms with strong conversion capabilities."
        },
        {
            routeName: "Organic → Community Engagement",
            sourceMode: "Organic",
            targetPlatforms: ["Instagram Stories", "Facebook Groups", "Discord", "Telegram"],
            description: "Route organic content to platforms ideal for community building and engagement."
        },
        {
            routeName: "Local → Geo‑Targeted Reach",
            sourceMode: "Local",
            targetPlatforms: ["TikTok", "Instagram", "Facebook"],
            description: "Route local content to platforms with strong geo-targeting capabilities."
        },
        {
            routeName: "Global → International Expansion",
            sourceMode: "Global",
            targetPlatforms: ["YouTube", "Instagram", "TikTok", "Facebook"],
            description: "Route global content to platforms with international reach and localization features."
        },
        {
            routeName: "Momentum → Amplification Burst",
            sourceMode: "Momentum",
            targetPlatforms: ["TikTok", "YouTube", "Instagram Reels", "X/Twitter"],
            description: "Route momentum content to platforms capable of rapid amplification and virality."
        },
        {
            routeName: "Cross‑Platform Repurpose",
            sourceMode: "Multiple",
            targetPlatforms: ["All Platforms"],
            description: "Route content for repurposing across multiple platforms with format adaptations."
        }
    ];
}

window.generateDistributionRoutes = generateDistributionRoutes;
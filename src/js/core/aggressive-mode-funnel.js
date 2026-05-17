// ============================================================
// Aggressive Mode — Funnel Map Generator (Placeholder)
// Generates an array of funnelStage objects using placeholder data.
// No external APIs, no real funnel logic.
// ============================================================

/**
 * Generate an array of placeholder funnelStage objects.
 * Matches the funnelStage data structure defined in aggressive-mode-models.js.
 *
 * @returns {funnelStage[]}
 */
function generateFunnelMap() {
    return [
        {
            stageName: "Cold Awareness",
            description: "Introduce the artist to new audiences through broad video views and impressions",
            kpi: "CPM < $8, Reach > 500K"
        },
        {
            stageName: "Warm Engagement",
            description: "Retarget video viewers and link clickers to drive consideration",
            kpi: "CTR > 2%, Video View Rate > 30%"
        },
        {
            stageName: "Hot Conversion",
            description: "Drive streams, saves, and follows from highly engaged audiences",
            kpi: "Conversion Rate > 5%, CPC < $0.50"
        },
        {
            stageName: "Retention Loop",
            description: "Re-engage new listeners with follow-up content and catalog promotion",
            kpi: "Retention Lift > 15%, Repeat Listen Rate > 20%"
        },
        {
            stageName: "Amplification",
            description: "Scale winning creatives and audiences to maximize ROAS",
            kpi: "ROAS > 3x, Budget Efficiency > 90%"
        }
    ];
}

window.generateFunnelMap = generateFunnelMap;
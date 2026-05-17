// ============================================================
// Aggressive Mode — Aggressive Kit Integration (Placeholder)
// Assembles all Aggressive Mode components into one unified object.
// No external APIs, no real AI generation.
// ============================================================

/**
 * Generate a unified Aggressive Kit by assembling all Aggressive Mode components.
 * Calls generateAdConcepts(), generateRetargetingLayers(), and generateFunnelMap(),
 * and adds placeholder ctaVariants and pressureModel.
 *
 * @returns {{
 *   ads: adConcept[],
 *   retargeting: retargetingLayer[],
 *   funnel: funnelStage[],
 *   ctas: ctaVariant[],
 *   pressure: pressureModel
 * }}
 */
function generateAggressiveKit() {
    return {
        ads: generateAdConcepts(),
        retargeting: generateRetargetingLayers(),
        funnel: generateFunnelMap(),
        ctas: [
            {
                text: "Stream Now",
                style: "bold button with gradient",
                placement: "end of pre-roll ad"
            },
            {
                text: "Listen Free",
                style: "text link, underlined",
                placement: "mid-roll overlay"
            },
            {
                text: "Pre-save Now",
                style: "pill button, accent color",
                placement: "post-roll card"
            },
            {
                text: "Add to Library",
                style: "subtle icon button",
                placement: "in-feed native ad"
            },
            {
                text: "Share with a Friend",
                style: "outlined button",
                placement: "story swipe-up"
            }
        ],
        pressure: {
            level: "high",
            frequency: "3x per day per user",
            budgetAllocation: 40,
            notes: "Scale aggressively during launch week, monitor ROAS daily, reallocate from underperforming platforms after 72 hours"
        }
    };
}

window.generateAggressiveKit = generateAggressiveKit;
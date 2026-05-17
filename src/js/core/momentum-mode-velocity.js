// ============================================================
// Momentum Mode — Velocity Engine (Placeholder)
// Generates velocity boosters and momentum metrics using placeholder data.
// No external APIs, no real calculations.
// ============================================================

/**
 * Generate an array of placeholder velocityBooster objects.
 * Matches the velocityBooster data structure defined in momentum-mode-models.js.
 *
 * @returns {velocityBooster[]}
 */
function generateVelocityBoosters() {
    return [
        {
            boosterName: "Cross-Platform Share",
            appliesTo: "Viral",
            description: "Sharing content across multiple platforms simultaneously",
            intensity: 8
        },
        {
            boosterName: "Community Challenge",
            appliesTo: "Organic",
            description: "Launching community-driven challenges and contests",
            intensity: 9
        },
        {
            boosterName: "Influencer Collaboration",
            appliesTo: "Brand",
            description: "Partnering with influencers for brand amplification",
            intensity: 7
        },
        {
            boosterName: "Local Event Integration",
            appliesTo: "Local",
            description: "Tying content to local events and cultural moments",
            intensity: 8
        },
        {
            boosterName: "Global Trend Jacking",
            appliesTo: "Global",
            description: "Leveraging international trends for local relevance",
            intensity: 6
        },
        {
            boosterName: "Retargeting Sequence",
            appliesTo: "Aggressive",
            description: "Strategic retargeting to convert engaged users",
            intensity: 9
        },
        {
            boosterName: "Momentum Compound",
            appliesTo: "Momentum",
            description: "Reinforcing successful patterns to compound growth",
            intensity: 10
        }
    ];
}

/**
 * Generate a placeholder momentumMetrics object.
 * Matches the momentumMetrics data structure defined in momentum-mode-models.js.
 *
 * @returns {momentumMetrics}
 */
function generateMomentumMetrics() {
    return {
        velocityScore: 7.5,
        stackingEfficiency: 8.2,
        activationRate: 6.8,
        compoundingIndex: 7.9
    };
}

window.generateVelocityBoosters = generateVelocityBoosters;
window.generateMomentumMetrics = generateMomentumMetrics;
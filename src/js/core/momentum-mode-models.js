// ============================================================
// Momentum Mode — Data Structures
// Simple data models for Momentum Mode without logic or algorithms.
// ============================================================

/**
 * @typedef {Object} momentumLoop
 * @property {string} loopName - Name of the momentum loop
 * @property {string[]} modesInvolved - Array of mode names involved (e.g., ["Viral", "Brand", "Organic"])
 * @property {string} description - Description of the loop
 * @property {string} expectedOutcome - Expected outcome from the loop
 */

/**
 * @typedef {Object} synergyMap
 * @property {string} sourceMode - Source mode name
 * @property {string} targetMode - Target mode name
 * @property {string} trigger - Trigger that activates the synergy
 * @property {string} effect - Effect of the synergy
 */

/**
 * @typedef {Object} stackingSequence
 * @property {string} sequenceName - Name of the stacking sequence
 * @property {string[]} steps - Ordered list of mode activations
 * @property {string} goal - Goal of the sequence
 */

/**
 * @typedef {Object} velocityBooster
 * @property {string} boosterName - Name of the velocity booster
 * @property {string} appliesTo - Mode name this booster applies to
 * @property {string} description - Description of the booster
 * @property {number} intensity - Intensity level (1-10 placeholder)
 */

/**
 * @typedef {Object} momentumMetrics
 * @property {number} velocityScore - Velocity score metric
 * @property {number} stackingEfficiency - Stacking efficiency metric
 * @property {number} activationRate - Cross-mode activation rate
 * @property {number} compoundingIndex - Compounding index metric
 */

// Example placeholder objects (for reference only - not to be used as logic)
const momentumLoopExample = {
    loopName: "Viral to Brand Momentum",
    modesInvolved: ["Viral", "Brand"],
    description: "Leveraging viral reach to build brand awareness",
    expectedOutcome: "Increased brand recognition and follower growth"
};

const synergyMapExample = {
    sourceMode: "Organic",
    targetMode: "Global",
    trigger: "High engagement on local content",
    effect: "Amplify successful local content globally"
};

const stackingSequenceExample = {
    sequenceName: "Growth Foundation Builder",
    steps: ["Brand", "Organic", "Viral"],
    goal: "Establish foundation, then grow reach, then amplify"
};

const velocityBoosterExample = {
    boosterName: "Cross-Platform Share",
    appliesTo: "Viral",
    description: "Sharing content across multiple platforms simultaneously",
    intensity: 8
};

const momentumMetricsExample = {
    velocityScore: 7.5,
    stackingEfficiency: 8.2,
    activationRate: 6.8,
    compoundingIndex: 7.9
};
// ============================================================
// AGGRESSIVE MODE — Data Structures Only
// No logic, no algorithms, no UI, no API calls.
// Pure data model definitions for future implementation.
// ============================================================

// ----------------------------------------------------------
// 1. adConcept
// A complete ad creative concept ready for production.
// ----------------------------------------------------------

/**
 * @typedef {Object} adConcept
 * @property {string} adTitle    — Short, catchy title for the ad
 * @property {string} hook       — The attention-grabbing opening line
 * @property {string} script     — Full ad script / copy
 * @property {string} platform   — Target platform (TikTok, Meta, YouTube, Spotify)
 * @property {string} objective  — Campaign objective (awareness, consideration, conversion)
 */

// --- Example shape (not for use, documentation only) ---
// const adConcept = {
//     adTitle: "The Drop Reveal",
//     hook: "Wait for it... this changes everything",
//     script: "You've heard the snippet everywhere. Now hear the full thing.",
//     platform: "TikTok",
//     objective: "conversion"
// };


// ----------------------------------------------------------
// 2. retargetingLayer
// A single layer in a retargeting funnel sequence.
// ----------------------------------------------------------

/**
 * @typedef {Object} retargetingLayer
 * @property {string} layerName         — Name of the retargeting layer
 * @property {string} audienceDescription — Who this layer targets
 * @property {string} timeWindow        — How long after action to retarget
 * @property {string} message           — Key messaging for this layer
 */

// --- Example shape (not for use, documentation only) ---
// const retargetingLayer = {
//     layerName: "Video Viewers",
//     audienceDescription: "Users who watched 50%+ of any video ad in the last 14 days",
//     timeWindow: "14 days",
//     message: "You started watching — here's the full track. Stream now."
// };


// ----------------------------------------------------------
// 3. funnelStage
// A stage in the conversion funnel with its primary KPI.
// ----------------------------------------------------------

/**
 * @typedef {Object} funnelStage
 * @property {string} stageName  — Name of the funnel stage (TOFU/MOFU/BOFU)
 * @property {string} description — What happens at this stage
 * @property {string} kpi        — Primary metric to optimize
 */

// --- Example shape (not for use, documentation only) ---
// const funnelStage = {
//     stageName: "TOFU - Awareness",
//     description: "Reach new audiences with video views and impressions",
//     kpi: "CPM < $8, Video View Rate > 30%"
// };


// ----------------------------------------------------------
// 4. ctaVariant
// A call-to-action variation for A/B testing.
// ----------------------------------------------------------

/**
 * @typedef {Object} ctaVariant
 * @property {string} text       — The CTA copy
 * @property {string} style      — Visual style (button, text link, overlay)
 * @property {string} placement  — Where it appears (pre-roll, mid-roll, post, bio)
 */

// --- Example shape (not for use, documentation only) ---
// const ctaVariant = {
//     text: "Stream Now on Spotify",
//     style: "bold button with gradient",
//     placement: "end of pre-roll ad"
// };


// ----------------------------------------------------------
// 5. pressureModel
// Defines ad spend pressure and pacing rules.
// ----------------------------------------------------------

/**
 * @typedef {Object} pressureModel
 * @property {string}  level           — Pressure level (low, medium, high, blitz)
 * @property {string}  frequency       — Ad frequency cap per user
 * @property {number}  budgetAllocation — % of total budget for this phase
 * @property {string}  notes           — Additional context or rules
 */

// --- Example shape (not for use, documentation only) ---
// const pressureModel = {
//     level: "high",
//     frequency: "3x per day per user",
//     budgetAllocation: 40,
//     notes: "Scale aggressively during launch week, monitor ROAS daily"
// };


// ----------------------------------------------------------
// Exposed registry (empty by default, populated externally)
// ----------------------------------------------------------

var AggressiveModeModels = {
    adConcepts: [],       // Array<adConcept>
    retargetingLayers: [], // Array<retargetingLayer>
    funnelStages: [],     // Array<funnelStage>
    ctaVariants: [],      // Array<ctaVariant>
    pressureModels: [],   // Array<pressureModel>

    // Placeholder methods — NO implementation, just signatures
    addAdConcept: function(/** @type {adConcept} */ concept) { /* no-op */ },
    addRetargetingLayer: function(/** @type {retargetingLayer} */ layer) { /* no-op */ },
    addFunnelStage: function(/** @type {funnelStage} */ stage) { /* no-op */ },
    addCtaVariant: function(/** @type {ctaVariant} */ variant) { /* no-op */ },
    addPressureModel: function(/** @type {pressureModel} */ model) { /* no-op */ }
};

window.AggressiveModeModels = AggressiveModeModels;
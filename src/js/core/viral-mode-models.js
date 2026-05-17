// ============================================================
// VIRAL MODE — Data Structures Only
// No logic, no algorithms, no UI, no API calls.
// Pure data model definitions for future implementation.
// ============================================================

// ----------------------------------------------------------
// 1. viralHook
// Represents a detected or candidate hook segment within
// a short-form video (TikTok, Reels, Shorts).
// ----------------------------------------------------------

/**
 * @typedef {Object} viralHook
 * @property {number} startTime       — Start time of the hook in seconds
 * @property {number} endTime         — End time of the hook in seconds
 * @property {string} lyric           — Lyric text during the hook window
 * @property {number} confidenceScore — 0.0 to 1.0, how likely this is a viral hook
 */

// --- Example shape (not for use, documentation only) ---
// const viralHook = {
//     startTime: 0.0,
//     endTime: 3.5,
//     lyric: "Wait for it, wait for it...",
//     confidenceScore: 0.87
// };


// ----------------------------------------------------------
// 2. trendMatch
// Represents a matched platform trend that content can
// be aligned to for viral potential.
// ----------------------------------------------------------

/**
 * @typedef {Object} trendMatch
 * @property {string} name        — Trend name / hashtag / audio title
 * @property {string} platform    — 'TikTok' | 'Instagram Reels' | 'YouTube Shorts'
 * @property {string} formatType  — 'sound' | 'hashtag' | 'challenge' | 'transition' | 'format'
 * @property {string} description — Brief description of the trend
 */

// --- Example shape (not for use, documentation only) ---
// const trendMatch = {
//     name: "#MidnightVibes",
//     platform: "TikTok",
//     formatType: "hashtag",
//     description: "Dark aesthetic clips with moody lighting trending at 2.1M uses"
// };


// ----------------------------------------------------------
// 3. viralScript
// A pre-written short-form content script optimized for
// viral distribution across platforms.
// ----------------------------------------------------------

/**
 * @typedef {Object} viralScript
 * @property {string} ideaTitle    — Short title for the creative concept
 * @property {string} scriptText   — Full spoken/narration script
 * @property {string} caption      — On-screen caption / subtitle text
 * @property {string} onScreenText — Text overlay directions (font, position, timing)
 * @property {string} editingNotes — Post-production notes (cuts, transitions, effects)
 */

// --- Example shape (not for use, documentation only) ---
// const viralScript = {
//     ideaTitle: "The Drop Reveal",
//     scriptText: "You're not ready for this drop... wait for it...",
//     caption: "New single dropping Friday 🔥",
//     onScreenText: "Bold white text, center screen, appears at 0:02, shake effect",
//     editingNotes: "Jump cut at 0:03, zoom punch on beat drop, 9:16 aspect ratio"
// };


// ----------------------------------------------------------
// Exposed registry (empty by default, populated externally)
// ----------------------------------------------------------

var ViralModeModels = {
    hooks: [],        // Array<viralHook>
    trends: [],       // Array<trendMatch>
    scripts: [],      // Array<viralScript>

    // Placeholder methods — NO implementation, just signatures
    addHook: function(/** @type {viralHook} */ hook) { /* no-op */ },
    addTrend: function(/** @type {trendMatch} */ trend) { /* no-op */ },
    addScript: function(/** @type {viralScript} */ script) { /* no-op */ }
};

window.ViralModeModels = ViralModeModels;
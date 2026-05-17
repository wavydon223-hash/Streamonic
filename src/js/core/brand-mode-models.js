// ============================================================
// BRAND MODE — Data Structures Only
// No logic, no algorithms, no UI, no API calls.
// Pure data model definitions for future implementation.
// ============================================================

// ----------------------------------------------------------
// 1. brandStory
// The foundational narrative that defines the artist's brand.
// ----------------------------------------------------------

/**
 * @typedef {Object} brandStory
 * @property {string} origin        — Where the artist/music comes from
 * @property {string} mission       — The artist's mission or purpose
 * @property {string} narrativeTheme — Central recurring narrative thread
 * @property {string} emotionalTone — Dominant emotional register
 */

// --- Example shape (not for use, documentation only) ---
// const brandStory = {
//     origin: "Born in the underground scene of Detroit, shaped by late-night studio sessions and raw street energy",
//     mission: "To create music that makes people feel seen and understood",
//     narrativeTheme: "Transformation through sound — every release marks a new chapter",
//     emotionalTone: "Introspective yet powerful, vulnerable yet confident"
// };


// ----------------------------------------------------------
// 2. brandPillars
// Core thematic pillars that all content and messaging aligns to.
// ----------------------------------------------------------

/**
 * @typedef {Object} brandPillar
 * @property {string} pillarName   — Short name for the pillar
 * @property {string} description  — What this pillar represents and how it manifests
 */

/**
 * @typedef {Object} brandPillars
 * @property {brandPillar[]} pillars — Array of brand pillars (typically 3-5)
 */

// --- Example shape (not for use, documentation only) ---
// const brandPillars = {
//     pillars: [
//         { pillarName: "Authenticity", description: "Raw, unfiltered content that shows the real artist behind the music" },
//         { pillarName: "Creative Evolution", description: "Documenting growth and experimentation across releases" },
//         { pillarName: "Community", description: "Building a tribe of loyal fans who feel like insiders" },
//         { pillarName: "Cultural Impact", description: "Engaging with social themes and movements through art" }
//     ]
// };


// ----------------------------------------------------------
// 3. visualIdentity
// The visual language system that makes the brand instantly
// recognizable across all platforms and materials.
// ----------------------------------------------------------

/**
 * @typedef {Object} visualIdentity
 * @property {string[]} colorPalette  — Hex codes for primary, secondary, and accent colors
 * @property {string}   typography    — Font family and hierarchy description
 * @property {string}   imageryStyle — Photography/graphic style description
 * @property {string[]} moodKeywords  — Keywords that define the visual mood
 */

// --- Example shape (not for use, documentation only) ---
// const visualIdentity = {
//     colorPalette: ["#1a1a2e", "#e94560", "#0f3460", "#ffffff"],
//     typography: "Bold sans-serif headlines, clean body text, high contrast",
//     imageryStyle: "Cinematic, moody lighting, high contrast, film grain texture",
//     moodKeywords: ["dark", "cinematic", "intimate", "bold", "modern"]
// };


// ----------------------------------------------------------
// 4. audiencePersona
// A detailed profile of the ideal fan / target audience member.
// ----------------------------------------------------------

/**
 * @typedef {Object} audiencePersona
 * @property {string}  name         — Descriptive name for the persona (e.g., "Creative Explorer")
 * @property {string}  ageRange     — Target age bracket (e.g., "18-34")
 * @property {string[]} interests   — Key interests and hobbies
 * @property {string}  motivations  — What drives this person to engage with music/artists
 * @property {string}  painPoints   — Frustrations or gaps this persona experiences
 */

// --- Example shape (not for use, documentation only) ---
// const audiencePersona = {
//     name: "Creative Explorer",
//     ageRange: "20-32",
//     interests: ["indie music", "visual art", "film photography", "live events", "fashion"],
//     motivations: "Seeking authentic artistic expression and community belonging",
//     painPoints: "Feels overwhelmed by mainstream content, wants deeper artist connection"
// };


// ----------------------------------------------------------
// 5. messagingGuide
// A reference for consistent brand communication across
// all channels and touchpoints.
// ----------------------------------------------------------

/**
 * @typedef {Object} messagingGuide
 * @property {string}   tone       — Overall communication tone
 * @property {string[]} doSay      — Phrases and approaches to use
 * @property {string[]} dontSay    — Phrases and approaches to avoid
 * @property {string[]} keyPhrases — Signature phrases and taglines
 */

// --- Example shape (not for use, documentation only) ---
// const messagingGuide = {
//     tone: "Warm, confident, and artistically driven",
//     doSay: [
//         "Share the story behind the music",
//         "Invite fans into the creative process",
//         "Use inclusive language that builds community"
//     ],
//     dontSay: [
//         "Generic promotional language",
//         "Anything that feels corporate or inauthentic",
//         "Comparisons to other artists that diminish their work"
//     ],
//     keyPhrases: [
//         "Sound of transformation",
//         "Music for the ones who listen deeper",
//         "Built from the inside out"
//     ]
// };


// ----------------------------------------------------------
// Exposed registry (empty by default, populated externally)
// ----------------------------------------------------------

var BrandModeModels = {
    story: null,           // brandStory
    pillars: null,         // brandPillars
    visualIdentity: null,  // visualIdentity
    audience: null,        // audiencePersona
    messaging: null,       // messagingGuide

    // Placeholder methods — NO implementation, just signatures
    setStory: function(/** @type {brandStory} */ story) { /* no-op */ },
    addPillar: function(/** @type {brandPillar} */ pillar) { /* no-op */ },
    setVisualIdentity: function(/** @type {visualIdentity} */ vi) { /* no-op */ },
    setAudience: function(/** @type {audiencePersona} */ persona) { /* no-op */ },
    setMessaging: function(/** @type {messagingGuide} */ guide) { /* no-op */ }
};

window.BrandModeModels = BrandModeModels;
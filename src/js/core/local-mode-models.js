// ============================================================
// Local Mode — Data Structures
// Simple data models for Local Mode without logic or algorithms.
// ============================================================

/**
 * @typedef {Object} gccContentItem
 * @property {string} title - Title of the GCC content item
 * @property {string} platform - Target platform (e.g., TikTok, Instagram)
 * @property {string} description - Description of the content
 * @property {string} region - Specific GCC region (e.g., UAE, KSA, Qatar)
 */

/**
 * @typedef {Object} arabicScript
 * @property {string} scriptName - Name/title of the script
 * @property {string} dialect - Arabic dialect (e.g., Emirati, Saudi, Khaleeji)
 * @property {string[]} lines - Array of script lines
 */

/**
 * @typedef {Object} regionalTrend
 * @property {string} trendName - Name of the trend
 * @property {string} platform - Platform where trend is observed
 * @property {string} description - Description of the trend
 * @property {string} country - Specific GCC country
 */

/**
 * @typedef {Object} localChallenge
 * @property {string} challengeName - Name of the challenge
 * @property {string} platform - Platform for the challenge
 * @property {string} instructions - Instructions for participating
 * @property {string} reward - Reward for participation
 */

/**
 * @typedef {Object} gccPersona
 * @property {string} personaName - Name of the persona
 * @property {string} country - GCC country of residence
 * @property {string[]} traits - Personality and behavioral traits
 * @property {string[]} contentPreferences - Preferred content types/topics
 */

// Example placeholder objects (for reference only - not to be used as logic)
const gccContentItemExample = {
    title: "Example Title",
    platform: "TikTok",
    description: "Example description",
    region: "UAE"
};

const arabicScriptExample = {
    scriptName: "Example Script",
    dialect: "Emirati",
    lines: ["Line 1", "Line 2", "Line 3"]
};

const regionalTrendExample = {
    trendName: "Example Trend",
    platform: "Instagram",
    description: "Example trend description",
    country: "KSA"
};

const localChallengeExample = {
    challengeName: "Example Challenge",
    platform: "YouTube",
    instructions: "Example instructions",
    reward: "Example reward"
};

const gccPersonaExample = {
    personaName: "Example Persona",
    country: "UAE",
    traits: ["Trait 1", "Trait 2"],
    contentPreferences: ["Preference 1", "Preference 2"]
};
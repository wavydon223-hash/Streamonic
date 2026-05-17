// ============================================================
// Global Mode — Data Structures
// Simple data models for Global Mode without logic or algorithms.
// ============================================================

/**
 * @typedef {Object} globalContentItem
 * @property {string} title - Title of the global content item
 * @property {string} platform - Target platform (e.g., TikTok, Instagram)
 * @property {string} description - Description of the content
 * @property {string} region - Target region (e.g., US, UK, EU, LATAM, Africa, Asia, Australia)
 */

/**
 * @typedef {Object} internationalScript
 * @property {string} scriptName - Name/title of the script
 * @property {string} language - Language of the script (e.g., English, Spanish, French, Hindi, Japanese)
 * @property {string[]} lines - Array of script lines
 */

/**
 * @typedef {Object} globalTrend
 * @property {string} trendName - Name of the trend
 * @property {string} platform - Platform where trend is observed
 * @property {string} description - Description of the trend
 * @property {string} region - Target region
 */

/**
 * @typedef {Object} regionPersona
 * @property {string} personaName - Name of the persona
 * @property {string} region - Region of residence
 * @property {string[]} traits - Personality and behavioral traits
 * @property {string[]} contentPreferences - Preferred content types/topics
 */

/**
 * @typedef {Object} languageVariant
 * @property {string} language - Language (e.g., English, Spanish)
 * @property {string} tone - Tone of communication (e.g., formal, casual, humorous)
 * @property {string[]} examples - Example phrases or sentences in this language variant
 */

// Example placeholder objects (for reference only - not to be used as logic)
const globalContentItemExample = {
    title: "Example Title",
    platform: "TikTok",
    description: "Example description",
    region: "US"
};

const internationalScriptExample = {
    scriptName: "Example Script",
    language: "English",
    lines: ["Line 1", "Line 2", "Line 3"]
};

const globalTrendExample = {
    trendName: "Example Trend",
    platform: "Instagram",
    description: "Example trend description",
    region: "EU"
};

const regionPersonaExample = {
    personaName: "Example Persona",
    region: "UK",
    traits: ["Trait 1", "Trait 2"],
    contentPreferences: ["Preference 1", "Preference 2"]
};

const languageVariantExample = {
    language: "English",
    tone: "Casual",
    examples: ["Hey there!", "What's up?", "How's it going?"]
};
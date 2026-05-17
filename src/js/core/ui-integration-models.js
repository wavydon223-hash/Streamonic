// ============================================================
// UI Integration — Data Structures
// Simple data models for UI Integration without UI logic or rendering.
// ============================================================

/**
 * @typedef {Object} uiModeDefinition
 * @property {string} modeName - Display name of the mode (e.g., "Viral Mode")
 * @property {string} modeKey - Unique key for the mode (e.g., "viral", "brand", "distribution", "monetization")
 * @property {string} description - Description of what the mode does
 * @property {string} kitFunction - Name of the function that generates the kit (e.g., "generateViralKit")
 * @property {string} icon - Placeholder icon name (e.g., "viral-icon", "brand-icon")
 */

/**
 * @typedef {Object} uiModeRegistry
 * @property {uiModeDefinition[]} modes - Array of all available mode definitions
 */

/**
 * @typedef {Object} uiViewConfig
 * @property {string} modeKey - The mode key this view config is for
 * @property {string[]} sections - Array of section names to display (e.g., ["Overview", "Kit Preview", "Generate Button"])
 */

/**
 * @typedef {Object} uiOutputMapping
 * @property {string} modeKey - The mode key this output mapping is for
 * @property {string[]} outputSections - Array of output section names to display (e.g., ["routes", "offers", "funnels", "pricing", "conversion"])
 */

// Example placeholder objects (for reference only - not to be used as logic)
const uiModeDefinitionExample = {
    modeName: "Viral Mode",
    modeKey: "viral",
    description: "Create trend-based content for rapid reach and engagement",
    kitFunction: "generateViralKit",
    icon: "viral-icon"
};

const uiModeRegistryExample = {
    modes: [
        {
            modeName: "Viral Mode",
            modeKey: "viral",
            description: "Create trend-based content for rapid reach and engagement",
            kitFunction: "generateViralKit",
            icon: "viral-icon"
        },
        {
            modeName: "Brand Mode",
            modeKey: "brand",
            description: "Build brand identity and storytelling",
            kitFunction: "generateBrandKit",
            icon: "brand-icon"
        }
    ]
};

const uiViewConfigExample = {
    modeKey: "viral",
    sections: ["Overview", "Kit Preview", "Generate Button"]
};

const uiOutputMappingExample = {
    modeKey: "viral",
    outputSections: ["trends", "scripts", "challenges"]
};
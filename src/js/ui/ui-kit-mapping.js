// ============================================================
// UI Integration — Kit Display Logic
// Helper functions that map generated kits into UI-friendly structured output.
// No DOM manipulation, no rendering, no event listeners.
// ============================================================

// UI Output Mapping - defines what sections to display for each mode in the UI
/** @type {Object.<string, string[]>} */
const uiOutputMapping = {
    viral: ["trends", "scripts", "challenges"],
    brand: ["storyArcs", "pillars", "visual"],
    aggressive: ["ads", "funnel", "retargeting"],
    organic: ["weeklyPlan", "communityLoops", "storyArcs", "evergreenContent", "platformRituals"],
    local: ["gccContent", "arabicScripts", "regionalTrends", "localChallenges", "gccPersonas"],
    global: ["globalContent", "internationalScripts", "globalTrends", "regionPersonas", "languageVariants"],
    momentum: ["momentumLoops", "synergyMaps", "velocityBoosters", "momentumMetrics"],
    distribution: ["distributionRoutes", "repurposeMaps", "postingSchedules", "distributionMetrics"],
    monetization: ["monetizationOffers", "funnelBlueprints", "pricingModels", "conversionMaps", "monetizationMetrics"]
};

/**
 * Get the output mapping for a given mode key.
 * Returns the outputSections array for the given modeKey.
 * If none found, return an empty array.
 *
 * @param {string} modeKey - The mode key to get output mapping for
 * @returns {string[]} Array of output section names
 */
function getOutputMapping(modeKey) {
    return uiOutputMapping[modeKey] || [];
}

/**
 * Normalize a kit object for UI display.
 * Accepts any generated kit object and returns a normalized object
 * where each key maps to a simple array or object.
 * No transformation logic, just shallow normalization.
 *
 * @param {Object} kit - The generated kit object
 * @returns {Object} Normalized kit object
 */
function normalizeKitForUI(kit) {
    // Return a shallow copy of the kit for UI normalization
    return { ...kit };
}

/**
 * Map a kit to UI sections based on mode key.
 * Uses getOutputMapping(modeKey) and normalizeKitForUI(kit)
 * Returns an array of objects shaped like:
 *   { section: string, data: any }
 * Only include sections that exist in both:
 *   - the kit
 *   - the output mapping
 *
 * @param {string} modeKey - The mode key
 * @param {Object} kit - The generated kit object
 * @returns {Array<{section: string, data: any}>} Array of section-data pairs
 */
function mapKitToUISections(modeKey, kit) {
    const outputSections = getOutputMapping(modeKey);
    const normalizedKit = normalizeKitForUI(kit);
    
    return outputSections
        .filter(section => normalizedKit.hasOwnProperty(section))
        .map(section => ({
            section,
            data: normalizedKit[section]
        }));
}

// Export functions for use in other modules
window.getOutputMapping = getOutputMapping;
window.normalizeKitForUI = normalizeKitForUI;
window.mapKitToUISections = mapKitToUISections;
// ============================================================
// UI Integration — Full Dashboard Integration
// Unified dashboard controller connecting mode selection, kit generation, and UI mapping.
// No DOM manipulation, no rendering, no event listeners.
// ============================================================

/**
 * Generate UI for the currently selected mode.
 * Uses getSelectedModeConfig() to get the mode configuration.
 * If no mode selected, returns { error: "No mode selected" }.
 * Calls the kitFunction (by name) from the mode config using window[kitFunction].
 * Returns the raw kit.
 *
 * @returns {Object} The generated kit or error object
 */
function generateUIForSelectedMode() {
    const modeConfig = getSelectedModeConfig();
    if (!modeConfig) {
        return { error: "No mode selected" };
    }
    
    const kitFunctionName = modeConfig.kitFunction;
    if (typeof window[kitFunctionName] === 'function') {
        return window[kitFunctionName]();
    } else {
        return { error: `Kit function ${kitFunctionName} not found` };
    }
}

/**
 * Build UI output for the selected mode.
 * Calls generateUIForSelectedMode().
 * If error, returns the error object.
 * Uses mapKitToUISections(modeKey, kit).
 * Returns:
 *   {
 *     modeKey,
 *     sections: [ ...mappedSections ]
 *   }
 *
 * @returns {Object} UI output object or error object
 */
function buildUIOutputForSelectedMode() {
    const kitResult = generateUIForSelectedMode();
    if (kitResult.error) {
        return kitResult;
    }
    
    const modeConfig = getSelectedModeConfig();
    if (!modeConfig) {
        return { error: "No mode selected" };
    }
    
    const modeKey = modeConfig.modeKey;
    const mappedSections = mapKitToUISections(modeKey, kitResult);
    
    return {
        modeKey,
        sections: mappedSections
    };
}

/**
 * Get the full dashboard state.
 * Returns a unified object:
 *   {
 *     selectedMode: getSelectedMode(),
 *     selectedModeConfig: getSelectedModeConfig(),
 *     uiOutput: buildUIOutputForSelectedMode()
 *   }
 *
 * @returns {Object} Full dashboard state
 */
function getFullDashboardState() {
    return {
        selectedMode: getSelectedMode(),
        selectedModeConfig: getSelectedModeConfig(),
        uiOutput: buildUIOutputForSelectedMode()
    };
}

// Export functions for use in other modules
window.generateUIForSelectedMode = generateUIForSelectedMode;
window.buildUIOutputForSelectedMode = buildUIOutputForSelectedMode;
window.getFullDashboardState = getFullDashboardState;
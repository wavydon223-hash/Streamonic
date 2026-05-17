// ============================================================
// UI Integration — Mode Selection Logic
// Internal UI state and helper functions for selecting and retrieving the active mode.
// No DOM manipulation, no rendering, no event listeners.
// ============================================================

/**
 * UI state object
 * @type {Object}
 */
const uiState = {
    selectedModeKey: null
};

/**
 * Updates the selected mode in UI state
 * @param {string} modeKey - The key of the mode to select
 * @returns {Object} The updated uiState
 */
function setSelectedMode(modeKey) {
    uiState.selectedModeKey = modeKey;
    return uiState;
}

/**
 * Gets the currently selected mode key
 * @returns {string|null} The selected mode key or null if none selected
 */
function getSelectedMode() {
    return uiState.selectedModeKey;
}

/**
 * Gets the selected mode configuration from the registry
 * @returns {Object|null} The matching uiModeDefinition or null if not found
 */
function getSelectedModeConfig() {
    const selectedKey = getSelectedMode();
    if (!selectedKey) return null;
    
    const registry = getUIModeRegistry();
    return registry.modes.find(mode => mode.modeKey === selectedKey) || null;
}

// Export functions and state for use in other modules
window.uiState = uiState;
window.setSelectedMode = setSelectedMode;
window.getSelectedMode = getSelectedMode;
window.getSelectedModeConfig = getSelectedModeConfig;
// ============================================================
// UI Integration — Minimal UI Components
// Placeholder UI component functions (non-functional, no rendering logic)
// ============================================================

/**
 * Represents the main hub listing all modes.
 * Returns a placeholder object.
 *
 * @returns {Object}
 */
function UIModeHub() {
    return {
        component: "UIModeHub",
        description: "Container for listing all modes."
    };
}

/**
 * Represents a single mode card.
 * Accepts a mode object.
 * Returns a placeholder object.
 *
 * @param {Object} mode - The mode object
 * @returns {Object}
 */
function UIModeCard(mode) {
    return {
        component: "UIModeCard",
        mode
    };
}

/**
 * Represents the detail view for a selected mode.
 * Returns a placeholder object.
 *
 * @param {string} modeKey - The key of the mode to display
 * @returns {Object}
 */
function UIModeDetail(modeKey) {
    return {
        component: "UIModeDetail",
        modeKey
    };
}

/**
 * Represents the panel where generated kits will be displayed.
 * Returns a placeholder object.
 *
 * @returns {Object}
 */
function UIOutputPanel() {
    return {
        component: "UIOutputPanel",
        description: "Container for displaying generated kit output."
    };
}

// Export functions for use in other modules
window.UIModeHub = UIModeHub;
window.UIModeCard = UIModeCard;
window.UIModeDetail = UIModeDetail;
window.UIOutputPanel = UIOutputPanel;
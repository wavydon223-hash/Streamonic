// ============================================================
// UI Integration — Mode Registry Population
// Populates the uiModeRegistry with all 9 modes using the uiModeDefinition structure.
// No UI logic, no imports, no rendering, no event handlers.
// ============================================================

/**
 * Get the UI mode registry containing all available modes.
 * Matches the uiModeRegistry data structure defined in ui-integration-models.js.
 *
 * @returns {Object}
 */
function getUIModeRegistry() {
    return {
        modes: [
            {
                modeName: "Viral Mode",
                modeKey: "viral",
                description: "High‑velocity content engine for explosive reach.",
                kitFunction: "generateViralKit",
                icon: "🔥"
            },
            {
                modeName: "Brand Mode",
                modeKey: "brand",
                description: "Build brand identity and storytelling.",
                kitFunction: "generateBrandKit",
                icon: "🎯"
            },
            {
                modeName: "Aggressive Mode",
                modeKey: "aggressive",
                description: "Conversion-focused campaigns for rapid growth.",
                kitFunction: "generateAggressiveKit",
                icon: "⚡"
            },
            {
                modeName: "Organic Mode",
                modeKey: "organic",
                description: "Authentic audience building through storytelling and community.",
                kitFunction: "generateOrganicKit",
                icon: "🌱"
            },
            {
                modeName: "Local Mode",
                modeKey: "local",
                description: "UAE/KSA/GCC regional strategy with Arabic content and cultural relevance.",
                kitFunction: "generateLocalKit",
                icon: "🌍"
            },
            {
                modeName: "Global Mode",
                modeKey: "global",
                description: "International expansion with multi-region content and global persona adaptation.",
                kitFunction: "generateGlobalKit",
                icon: "🌐"
            },
            {
                modeName: "Momentum Mode",
                modeKey: "momentum",
                description: "Growth stacking and compounding velocity through multi-mode synergy.",
                kitFunction: "generateMomentumKit",
                icon: "🚀"
            },
            {
                modeName: "Distribution Mode",
                modeKey: "distribution",
                description: "Multi-platform routing, scheduling, repurposing, and posting pipelines.",
                kitFunction: "generateDistributionKit",
                icon: "📡"
            },
            {
                modeName: "Monetization Mode",
                modeKey: "monetization",
                description: "Turning content into revenue streams through offers, funnels, and conversions.",
                kitFunction: "generateMonetizationKit",
                icon: "💰"
            }
        ]
    };
}

window.getUIModeRegistry = getUIModeRegistry;
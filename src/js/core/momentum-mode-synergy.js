// ============================================================
// Momentum Mode — Synergy Scanner (Placeholder)
// Generates an array of synergyMap objects using placeholder data.
// No external APIs, no real synergy logic.
// ============================================================

/**
 * Generate an array of placeholder synergyMap objects.
 * Matches the synergyMap data structure defined in momentum-mode-models.js.
 *
 * @returns {synergyMap[]}
 */
function generateSynergyMaps() {
    return [
        {
            sourceMode: "Viral",
            targetMode: "Brand",
            trigger: "High reach detected",
            effect: "Brand storytelling recommended"
        },
        {
            sourceMode: "Brand",
            targetMode: "Organic",
            trigger: "Strong brand trust established",
            effect: "Deepen community engagement through authentic content"
        },
        {
            sourceMode: "Organic",
            targetMode: "Local",
            trigger: "High local engagement",
            effect: "Amplify successful local strategies"
        },
        {
            sourceMode: "Local",
            targetMode: "Global",
            trigger: "Local content outperforms expectations",
            effect: "Adapt and scale successful local content globally"
        },
        {
            sourceMode: "Global",
            targetMode: "Viral",
            trigger: "Global trend identified",
            effect: "Create viral-ready content based on global trends"
        },
        {
            sourceMode: "Aggressive",
            targetMode: "Viral",
            trigger: "Campaign needs initial boost",
            effect: "Use aggressive tactics to seed viral potential"
        },
        {
            sourceMode: "Momentum",
            targetMode: "Brand",
            trigger: "Velocity score above threshold",
            effect: "Reinforce brand messaging during high momentum periods"
        },
        {
            sourceMode: "Organic",
            targetMode: "Momentum",
            trigger: "Authentic engagement detected",
            effect: "Feed authentic signals into momentum engine"
        },
        {
            sourceMode: "Local",
            targetMode: "Momentum",
            trigger: "Cultural resonance achieved",
            effect: "Use local success as momentum fuel"
        },
        {
            sourceMode: "Brand",
            targetMode: "Momentum",
            trigger: "Brand consistency maintained",
            effect: "Leverage brand strength to sustain momentum"
        }
    ];
}

window.generateSynergyMaps = generateSynergyMaps;
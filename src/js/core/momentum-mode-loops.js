// ============================================================
// Momentum Mode — Momentum Loop Generator (Placeholder)
// Generates an array of momentumLoop objects using placeholder data.
// No external APIs, no real synergy logic.
// ============================================================

/**
 * Generate an array of placeholder momentumLoop objects.
 * Matches the momentumLoop data structure defined in momentum-mode-models.js.
 *
 * @returns {momentumLoop[]}
 */
function generateMomentumLoops() {
    return [
        {
            loopName: "Viral → Brand → Organic Loop",
            modesInvolved: ["Viral", "Brand", "Organic"],
            description: "A loop that starts with viral reach, builds brand trust, and converts through organic content.",
            expectedOutcome: "Increased retention and follower growth."
        },
        {
            loopName: "Brand → Local → Global Loop",
            modesInvolved: ["Brand", "Local", "Global"],
            description: "Establish brand identity locally, then expand successful local content globally.",
            expectedOutcome: "Strong local presence with international reach and recognition."
        },
        {
            loopName: "Aggressive → Viral → Brand Loop",
            modesInvolved: ["Aggressive", "Viral", "Brand"],
            description: "Use aggressive tactics to gain initial traction, go viral, then solidify brand perception.",
            expectedOutcome: "Rapid audience growth followed by sustainable brand building."
        },
        {
            loopName: "Organic → Global → Momentum Loop",
            modesInvolved: ["Organic", "Global", "Momentum"],
            description: "Leverage authentic organic content, adapt for global audiences, then feed into momentum engine.",
            expectedOutcome: "Authentic global reach with compounding growth effects."
        },
        {
            loopName: "Local → Viral → Organic Loop",
            modesInvolved: ["Local", "Viral", "Organic"],
            description: "Create culturally relevant local content, amplify through viral mechanics, deepen with organic engagement.",
            expectedOutcome: "Strong community bonds with expanded reach and sustained engagement."
        },
        {
            loopName: "Brand → Momentum → Aggressive Loop",
            modesInvolved: ["Brand", "Momentum", "Aggressive"],
            description: "Use established brand to fuel momentum engine, then apply strategic aggressive tactics for bursts.",
            expectedOutcome: "Controlled growth bursts built on strong brand foundation."
        },
        {
            loopName: "Global → Local → Brand Loop",
            modesInvolved: ["Global", "Local", "Brand"],
            description: "Test concepts globally, refine for local markets, then use to strengthen brand positioning.",
            expectedOutcome: "Globally informed local strategies that enhance overall brand perception."
        }
    ];
}

window.generateMomentumLoops = generateMomentumLoops;
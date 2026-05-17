// ============================================================
// Brand Mode — Content Pillars Generator (Placeholder)
// Generates an array of brandPillar objects using placeholder data.
// No external APIs, no real AI generation.
// ============================================================

/**
 * Generate an array of placeholder brandPillar objects.
 * Matches the brandPillar data structure defined in brand-mode-models.js.
 *
 * @returns {brandPillar[]}
 */
function generateBrandPillars() {
    return [
        {
            pillarName: "Authenticity",
            description: "Share honest moments, behind-the-scenes, and personal reflections that show the real artist behind the music."
        },
        {
            pillarName: "Creative Evolution",
            description: "Document artistic growth and experimentation across releases, showing how sound and vision evolve over time."
        },
        {
            pillarName: "Community",
            description: "Build a tribe of loyal fans through engagement, exclusives, and shared experiences that make them feel like insiders."
        },
        {
            pillarName: "Cultural Impact",
            description: "Engage with social themes, cultural moments, and movements through art, positioning the artist as a voice for their generation."
        }
    ];
}

window.generateBrandPillars = generateBrandPillars;
// ============================================================
// Monetization Mode — Conversion Engine (Placeholder)
// Generates an array of conversionMap objects using placeholder data.
// No external APIs, no real conversion logic.
// ============================================================

/**
 * Generate an array of placeholder conversionMap objects.
 * Matches the conversionMap data structure defined in monetization-mode-models.js.
 *
 * @returns {conversionMap[]}
 */
function generateConversionMaps() {
    return [
        {
            trigger: "High engagement on short-form content",
            recommendedOffer: "Creator Starter Kit",
            recommendedFunnel: "Creator Lead Magnet Funnel",
            notes: "Good for warm audiences showing buying intent."
        },
        {
            trigger: "Email signup for lead magnet",
            recommendedOffer: "Content Creator Pro Membership",
            recommendedFunnel: "Product Launch Funnel",
            notes: "Email subscribers are primed for higher-value offers."
        },
        {
            trigger: "Comment asking for pricing",
            recommendedOffer: "Brand Deal Accelerator",
            recommendedFunnel: "High-Ticket Coaching Funnel",
            notes: "Users asking about pricing are likely ready to invest."
        },
        {
            trigger: "Webinar attendance >50%",
            recommendedOffer: "Affiliate Marketing Masterclass",
            recommendedFunnel: "Webinar Sales Funnel",
            notes: "Engaged webinar attendees have high purchase intent."
        },
        {
            trigger: "Multiple template downloads",
            recommendedOffer: "Social Media Templates Bundle",
            recommendedFunnel: "Template Bundle Funnel",
            notes: "Users downloading multiple templates likely want the full collection."
        },
        {
            trigger: "Abandoned cart",
            recommendedOffer: "Email List Building System",
            recommendedFunnel: "Membership Funnel",
            notes: "Recover lost sales with targeted email sequence."
        },
        {
            trigger: "Social media share of free content",
            recommendedOffer: "Merchandise Design Pack",
            recommendedFunnel: "Product Launch Funnel",
            notes: "Users sharing free content are brand advocates likely to buy."
        },
        {
            trigger: "Live Q&A attendance",
            recommendedOffer: "Content Strategy Coaching",
            recommendedFunnel: "High-Ticket Coaching Funnel",
            notes: "Live attendees show high engagement and willingness to invest."
        }
    ];
}

window.generateConversionMaps = generateConversionMaps;
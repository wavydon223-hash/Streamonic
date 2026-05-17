// ============================================================
// Monetization Mode — Offer Generator (Placeholder)
// Generates an array of monetizationOffer objects using placeholder data.
// No external APIs, no real monetization logic.
// ============================================================

/**
 * Generate an array of placeholder monetizationOffer objects.
 * Matches the monetizationOffer data structure defined in monetization-mode-models.js.
 *
 * @returns {monetizationOffer[]}
 */
function generateMonetizationOffers() {
    return [
        {
            offerName: "Creator Starter Kit",
            offerType: "Digital Product",
            price: 49,
            description: "A starter bundle for new creators.",
            valueStack: ["10 templates", "3 scripts", "1 mini‑course"]
        },
        {
            offerName: "Content Creator Pro Membership",
            offerType: "Subscription",
            price: 29,
            description: "Monthly access to premium resources and community.",
            valueStack: ["Weekly templates", "Monthly Q&A", "Private Discord", "Resource library"]
        },
        {
            offerName: "Brand Deal Accelerator",
            offerType: "Service",
            price: 499,
            description: "Done-for-you brand outreach and negotiation service.",
            valueStack: ["50 brand pitches", "Contract review", "Rate optimization", "Payment follow-up"]
        },
        {
            offerName: "Social Media Templates Bundle",
            offerType: "Digital Product",
            price: 79,
            description: "Comprehensive collection of social media content templates.",
            valueStack: ["500+ templates", "Canva & Photoshop formats", "Monthly updates", "Commercial license"]
        },
        {
            offerName: "Content Strategy Coaching",
            offerType: "Service",
            price: 199,
            description: "Personalized coaching for content strategy and growth.",
            valueStack: ["4 weekly sessions", "Content audit", "Growth plan", "Email support"]
        },
        {
            offerName: "Affiliate Marketing Masterclass",
            offerType: "Digital Product",
            price: 149,
            description: "Complete guide to building affiliate income streams.",
            valueStack: ["6-hour video course", "Worksheets & templates", "Case studies", "Private community"]
        },
        {
            offerName: "Merchandise Design Pack",
            offerType: "Digital Product",
            price: 39,
            description: "Ready-to-use designs for merchandise and apparel.",
            valueStack: ["100+ designs", "Print-ready files", "Multiple niches", "Commercial use"]
        },
        {
            offerName: "Email List Building System",
            offerType: "Subscription",
            price: 19,
            description: "Tools and training for building and monetizing email lists.",
            valueStack: ["Landing page templates", "Email sequences", "Lead magnets", "Analytics dashboard"]
        }
    ];
}

window.generateMonetizationOffers = generateMonetizationOffers;
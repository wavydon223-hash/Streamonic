// ============================================================
// Monetization Mode — Funnel Engine (Placeholder)
// Generates an array of funnelBlueprint objects using placeholder data.
// No external APIs, no real funnel logic.
// ============================================================

/**
 * Generate an array of placeholder funnelBlueprint objects.
 * Matches the funnelBlueprint data structure defined in monetization-mode-models.js.
 *
 * @returns {funnelBlueprint[]}
 */
function generateFunnelBlueprints() {
    return [
        {
            funnelName: "Creator Lead Magnet Funnel",
            stages: ["Awareness", "Lead Capture", "Nurture", "Conversion"],
            entryPoint: "Free Guide Download",
            exitPoint: "Starter Kit Purchase",
            notes: "Basic creator funnel for cold audiences."
        },
        {
            funnelName: "Product Launch Funnel",
            stages: ["Awareness", "Interest", "Desire", "Action"],
            entryPoint: "Teaser Content",
            exitPoint: "Product Purchase",
            notes: "Standard product launch funnel with scarcity elements."
        },
        {
            funnelName: "Webinar Sales Funnel",
            stages: ["Registration", "Attendance", "Offer", "Replay"],
            entryPoint: "Free Webinar Registration",
            exitPoint: "Course Purchase",
            notes: "High-converting funnel for educational offers."
        },
        {
            funnelName: "Membership Funnel",
            stages: ["Awareness", "Interest", "Trial", "Conversion"],
            entryPoint: "Free Trial Offer",
            exitPoint: "Paid Membership",
            notes: "Funnel designed to convert trial users to paying members."
        },
        {
            funnelName: "High-Ticket Coaching Funnel",
            stages: ["Awareness", "Application", "Call", "Close"],
            entryPoint: "Free Strategy Session",
            exitPoint: "Coaching Package Purchase",
            notes: "Application-based funnel for premium services."
        },
        {
            funnelName: "Affiliate Promotion Funnel",
            stages: ["Pre-sell", "Review", "Bonus", "Purchase"],
            entryPoint: "Review Content",
            exitPoint: "Affiliate Link Click",
            notes: "Funnel optimized for affiliate marketing conversions."
        },
        {
            funnelName: "Template Bundle Funnel",
            stages: ["Awareness", "Interest", "Tripwire", "Upsell"],
            entryPoint: "Free Template Sample",
            exitPoint: "Full Template Bundle",
            notes: "Low-cost entry point leading to higher-value offer."
        },
        {
            funnelName: "Subscription Funnel",
            stages: ["Awareness", "Interest", "Trial", "Conversion", "Retention"],
            entryPoint: "Free Trial",
            exitPoint: "Paid Subscription",
            notes: "Subscription-focused funnel with retention elements."
        }
    ];
}

window.generateFunnelBlueprints = generateFunnelBlueprints;
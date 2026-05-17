// ============================================================
// Monetization Mode — Pricing Engine (Placeholder)
// Generates an array of pricingModel objects using placeholder data.
// No external APIs, no real pricing logic.
// ============================================================

/**
 * Generate an array of placeholder pricingModel objects.
 * Matches the pricingModel data structure defined in monetization-mode-models.js.
 *
 * @returns {pricingModel[]}
 */
function generatePricingModels() {
    return [
        {
            modelName: "Tiered Starter Pricing",
            basePrice: 29,
            pricingStrategy: "Tiered",
            modifiers: [
                "Add $20 for Pro tier",
                "Add $50 for Enterprise tier"
            ]
        },
        {
            modelName: "One-time Digital Product",
            basePrice: 49,
            pricingStrategy: "One-time",
            modifiers: [
                "Lifetime access",
                "Free updates for 1 year",
                "30-day money-back guarantee"
            ]
        },
        {
            modelName: "Monthly Subscription",
            basePrice: 19,
            pricingStrategy: "Subscription",
            modifiers: [
                "Cancel anytime",
                "Annual discount: 20%",
                "Access to all current and future templates"
            ]
        },
        {
            modelName: "Annual Subscription",
            basePrice: 199,
            pricingStrategy: "Subscription",
            modifiers: [
                "Equivalent to $16.58/month",
                "Priority support",
                "Early access to new features"
            ]
        },
        {
            modelName: "Freemium Model",
            basePrice: 0,
            pricingStrategy: "Tiered",
            modifiers: [
                "Free plan: Limited templates",
                "Pro plan: $15/month - All templates",
                "Agency plan: $49/month - Team access"
            ]
        },
        {
            modelName: "Pay-per-use",
            basePrice: 5,
            pricingStrategy: "Usage-based",
            modifiers: [
                "Per template download",
                "Bulk discounts available",
                "Monthly minimums apply"
            ]
        },
        {
            modelName: "Bundle Pricing",
            basePrice: 99,
            pricingStrategy: "Bundle",
            modifiers: [
                "Save 40% vs individual purchase",
                "Includes 5 premium products",
                "Quarterly updates included"
            ]
        },
        {
            modelName: "License Pricing",
            basePrice: 149,
            pricingStrategy: "License",
            modifiers: [
                "Commercial use included",
                "Multi-seat options available",
                "Annual renewal required"
            ]
        }
    ];
}

window.generatePricingModels = generatePricingModels;
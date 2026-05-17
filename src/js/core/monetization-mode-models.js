// ============================================================
// Monetization Mode — Data Structures
// Simple data models for Monetization Mode without logic or algorithms.
// ============================================================

/**
 * @typedef {Object} monetizationOffer
 * @property {string} offerName - Name of the offer
 * @property {string} offerType - Type of offer (e.g., "Digital Product", "Service", "Subscription")
 * @property {number} price - Price of the offer
 * @property {string} description - Description of the offer
 * @property {string[]} valueStack - Array of included elements/benefits
 */

/**
 * @typedef {Object} funnelBlueprint
 * @property {string} funnelName - Name of the funnel
 * @property {string[]} stages - Array of funnel stages (e.g., ["Awareness", "Interest", "Conversion", "Upsell"])
 * @property {string} entryPoint - Where users enter the funnel
 * @property {string} exitPoint - Where users exit the funnel
 * @property {string} notes - Additional notes about the funnel
 */

/**
 * @typedef {Object} pricingModel
 * @property {string} modelName - Name of the pricing model
 * @property {number} basePrice - Base price for the model
 * @property {string} pricingStrategy - Pricing strategy (e.g., "Tiered", "One-time", "Subscription")
 * @property {string[]} modifiers - Array of placeholder pricing rules
 */

/**
 * @typedef {Object} conversionMap
 * @property {string} trigger - Trigger that suggests a conversion opportunity
 * @property {string} recommendedOffer - Recommended offer for this trigger
 * @property {string} recommendedFunnel - Recommended funnel for this trigger
 * @property {string} notes - Additional notes about the conversion mapping
 */

/**
 * @typedef {Object} monetizationMetrics
 * @property {number} conversionRate - Conversion rate metric
 * @property {number} averageOrderValue - Average order value metric
 * @property {number} funnelHealth - Funnel health metric
 * @property {number} revenueVelocity - Revenue velocity metric
 * @property {number} monetizationEfficiency - Monetization efficiency metric
 */

// Example placeholder objects (for reference only - not to be used as logic)
const monetizationOfferExample = {
    offerName: "Premium Content Template Pack",
    offerType: "Digital Product",
    price: 49,
    description: "Collection of premium content templates for social media",
    valueStack: ["100+ templates", "Monthly updates", "Commercial license", "Support access"]
};

const funnelBlueprintExample = {
    funnelName: "Content Creator Funnel",
    stages: ["Awareness", "Interest", "Conversion", "Upsell"],
    entryPoint: "Free template download",
    exitPoint: "Premium annual membership",
    notes: "Standard funnel for content creator products"
};

const pricingModelExample = {
    modelName: "Standard Tiered Pricing",
    basePrice: 29,
    pricingStrategy: "Tiered",
    modifiers: ["Annual discount: 20%", "Bundle discount: 15%", "Early bird: 25%"]
};

const conversionMapExample = {
    trigger: "High engagement on educational content",
    recommendedOffer: "Advanced Course",
    recommendedFunnel: "Education Funnel",
    notes: "Users engaging with educational content are likely interested in deeper learning"
};

const monetizationMetricsExample = {
    conversionRate: 3.2,
    averageOrderValue: 87.50,
    funnelHealth: 7.8,
    revenueVelocity: 6.5,
    monetizationEfficiency: 8.1
};
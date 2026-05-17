// ============================================================
// Distribution Mode — Data Structures
// Simple data models for Distribution Mode without logic or algorithms.
// ============================================================

/**
 * @typedef {Object} distributionRoute
 * @property {string} routeName - Name of the distribution route
 * @property {string} sourceMode - Source mode name (e.g., Viral, Brand, Global, Momentum)
 * @property {string[]} targetPlatforms - Array of target platform names (e.g., ["TikTok", "Instagram Reels", "YouTube Shorts"])
 * @property {string} description - Description of the route
 */

/**
 * @typedef {Object} postingSchedule
 * @property {string} scheduleName - Name of the posting schedule
 * @property {string} platform - Target platform
 * @property {string} frequency - Posting frequency (e.g., "Daily", "3x per week")
 * @property {string[]} bestTimes - Array of placeholder times for best posting times
 * @property {string} notes - Additional notes about the schedule
 */

/**
 * @typedef {Object} repurposeMap
 * @property {string} originalFormat - Original content format (e.g., "Long-form", "Short-form", "Carousel")
 * @property {string[]} targetFormats - Array of target format names
 * @property {string[]} rules - Array of placeholder repurposing rules
 */

/**
 * @typedef {Object} postingQueue
 * @property {string} queueName - Name of the posting queue
 * @property {string} platform - Target platform for the queue
 * @property {string[]} items - Array of placeholder content IDs or names in the queue
 * @property {string} status - Status of the queue (e.g., "active", "paused")
 */

/**
 * @typedef {Object} distributionMetrics
 * @property {number} consistencyScore - Posting consistency metric
 * @property {number} platformCoverage - Platform coverage metric
 * @property {number} repurposeRate - Repurpose rate metric
 * @property {number} queueHealth - Queue health metric
 */

// Example placeholder objects (for reference only - not to be used as logic)
const distributionRouteExample = {
    routeName: "Viral to TikTok Route",
    sourceMode: "Viral",
    targetPlatforms: ["TikTok", "Instagram Reels"],
    description: "Route viral content to short-form video platforms"
};

const postingScheduleExample = {
    scheduleName: "Daily TikTok Schedule",
    platform: "TikTok",
    frequency: "Daily",
    bestTimes: ["9:00 AM", "6:00 PM", "9:00 PM"],
    notes: "Peak engagement times for TikTok audience"
};

const repurposeMapExample = {
    originalFormat: "Long-form",
    targetFormats: ["Short-form", "Carousel", "Text Post"],
    rules: ["Extract key highlights", "Add captions for silent viewing", "Include call-to-action"]
};

const postingQueueExample = {
    queueName: "Instagram Main Queue",
    platform: "Instagram",
    items: ["content_001", "content_002", "content_003"],
    status: "active"
};

const distributionMetricsExample = {
    consistencyScore: 8.5,
    platformCoverage: 7.2,
    repurposeRate: 6.8,
    queueHealth: 9.0
};
// ============================================================
// ORGANIC MODE — Data Structures Only
// No logic, no algorithms, no UI, no API calls.
// Pure data model definitions for future implementation.
// ============================================================

// ----------------------------------------------------------
// 1. weeklyContentPlan
// A daily content schedule entry for the weekly plan.
// ----------------------------------------------------------

/**
 * @typedef {Object} weeklyContentPlan
 * @property {string} day          — Day of the week (e.g., "Monday")
 * @property {string} contentType  — Type of content (e.g., "video", "image", "story", "reel")
 * @property {string} description  — Brief description of the content piece
 * @property {string} platform     — Target platform (e.g., "TikTok", "Instagram")
 */

// --- Example shape (not for use, documentation only) ---
// const weeklyContentPlan = {
//     day: "Monday",
//     contentType: "video",
//     description: "Studio session teaser showing new beat creation",
//     platform: "TikTok"
// };


// ----------------------------------------------------------
// 2. communityLoop
// A self-sustaining engagement cycle that encourages fan participation.
// ----------------------------------------------------------

/**
 * @typedef {Object} communityLoop
 * @property {string} loopName  — Name of the community loop
 * @property {string} trigger   — What initiates the loop
 * @property {string} action    — What the community does
 * @property {string} reward    — What participants receive
 */

// --- Example shape (not for use, documentation only) ---
// const communityLoop = {
//     loopName: "Fan Feature Friday",
//     trigger: "Weekly post asking fans to share their content",
//     action: "Fans submit their covers, remixes, or fan art",
//     reward: "Top submissions featured on artist's page and story"
// };


// ----------------------------------------------------------
// 3. storyArc
// A multi-post narrative that unfolds over weeks or months.
// ----------------------------------------------------------

/**
 * @typedef {Object} storyArc
 * @property {string} arcName   — Title of the story arc
 * @property {string} theme     — Central theme or message
 * @property {string[]} stages  — Ordered list of story stages/episodes
 */

// --- Example shape (not for use, documentation only) ---
// const storyArc = {
//     arcName: "The Studio Diary",
//     theme: "Creative process behind the new album",
//     stages: [
//         "Week 1: The spark — where the first idea came from",
//         "Week 2: Building the beat — production begins",
//         "Week 3: Writing lyrics — vulnerability on paper",
//         "Week 4: Recording — capturing the magic",
//         "Week 5: Mixing and mastering — the final stretch",
//         "Week 6: Release day — the world hears it"
//     ]
// };


// ----------------------------------------------------------
// 4. evergreenContentItem
// Content that remains relevant and discoverable over time.
// ----------------------------------------------------------

/**
 * @typedef {Object} evergreenContentItem
 * @property {string} title       — Title of the content piece
 * @property {string} description — What the content covers
 * @property {string} platform    — Primary platform for this content
 */

// --- Example shape (not for use, documentation only) ---
// const evergreenContentItem = {
//     title: "How I Made This Beat in 10 Minutes",
//     description: "Step-by-step tutorial showing beat creation from scratch using FL Studio",
//     platform: "YouTube"
// };


// ----------------------------------------------------------
// 5. platformRitual
// A recurring content tradition unique to a specific platform.
// ----------------------------------------------------------

/**
 * @typedef {Object} platformRitual
 * @property {string} platform      — The platform where this ritual occurs
 * @property {string} ritualName    — Name of the recurring ritual
 * @property {string} description   — What happens during this ritual
 */

// --- Example shape (not for use, documentation only) ---
// const platformRitual = {
//     platform: "TikTok",
//     ritualName: "Soundcheck Sunday",
//     description: "Every Sunday, preview 15-second snippets of upcoming tracks and let fans vote on which to release first"
// };


// ----------------------------------------------------------
// Exposed registry (empty by default, populated externally)
// ----------------------------------------------------------

var OrganicModeModels = {
    weeklyPlans: [],          // Array<weeklyContentPlan>
    communityLoops: [],       // Array<communityLoop>
    storyArcs: [],            // Array<storyArc>
    evergreenContent: [],     // Array<evergreenContentItem>
    platformRituals: [],      // Array<platformRitual>

    // Placeholder methods — NO implementation, just signatures
    addWeeklyPlan: function(/** @type {weeklyContentPlan} */ plan) { /* no-op */ },
    addCommunityLoop: function(/** @type {communityLoop} */ loop) { /* no-op */ },
    addStoryArc: function(/** @type {storyArc} */ arc) { /* no-op */ },
    addEvergreenContent: function(/** @type {evergreenContentItem} */ item) { /* no-op */ },
    addPlatformRitual: function(/** @type {platformRitual} */ ritual) { /* no-op */ }
};

window.OrganicModeModels = OrganicModeModels;
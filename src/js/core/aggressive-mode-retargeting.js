// ============================================================
// Aggressive Mode — Retargeting Loop Builder (Placeholder)
// Generates an array of retargetingLayer objects using placeholder data.
// No external APIs, no real retargeting logic.
// ============================================================

/**
 * Generate an array of placeholder retargetingLayer objects.
 * Matches the retargetingLayer data structure defined in aggressive-mode-models.js.
 *
 * @returns {retargetingLayer[]}
 */
function generateRetargetingLayers() {
    return [
        {
            layerName: "Video Viewers",
            audienceDescription: "Users who watched 50%+ of any video ad in the last 14 days",
            timeWindow: "14 days",
            message: "You started watching — here's the full track. Stream now."
        },
        {
            layerName: "Link Clickers",
            audienceDescription: "Users who clicked through to a streaming platform but didn't save",
            timeWindow: "7 days",
            message: "Still thinking about it? Tap to listen again and save for later."
        },
        {
            layerName: "Engaged Followers",
            audienceDescription: "Users who liked, commented, or shared content in the last 30 days",
            timeWindow: "30 days",
            message: "You're part of the movement. New music just dropped — be first to hear it."
        },
        {
            layerName: "Stream Starters",
            audienceDescription: "Users who started streaming but didn't finish the track",
            timeWindow: "3 days",
            message: "Almost there. Here's what you missed — give it a full listen."
        },
        {
            layerName: "Cold Audience Lookalike",
            audienceDescription: "New users similar to existing fans based on listening behavior",
            timeWindow: "21 days",
            message: "You might like this. Give it a chance — press play."
        }
    ];
}

window.generateRetargetingLayers = generateRetargetingLayers;
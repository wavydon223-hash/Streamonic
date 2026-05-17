// ============================================================
// Organic Mode — Community Loop Builder (Placeholder)
// Generates an array of communityLoop objects using placeholder data.
// No external APIs, no real engagement logic.
// ============================================================

/**
 * Generate an array of placeholder communityLoop objects.
 * Matches the communityLoop data structure defined in organic-mode-models.js.
 *
 * @returns {communityLoop[]}
 */
function generateCommunityLoops() {
    return [
        {
            loopName: "Comment Loop",
            trigger: "User comments on a post",
            action: "Reply with a personalized message within 2 hours",
            reward: "Increased connection and return engagement from the fan"
        },
        {
            loopName: "Fan Feature Friday",
            trigger: "Weekly post asking fans to share their content",
            action: "Fans submit covers, remixes, or fan art via DM or hashtag",
            reward: "Top submissions featured on artist's page and story with credit"
        },
        {
            loopName: "Discord Listening Party",
            trigger: "Scheduled weekly event in Discord server",
            action: "Fans join voice channel, listen together, and discuss the music",
            reward: "Exclusive early access to snippets and behind-the-scenes content"
        },
        {
            loopName: "UGC Challenge",
            trigger: "Artist posts a creative challenge with a branded hashtag",
            action: "Fans create and share their own version of the challenge",
            reward: "Best entries reshared by artist + chance to be featured in a collab"
        },
        {
            loopName: "Milestone Celebration",
            trigger: "Stream count, follower milestone, or release anniversary",
            action: "Artist posts gratitude message and celebrates with fans",
            reward: "Exclusive content drop (demo, unreleased snippet, or personal video)"
        }
    ];
}

window.generateCommunityLoops = generateCommunityLoops;
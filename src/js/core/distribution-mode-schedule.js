// ============================================================
// Distribution Mode — Scheduling Engine (Placeholder)
// Generates an array of postingSchedule objects using placeholder data.
// No external APIs, no real scheduling logic.
// ============================================================

/**
 * Generate an array of placeholder postingSchedule objects.
 * Matches the postingSchedule data structure defined in distribution-mode-models.js.
 *
 * @returns {postingSchedule[]}
 */
function generatePostingSchedules() {
    return [
        {
            scheduleName: "TikTok Daily Pulse",
            platform: "TikTok",
            frequency: "Daily",
            bestTimes: ["12:00 PM", "6:00 PM"],
            notes: "High‑velocity short‑form posting schedule."
        },
        {
            scheduleName: "Instagram Feed Rhythm",
            platform: "Instagram Feed",
            frequency: "3x per week",
            bestTimes: ["11:00 AM", "5:00 PM", "8:00 PM"],
            notes: "Consistent engagement schedule for feed content."
        },
        {
            scheduleName: "YouTube Shorts Burst",
            platform: "YouTube Shorts",
            frequency: "Daily",
            bestTimes: ["2:00 PM", "7:00 PM"],
            notes: "Algorithm-friendly timing for short-form video discovery."
        },
        {
            scheduleName: "YouTube Long-form Premier",
            platform: "YouTube Long-form",
            frequency: "2x per week",
            bestTimes: ["Thursday 6:00 PM", "Saturday 2:00 PM"],
            notes: "Weekend and weekday evening premieres for maximum reach."
        },
        {
            scheduleName: "X/Twitter Conversation Flow",
            platform: "X/Twitter",
            frequency: "5x per week",
            bestTimes: ["9:00 AM", "12:00 PM", "3:00 PM", "6:00 PM"],
            notes: "Spread throughout day to catch different audience segments."
        },
        {
            scheduleName: "Facebook Community Hub",
            platform: "Facebook",
            frequency: "4x per week",
            bestTimes: ["10:00 AM", "2:00 PM", "7:00 PM"],
            notes: "Optimized for Facebook's engagement patterns."
        },
        {
            scheduleName: "LinkedIn Professional Pulse",
            platform: "LinkedIn",
            frequency: "2x per week",
            bestTimes: ["Tuesday 10:00 AM", "Thursday 2:00 PM"],
            notes: "Business hours timing for professional audience engagement."
        },
        {
            scheduleName: "WhatsApp Broadcast Blitz",
            platform: "WhatsApp/Telegram",
            frequency: "Daily",
            bestTimes: ["8:00 AM", "6:00 PM"],
            notes: "Morning and evening broadcasts for maximum visibility."
        }
    ];
}

window.generatePostingSchedules = generatePostingSchedules;
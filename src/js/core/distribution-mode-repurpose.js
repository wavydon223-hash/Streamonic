// ============================================================
// Distribution Mode — Repurpose Engine (Placeholder)
// Generates an array of repurposeMap objects using placeholder data.
// No external APIs, no real repurposing logic.
// ============================================================

/**
 * Generate an array of placeholder repurposeMap objects.
 * Matches the repurposeMap data structure defined in distribution-mode-models.js.
 *
 * @returns {repurposeMap[]}
 */
function generateRepurposeMaps() {
    return [
        {
            originalFormat: "Long-form Video",
            targetFormats: ["Short-form Clip", "Quote Graphic", "Carousel"],
            rules: [
                "Extract 15–30 second highlight",
                "Pull 1–2 strong quotes",
                "Break key ideas into 3–5 slides"
            ]
        },
        {
            originalFormat: "Blog Post",
            targetFormats: ["Twitter Thread", "LinkedIn Post", "Instagram Carousel"],
            rules: [
                "Break into tweet-sized chunks",
                "Extract key points for professional audience",
                "Create visual slides from section headers"
            ]
        },
        {
            originalFormat: "Podcast Episode",
            targetFormats: ["Audiogram Clips", "Quote Cards", "Transcript Blog"],
            rules: [
                "Create 30-60 second audiograms with captions",
                "Pull impactful quotes for shareable graphics",
                "Transcribe and format as SEO-friendly blog post"
            ]
        },
        {
            originalFormat: "Webinar Recording",
            targetFormats: ["Highlight Reel", "Slide Deck", "Email Course"],
            rules: [
                "Extract most engaging segments",
                "Export slides as standalone resource",
                "Break into email series with key takeaways"
            ]
        },
        {
            originalFormat: "Research Report",
            targetFormats: ["Infographic", "Twitter Thread", "Video Summary"],
            rules: [
                "Visualize key statistics and findings",
                "Create thread with most surprising insights",
                "Make short video explaining the research"
            ]
        },
        {
            originalFormat: "Live Stream",
            targetFormats: ["Clip Reel", "Highlight Reel", "Short-form Series"],
            rules: [
                "Clip best moments and reactions",
                "Create condensed highlight version",
                "Break into thematic short episodes"
            ]
        },
        {
            originalFormat: "Email Newsletter",
            targetFormats: ["Blog Post", "Social Media Series", "Video Script"],
            rules: [
                "Expand newsletter content into full blog post",
                "Create social media posts from each section",
                "Adapt into video script with visuals"
            ]
        },
        {
            originalFormat: "Case Study",
            targetFormats: ["Testimonial Video", "Before/After Graphic", "LinkedIn Article"],
            rules: [
                "Create video testimonial from customer interview",
                "Design visual showing transformation",
                "Write detailed LinkedIn article telling the story"
            ]
        }
    ];
}

window.generateRepurposeMaps = generateRepurposeMaps;
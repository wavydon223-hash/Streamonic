// ============================================================
// Global Mode — Global Content Generator (Placeholder)
// Generates an array of globalContentItem objects using placeholder data.
// No external APIs, no real content generation.
// ============================================================

/**
 * Generate an array of placeholder globalContentItem objects.
 * Matches the globalContentItem data structure defined in global-mode-models.js.
 *
 * @returns {globalContentItem[]}
 */
function generateGlobalContent() {
    return [
        {
            title: "US Reaction Format",
            platform: "TikTok",
            description: "A fun reaction trend popular in the US",
            region: "US"
        },
        {
            title: "UK Humor Style",
            platform: "Instagram",
            description: "Dry, witty humor content popular in the UK",
            region: "UK"
        },
        {
            title: "EU Sustainability Focus",
            platform: "YouTube",
            description: "Content focused on eco-friendly practices and sustainability in Europe",
            region: "EU"
        },
        {
            title: "LATAM Dance Trends",
            platform: "TikTok",
            description: "Popular dance trends originating from Latin American countries",
            region: "LATAM"
        },
        {
            title: "African Music Spotlight",
            platform: "YouTube",
            description: "Showcasing diverse music genres and artists from across Africa",
            region: "Africa"
        },
        {
            title: "Asia Tech Reviews",
            platform: "Instagram",
            description: "Latest technology reviews and gadget unboxings from Asian markets",
            region: "Asia"
        },
        {
            title: "Australia Outdoor Lifestyle",
            platform: "TikTok",
            description: "Content featuring outdoor activities, beach life, and adventure in Australia",
            region: "Australia"
        },
        {
            title: "Canada Multicultural Content",
            platform: "YouTube Shorts",
            description: "Content celebrating Canada's diverse cultures and multicultural identity",
            region: "Canada"
        },
        {
            title: "Brazil Carnival Preparation",
            platform: "Instagram",
            description: "Content related to Carnival preparations, costumes, and festivities in Brazil",
            region: "LATAM"
        },
        {
            title: "Japan Traditional Culture",
            platform: "YouTube",
            description: "Content showcasing traditional Japanese arts, crafts, and cultural practices",
            region: "Asia"
        }
    ];
}

window.generateGlobalContent = generateGlobalContent;
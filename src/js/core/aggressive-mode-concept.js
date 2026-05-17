// ============================================================
// AGGRESSIVE MODE — Concept Definition (Internal Documentation)
// ============================================================
//
// STATUS: Concept only — NO logic, UI, or data models implemented yet.
//
// --- Overview ---
// Aggressive Mode is a paid-growth-first marketing strategy focused
// on converting attention into revenue through relentless funnel
// optimization, retargeting loops, and data-driven ad spend.
// Unlike Organic or Brand modes, Aggressive Mode accepts higher
// cost-per-acquisition in exchange for speed and scale.
//
// --- Focus Platforms ---
// - TikTok Ads   — Spark ads, TopView, in-feed for viral conversion
// - Meta Ads     — Full-funnel (awareness → retargeting → conversion)
// - YouTube Ads  — Pre-roll, discovery, and bumper for trust + intent
// - Spotify Marquee — Sponsored sessions for direct listener conversion
//
// --- Objective ---
// Turn attention into revenue using ads, CTAs, and optimized targeting.
// Maximize ROAS while maintaining acceptable CPA thresholds.
//
// --- Core Ideas ---
//
// 1. SPARK ADS
//    Boost organic content that already shows engagement signals.
//    - Identify posts with >3% engagement rate
//    - Amplify with paid distribution
//    - Let the algorithm find the audience
//
// 2. RETARGETING LOOPS
//    Create layered retargeting funnels:
//    - Layer 1: Video viewers (50%+ watched)
//    - Layer 2: Website visitors / link clickers
//    - Layer 3: Engaged social followers
//    - Layer 4: Cart abandoners / stream starters
//
// 3. CTA TESTING
//    Systematically test call-to-action variations:
//    - "Stream Now" vs "Listen Free" vs "Play on Spotify"
//    - "Pre-save" vs "Save Now" vs "Add to Library"
//    - Button color, placement, copy length
//
// 4. FUNNEL STAGES
//    Define and optimize each stage of the conversion funnel:
//    - TOFU: Awareness ads (video views, reach)
//    - MOFU: Consideration ads (engagement, traffic)
//    - BOFU: Conversion ads (stream clicks, saves, follows)
//
// 5. AUDIENCE SEGMENTATION
//    Build hyper-targeted audience segments:
//    - Lookalikes from existing fans
//    - Genre interest targeting
//    - Behavioral targeting (streamers, concert-goers)
//    - Custom audiences from email/SMS lists
//
// --- Key Outputs ---
//
// 1. AD CONCEPTS
//    Ready-to-launch ad creative briefs per platform:
//    - TikTok Spark ad scripts
//    - Meta carousel/video ad copy
//    - YouTube pre-roll scripts
//    - Spotify Marquee messaging
//
// 2. RETARGETING PLAN
//    Detailed retargeting flow:
//    - Audience definitions per layer
//    - Budget allocation per layer
//    - Frequency caps and exclusion rules
//    - Expected conversion windows
//
// 3. FUNNEL MAP
//    Visual/text map of the full conversion path:
//    - Entry points (ad impressions)
//    - Mid-funnel actions (clicks, saves)
//    - Conversion events (follows, streams, purchases)
//    - Drop-off analysis points
//
// 4. CTA VARIATIONS
//    Multiple CTA options tested per funnel stage:
//    - Primary CTAs (Stream, Listen, Pre-save)
//    - Secondary CTAs (Share, Follow, Explore)
//    - Urgency CTAs (Limited time, Last chance)
//
// 5. PRESSURE MODEL
//    Defines how much spend pressure to apply:
//    - Daily budget pacing
//    - Bid strategy (lowest cost vs target ROAS)
//    - Budget reallocation triggers
//    - Kill/scale decision criteria
//
// --- Platforms Strategy ---
//
// TikTok Ads:    Spark ads on organic content, TopView for launches
// Meta Ads:      Full-funnel with retargeting, carousel for track listings
// YouTube Ads:   Pre-roll on similar artist channels, discovery ads
// Spotify:       Marquee for new release push, sponsored sessions
//
// --- Key Metrics ---
// - CTR (Click-Through Rate) — target >2%
// - CPC (Cost Per Click) — target <$0.50
// - CPM (Cost Per Mille) — target <$8
// - ROAS (Return on Ad Spend) — target >3x
// - Conversion Rate — target >5% (click to stream)
// - Retention Lift — measure of new vs returning listeners
//
// --- Tone & Style ---
// Direct, action-oriented, urgency-driven. Every asset should
// have a clear CTA. Visuals should be eye-catching and scroll-
// stopping. Copy should be concise and benefit-focused.
//
// --- Future Implementation Notes ---
// This concept will eventually feed into:
// - AI Routine Engine (for automated ad plan generation)
// - Creative Intelligence (for ad copy and visual generation)
// - Manual Tools (for campaign builder and budget allocator)
// - Analytics Engine (for ROAS and conversion tracking)
// ============================================================

window.AGGRESSIVE_MODE_CONCEPT = {
    name: 'Aggressive Mode',
    description: 'Paid-growth-first strategy focused on conversion, retargeting, and funnel optimization',
    platforms: ['TikTok Ads', 'Meta Ads', 'YouTube Ads', 'Spotify Marquee'],
    objective: 'Turn attention into revenue using ads, CTAs, and optimized targeting',
    coreIdeas: [
        'Spark Ads',
        'Retargeting Loops',
        'CTA Testing',
        'Funnel Stages',
        'Audience Segmentation'
    ],
    keyOutputs: [
        'Ad Concepts',
        'Retargeting Plan',
        'Funnel Map',
        'CTA Variations',
        'Pressure Model'
    ],
    status: 'concept_only'
};
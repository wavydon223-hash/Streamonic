module.exports = function generateAdsKit(prompt) {
  return [
    { title: "Overview", content: "Ads kit generated for: " + prompt },
    { title: "Ad Copy", content: ["Headline 1", "Headline 2", "Headline 3"] },
    { title: "Call to Action", content: ["CTA 1", "CTA 2"] }
  ];
};
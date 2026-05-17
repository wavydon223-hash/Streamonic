module.exports = function generateGrowthKit(prompt) {
  return [
    { title: "Overview", content: "Growth kit generated for: " + prompt },
    { title: "Growth Strategies", content: ["Strategy 1", "Strategy 2", "Strategy 3"] },
    { title: "Metrics", content: ["Metric A", "Metric B"] }
  ];
};
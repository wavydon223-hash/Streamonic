module.exports = function generateFunnelKit(prompt) {
  return [
    { title: "Overview", content: "Funnel kit generated for: " + prompt },
    { title: "Funnel Steps", content: ["Step 1", "Step 2", "Step 3"] },
    { title: "Conversion Tips", content: ["Tip A", "Tip B"] }
  ];
};
module.exports = function generateBrandKit(prompt) {
  return [
    { title: "Overview", content: "Brand kit generated for: " + prompt },
    { title: "Brand Voice", content: ["Voice 1", "Voice 2", "Voice 3"] },
    { title: "Brand Values", content: ["Value A", "Value B", "Value C"] }
  ];
};
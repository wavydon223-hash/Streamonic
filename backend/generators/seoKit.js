module.exports = function generateSeoKit(prompt) {
  return [
    { title: "Overview", content: "SEO kit generated for: " + prompt },
    { title: "Keywords", content: ["Keyword 1", "Keyword 2", "Keyword 3"] },
    { title: "Meta Tags", content: ["Title Tag", "Description Tag"] }
  ];
};
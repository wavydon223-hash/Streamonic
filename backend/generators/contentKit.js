module.exports = function generateContentKit(prompt) {
  return [
    { title: "Overview", content: "Content kit generated for: " + prompt },
    { title: "Hooks", content: ["Hook 1", "Hook 2", "Hook 3"] },
    { title: "Captions", content: ["Caption A", "Caption B"] }
  ];
};
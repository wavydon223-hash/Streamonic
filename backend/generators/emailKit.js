module.exports = function generateEmailKit(prompt) {
  return [
    { title: "Overview", content: "Email kit generated for: " + prompt },
    { title: "Subject Lines", content: ["Subject 1", "Subject 2", "Subject 3"] },
    { title: "Email Body", content: ["Body A", "Body B"] }
  ];
};
const express = require("express");
const cors = require("cors");
const rateLimit = require("express-rate-limit");
const path = require("path");
const config = require("./config");
const app = express();

// Rate limiting
const limiter = rateLimit({
  windowMs: 60 * 1000, // 1 minute
  max: 60, // 60 requests per minute
  message: { success: false, message: "Too many requests. Slow down." }
});

// Hardened CORS
app.use(cors({
  origin: config.allowedOrigin,
  methods: ["POST"],
  allowedHeaders: ["Content-Type"]
}));

// Middleware
app.use(express.json());
app.use(limiter);

// Serve static frontend files
app.use(express.static(path.join(__dirname, "../frontend/dist")));

// Input validation
const validateInput = require("./middleware/validateInput");
app.use("/generate", validateInput);

// Routes
app.use("/generate/content", require("./routes/content"));
app.use("/generate/ads", require("./routes/ads"));
app.use("/generate/seo", require("./routes/seo"));
app.use("/generate/brand", require("./routes/brand"));
app.use("/generate/email", require("./routes/email"));
app.use("/generate/funnel", require("./routes/funnel"));
app.use("/generate/growth", require("./routes/growth"));

// Global error middleware
app.use((err, req, res, next) => {
  console.error("SERVER ERROR:", err);
  res.status(500).json({
    success: false,
    message: "Unexpected server error."
  });
});

// Fallback route for SPA
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "../frontend/dist/index.html"));
});

// Start server
app.listen(config.port, () => {
  console.log("Backend server running on http://localhost:" + config.port);
});
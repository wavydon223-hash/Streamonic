module.exports = function validateInput(req, res, next) {
  if (!req.body || typeof req.body.prompt !== "string") {
    return res.json({
      success: false,
      message: "Invalid input format."
    });
  }
  req.body.prompt = req.body.prompt.trim();
  next();
};
const express = require("express");
const router = express.Router();
const generateKit = require("../generators/growthKit");

router.post("/", (req, res) => {
  try {
    const prompt = req.body.prompt || "";
    const kit = generateKit(prompt);

    if (!kit || !Array.isArray(kit)) {
      return res.json({
        success: false,
        message: "Generator returned invalid kit format."
      });
    }

    res.json({
      success: true,
      sections: kit
    });

  } catch (err) {
    res.json({
      success: false,
      message: "Internal server error."
    });
  }
});

module.exports = router;
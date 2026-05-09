const express = require("express");
const app = express();
const crypto = require("crypto");
const router = express.Router();

router.post("/send-otp", async (req, res) => {
  try {
    const { email } = req.body;
    if (!email) {
      return res.status(400).json({ message: "Email is required" });
    }

    const otp = crypto.randomInt(0, 1000000).toString().padStart(6, "0");
    res.status(200).json({ email, otp });
  } catch (error) {
    res.status(500).json({ message: "Internal server error" });
  }
});

module.exports = router;

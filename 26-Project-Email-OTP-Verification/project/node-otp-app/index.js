const express = require("express");
const crypto = require("crypto");
const app = express();
app.use(express.json()); // Middleware for parsing JSON

require("dotenv").config();

const PORT_NUMBER = process.env.PORT_NUMBER;

app.listen(PORT_NUMBER, () => {
  console.log(`Server is running on port ${PORT_NUMBER}`);
});

app.post("/api/send-otp", async (req, res) => {
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

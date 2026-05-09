require("dotenv").config();
const express = require("express");
const app = express();
const crypto = require("crypto");
const router = express.Router();
const sgMail = require("@sendgrid/mail");
sgMail.setApiKey(process.env.SENDGRID_API_KEY);

const otpStore = new Map(); // In-memory store for OTPs

router.post("/send-otp", async (req, res) => {
  try {
    const { email } = req.body;
    if (!email) {
      return res.status(400).json({ message: "Email is required" });
    }

    const otp = crypto.randomInt(0, 1000000).toString().padStart(6, "0");

    const msg = {
      to: email, // Change to your recipient
      from: {
        email: process.env.FROM_EMAIL,
        name: process.env.FROM_NAME,
      },
      subject: "Your OTP Verification Code",
      html: `
      <div style="font-family: Arial, sans-serif, max-width: 600px; margin: 0 auto;">
        <h2>Your OTP (One-Time Password) code is:</h2>
        <div style="background-color:#f4f4f4; padding: 20px; text-align: center; border-radius: 5px; margin: 20px 0;"><h1 style="color:#007bff; font-size:32px; margin: 0; letter-spacing: 5px;">${otp}</h1></div>
        <p><strong>This code will expire in 10 minutes.</strong></p>
      </div>`,
    };

    sgMail
      .send(msg)
      .then(() => {
        res.status(200).json({ message: "OTP sent successfully" });
        otpStore.set(email, {
          otp,
          expiresAt: new Date(Date.now() + 10 * 60 * 1000), // OTP expires in 10 minutes
        });
      })
      .catch((error) => {
        console.error(error);
        res.status(500).json({ message: "Failed to send OTP" });
      });
  } catch (error) {
    res.status(500).json({ message: "Internal server error" });
  }
});

router.post("/verify-otp", async (req, res) => {
  try {
    const { email, otp } = req.body;
    if (!email || !otp) {
      return res.status(400).json({ message: "Email and OTP are required" });
    }

    const storedData = otpStore.get(email);
    if (!storedData) {
      return res.status(400).json({
        message: "OTP not found or expired. Please request a new one.",
      });
    }

    if (new Date() > storedData.expiresAt) {
      otpStore.delete(email); // Remove expired OTP
      return res.status(400).json({
        message: "OTP has expired. Please request a new one.",
      });
    }

    if (storedData.otp === otp) {
      otpStore.delete(email); // Remove the used OTP
      return res.status(200).json({ message: "OTP verified successfully!" });
    } else {
      return res
        .status(400)
        .json({ message: "Invalid OTP. Please try again." });
    }
  } catch (error) {
    console.error(error);
    res
      .status(500)
      .json({ message: "Failed to verify OTP, please try again." });
  }
});

module.exports = router;

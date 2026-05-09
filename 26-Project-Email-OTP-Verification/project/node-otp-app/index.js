const express = require("express");
const app = express();
require("dotenv").config();
const otpRoutes = require("./routes/otp");

app.use(express.json()); // Middleware for parsing JSON
app.use("/api", otpRoutes);

const PORT_NUMBER = process.env.PORT_NUMBER;

app.listen(PORT_NUMBER, () => {
  console.log(`Server is running on port ${PORT_NUMBER}`);
});

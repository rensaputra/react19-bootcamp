const express = require("express");
const app = express();
require("dotenv").config();

const PORT_NUMBER = process.env.PORT_NUMBER;

app.listen(PORT_NUMBER, () => {
  console.log(`Server is running on port ${PORT_NUMBER}`);
});

app.get("/", (req, res) => {
  res.status(200).send("Hello, World!");
});

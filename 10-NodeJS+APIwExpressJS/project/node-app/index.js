const express = require("express");
require("dotenv").config();
const app = express();

const PORT = process.env.PORT_NUMBER || 3000;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

app.get("/", (req, res) => {
  let data = {
    firstName: "Rendy",
    lastName: "Saputra",
    age: 27,
    hobbies: ["coding", "reading", "traveling"],
  };
  res.setHeader("Content-Type", "application/json");
  res.status(200).send(data);
});

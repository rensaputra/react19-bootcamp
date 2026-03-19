const express = require("express");
const app = express();
require("dotenv").config();
const products = require("./routes/products");
const cors = require("cors");

app.use(cors());
app.use(express.json());
app.use("/products", products);

const PORT = process.env.PORT_NUMBER || 3000;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

const express = require("express");
const router = express.Router();
const mysql = require("mysql2");
require("dotenv").config();

const PORT = process.env.PORT_NUMBER || 3000;

const pool = mysql.createPool({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  port: process.env.DB_PORT,
  multipleStatements: true,
});

router.get("/", (req, res) => {
  pool.query("SELECT * FROM products", (err, results) => {
    if (err) {
      return res.status(500).send("Error fetching products from database");
    }
    res.status(200).send(results);
  });
});

router.post("/add", (req, res) => {
  const { name, image, price, description } = req.body; //destructure the request body
  pool.query(
    "INSERT INTO products (name, image, price, description) VALUES (?, ?, ?, ?)",
    [name, image, price, description],
    (err, results) => {
      if (err) {
        return res.status(500).send("Error adding product to database");
      }
      res.status(201).send({
        message: "Product added successfully",
        productId: results.insertId,
      });
    },
  );
});

router.get("/:id", (req, res) => {
  const { id } = req.params;
  pool.query("SELECT * FROM products WHERE id = ?", [id], (err, results) => {
    if (err) {
      return res
        .status(500)
        .send("Error fetching product details from database");
    }
    if (results.length === 0) {
      return res.status(404).send("Product not found");
    }
    res.status(200).send(results);
  });
});

router.put("/update/:id", (req, res) => {
  const { id } = req.params;
  const { name, image, price, description } = req.body;

  pool.query(
    "UPDATE products SET name = ?, image = ?, price = ?, description = ? WHERE id = ?",
    [name, image, price, description, id],
    (err, results) => {
      if (err) {
        return res.status(500).send("Error updating product in database");
      }
      res.status(200).send({
        message: "Product updated successfully",
        productId: id,
      });
    },
  );
});

router.delete("/delete/:id", (req, res) => {
  const { id } = req.params;
  pool.query("DELETE FROM products WHERE id =?", [id], (err, results) => {
    if (err) {
      return res.status(500).send("Error deleting product from database");
    }
    return res.status(200).send({
      message: "Product deleted successfully",
      productId: id,
    });
  });
});

module.exports = router;

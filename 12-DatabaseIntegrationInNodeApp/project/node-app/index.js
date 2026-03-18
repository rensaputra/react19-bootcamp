const express = require("express");
const app = express();
require("dotenv").config();

const PORT = process.env.PORT_NUMBER || 3000;

const mysql = require("mysql2");
const pool = mysql.createPool({
  host: process.env.DATABASE_HOST || "localhost",
  user: process.env.DATABASE_USER || "root",
  password: process.env.DATABASE_PASSWORD || "initial_password",
  database: process.env.DATABASE_NAME || "local_db",
  port: process.env.DATABASE_PORT || 3306,
  multipleStatements: true,
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

app.get("/", (req, res) => {
  pool.getConnection((err, connection) => {
    if (err) {
      return res.status(500).send(`{"message": "${err.message}"}`);
    }
    res.setHeader("Content-Type", "application/json");
    res.status(200).send('{"message": "Hello World!"}');
    connection.release();
  });
});

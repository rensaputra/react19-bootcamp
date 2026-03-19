# 12. Connect MySQL Database in Node App

## Connect MySQL database in Node App

- **Connect Node.js to MySQL with mysql2 and connection pools**: You install mysql2 (`npm install mysql2`) and use `mysql.createPool(...)` instead of the older `createConnection` so the app can handle multiple database connections efficiently.
- **Configure the pool with DB details**: In `index.js`, you pass an object with host (`localhost`), user (e.g., `root`), `password`, `database name`, `port` (3306 by default), and `multipleStatements: true` so multiple SQL queries can run.
- **Verify and handle connection success/failure**: You call `pool.getConnection((err, connection) => { ... })` and:
  - On success, send a 200 response like "connection established".
  - On error, return a 500 response and send the error, which the instructor demonstrates by intentionally using a wrong DB name.

```
const mysql = require('mysql2');

// Create a pool
const pool = mysql.createPool({
  host: 'localhost',
  user: 'root',
  password: 'your_password',
  database: 'your_database',
  port: 3306, // Default MySQL port
  multipleStatements: true
});

// Get a connection from the pool
pool.getConnection((err, connection) => {
  if (err) {
    console.error('Error connecting to the database:', err);
    return;
  }
  console.log('Connection established');
  connection.release(); // Release the connection back to the pool
});
```
## Fetching fata from database
```
pool.query('SELECT * FROM products', (err, rows) => {
  if (err) {
    return res.status(500).send(err);
  }
  res.status(200).send(rows);
});
```
## Configuring organized routes with express.Router()

- **Using express.router**: It introduces the express.router method to create a mini application that acts like a middleware and routing system, making the code structure more efficient.
- **Configuring Routes**:
  ```
   // Create a folder called routes and inside it, create a file called products.js
  const express = require('express');
  const router = express.Router();
  
  // Define routes in products.js
  router.get('/', (req, res) => {
    // Your code to handle the GET request
  });
  
  // Export the router
  module.exports = router;
  
  // In your main application file (e.g., index.js)
  const express = require('express');
  const app = express();
  const products = require('./routes/products'); // Adjust the path as necessary
  
  // Use the router in your main application
  app.use('/products', products);
  
  // Start the server
  app.listen(3000, () => {
    console.log('Server is running on port 3000');
  });
  ```
## Creating POST API for adding products

- **Creating a POST API Endpoint**: Create a POST route to insert a product record into the products table in a MySQL database.
- **Handling Request Body**: It explains how to receive data through the request body and parse JSON data using express.json middleware.
- **Inserting Data into Database**: The video shows how to use the pool.query method to run an INSERT INTO query with dynamic values from the request body.
- **Error Handling**: It covers how to handle errors by returning a 500 status with the error message if an error occurs during the database operation.
- **Success Response**: Explains how to send a 201 status code and the inserted rows as a response if the data is successfully inserted. 

  ```
  index.js
  app.use(express.json()); // Middleware to parse JSON data
  app.use("/products", products);
  ```
  ```
  products.js
  router.post("/add", (req, res) => {
    const { name, image, price, description } = req.body; //destructure the request body
    pool.query(
      "INSERT INTO products (name, image, price, description) VALUES (?, ?, ?, ?)",
      [name, image, price, description],
      (err, results) => {
        if (err) {
          return res.status(500).send("Error adding product to database");
        }
        res.status(201).send(results);
      },
    );
  });
  ```

  ## Creating API to fetch a unique product
  ```
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
  ```

## Creating API to update product's data

  ```
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
  ```

## Creating API to delete a product

  ```
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
  ```
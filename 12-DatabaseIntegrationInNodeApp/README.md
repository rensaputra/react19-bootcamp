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

# 11. MySQL Basics

- **What a database is and why it matters**: A database is an organized collection of data (users, products, transactions, etc.) that your backend uses to store, access, and update information for almost every feature in your application.
- **Relational vs non‑relational databases**:
  - Relational (SQL) databases store data in tables with rows and columns and use SQL to query data. They’re great when data integrity and relationships (like users → orders → products) are important. Examples: MySQL, PostgreSQL, SQLite.
  - Non‑relational (NoSQL) databases store data as key–value pairs, documents, or graphs and are suited for flexible, highly scalable, often more unstructured data. Examples: MongoDB, Cassandra, Firebase.

- Why this course uses MySQL: MySQL is structured, reliable, scalable, and secure, making it a good fit for ecommerce‑style apps that need organized, relational data (products, users, orders). The upcoming videos will cover the core MySQL concepts you need for the Node backend you’ve been building.

## MySQL installation

- **Install and secure MySQL**: You download and install the MySQL Community Server, set a root password, and need to remember it because every future database connection (including from your Node.js backend later in the course) will rely on it.
- **Follow installation instruction**: I'm using Ubuntu, I followed installation instruction [here](https://dev.mysql.com/doc/refman/9.6/en/linux-installation-apt-repo.html).
- **Connect and run queries via CLI**: You log in with mysql -u root -p, enter the password, and can then run SQL queries like SHOW DATABASES; (ending with a semicolon) to interact with the MySQL server directly from the command line.

## Database creation

- **Create a database in MySQL CLI**: Use `CREATE DATABASE test_db`; to create a new database, and `SHOW DATABASES`; to confirm it was created.
- **Avoid duplicate database errors**: Running `CREATE DATABASE test_db`; again throws an error because the database already exists.
- **Use IF NOT EXISTS for safer scripts**: `CREATE DATABASE IF NOT EXISTS test_db`; will not error if the DB already exists; instead it returns a warning, which you can inspect with SHOW WARNINGS;. This is the preferred pattern to avoid accidental

## Drop database

- **Delete a database with DROP DATABASE**: You remove a database using `DROP DATABASE database_name;` (for instance, `DROP DATABASE test_db;`). This command first removes all tables/data, then deletes the database itself.
- **Use IF EXISTS to avoid errors**: Writing `DROP DATABASE IF EXISTS test_db;` prevents errors if the database is already gone; MySQL will simply skip the drop.
- **It’s irreversible**: Once a database is dropped, it cannot be undone, so you should double‑check before running this in any environment, especially scripts or production.

## Data types

- **Three main MySQL data type groups**:
  - **Numeric** (e.g., `INT`, `FLOAT`, `DOUBLE`, `BIGINT`) for values like IDs, prices, quantities, salaries. Use `INT` for whole numbers, `FLOAT/DOUBLE` for decimals, and `BIGINT` when numbers exceed the `INT` limit (~2.15 billion).
  - **Date and time** (e.g., `DATE`, `DATETIME`, `TIMESTAMP`) for anything involving dates, times, or both.
  - **String** (e.g., `CHAR`, `VARCHAR`, `TEXT`) for text and symbols; even if it looks like a number, it’s stored as characters and you can’t do arithmetic on it.

- **`CHAR` vs `VARCHAR` and sizing**:
  - Use `CHAR(n)` when the length is fixed (like a 2‑letter country code).
  - Use `VARCHAR(n)` when the length varies (like product names).
  - You must specify the max length in parentheses (e.g., `VARCHAR(30)`), which helps optimize storage and performance.

- **Practical implication for your schemas**:
  - Choosing the right type and size makes your tables more efficient and avoids issues later when you build tables for products, users, and orders in the ecommerce sections of the course.

## Creating table

- **Create and select the database**: They create a new database with `CREATE DATABASE IF NOT EXISTS local_db;` and then switch into it using `USE local_db;` so all following operations apply to that database.
- **Design the `products` table schema**: They create a `products` table with columns tailored for an ecommerce catalog:
  - `id INT AUTO_INCREMENT PRIMARY KEY` to uniquely and automatically identify each product.
  - `image VARCHAR(255)` for the image URL.
  - `name VARCHAR(100) NOT NULL` so every product must have a name.
  - `price FLOAT NOT NULL` for the product price.
  - `description TEXT` for longer product descriptions.

- **Verify the table structure**: After creation, they run `SHOW TABLES`; to confirm the table exists and `DESCRIBE products`; to inspect columns, data types, nullability, keys, and defaults.

## INSERT query

- **Insert data into a table with `INSERT INTO`**: You add rows to the products table using `INSERT INTO products (image, name, price, description) VALUES (...);`. The column list defines which fields you’re filling and in what order.
- **Insert multiple rows at once**: You can add several products in a single query by providing multiple parenthesized value groups separated by commas, which is more efficient than running separate queries.
- **Verify inserts with `SELECT * FROM products`**: After inserting, you run `SELECT * FROM products;` to retrieve and confirm all rows currently stored in the table.

## Basic filtering with WHERE clause

- **Select specific columns with `SELECT`**: Instead of `SELECT * FROM products;` (all columns), you can fetch only what you need, e.g. `SELECT id, name, price FROM products;` or even `SELECT name FROM products;`.
- **Filter rows with `WHERE`**: Use `WHERE` to get only matching records, e.g. `SELECT * FROM products WHERE name = 'apple';` or `SELECT * FROM products WHERE id = 1;`.
- **Why this matters for your apps**: These patterns—choosing columns and filtering with `WHERE`—are exactly how your backend will fetch just the right product data (like a single product by id or all products matching a search) for your React ecommerce UI.

## Advanced filtering with WHERE clause

- **Partial text search with `LIKE`**: Use `LIKE` with `%` wildcards to match substrings, e.g. `WHERE name LIKE '%le%'` returns all products whose name contains `le` anywhere (like `apple` and `pineapple`).
- **Filter by numeric conditions**: Use comparison operators in `WHERE`, e.g. `WHERE price > 30` to get only products with price greater than 30. You can also use `<`, `>=`, `<=`, etc.
- **Combine multiple conditions**: Use `AND` to apply more than one condition, e.g. `WHERE name LIKE '%le%' AND price > 30` returns only rows that satisfy both filters (here, just `pineapple`).

## Sorting data with 'LIMIT' & 'ORDER BY'

- **Sort query results with `ORDER BY`**: You can sort rows in ascending or descending order by a specific column, e.g. `SELECT * FROM products ORDER BY price DESC;` or `ORDER BY name DESC;`.
- **Limit how many rows you get with `LIMIT`**: After sorting, you can restrict the number of records returned, e.g. `SELECT * FROM products ORDER BY name DESC LIMIT 2;` gives only the top two rows.
- **Why it matters for apps**: Sorting plus limiting is how you build things like “top N products”, paginated lists, or ordered search results in a React/Node + MySQL ecommerce flow.

## Updating the data

- **Update rows with `UPDATE ... SET ... WHERE ...`**: To change data in a table, you use a query like `UPDATE products SET price = 10 WHERE id = 1;`.
- **Always target a specific record (usually by `id`)**: The `WHERE id = 1` part identifies which row to update. Without a proper `WHERE` clause, you could accidentally update all rows.
- **Verify the change with `SELECT`**: After running the update, you check the result using `SELECT * FROM products;` (or a filtered `SELECT`) to confirm the new value is stored.

## Delete records using DELETE clause

- **How `DELETE` works**: `DELETE FROM products;` (without WHERE) removes all rows in the table, while `DELETE FROM products WHERE id = 5;` deletes only the matching row. Unlike `SELECT`, you don’t use `*` with `DELETE`.
- **Use a unique identifier**: It’s safest to target rows by a unique column such as `id`, so you delete exactly one intended record (like the product with `id = 5`).
- **It’s permanent**: Once a row is deleted, it cannot be undone, so you should be very careful with `DELETE`, especially in real applications (like removing products in an ecommerce system).

## Drop table

- **`DROP TABLE` deletes a table permanently**: You remove a table with `DROP TABLE table_name;` (for instance, `DROP TABLE users;`). Once executed, the table and all its data are gone and cannot be undone.
- **Use `IF EXISTS` as a safety net**: Writing `DROP TABLE IF EXISTS users;` avoids errors if the table doesn’t exist and is a safer pattern in scripts.
- **Always double‑check before running it**: Because it’s irreversible, you should be very careful using `DROP TABLE`, especially in any environment that holds real data.

# 10. Server Side: NodeJS Basics + API Creation with ExpressJS

## Intro
- **Client–server–database flow**: The client (your React app) never talks directly to the database for security reasons. Instead, it sends requests to an API on the server, which then talks to the database and returns the data.
- **Role of the backend (server-side app)**: The server-side application (backend) is the mediator between client and database. It receives requests, processes them, fetches or updates data, and sends responses back.
- **Why Node.js for the backend**: Node.js lets you run JavaScript on the server. It’s open source, cross-platform, built on the fast V8 engine, and uses an event-driven, non-blocking I/O model, which makes it well-suited for scalable, high-performance web applications.

## Project creation

- **Initialize a Node.js project**: In VS Code, you open your project folder (here, node-app) and run `npm init` in the terminal. This creates a `package.json` file that stores project metadata, dependencies, and scripts—very similar to what you’ve seen in React projects.
- **Create and run a basic Node script**: You add an `index.js` file, write simple JavaScript like `console.log("node-app-is-running")`, and run it with `node index.js` in the terminal.
- **JavaScript without the browser**: Seeing the log in the terminal shows that JavaScript is now running directly on the server via Node.js, without needing a browser—this is the core idea behind using Node for backend development. 

## Creating server using Express.js

- **Express turns your Node app into a long‑running server**: Instead of a script that runs once and exits, `express()` plus `app.listen(port, callback)` creates a server that stays in listening mode so it can handle incoming client requests.
- **Basic Express setup pattern**: You import Express with `const express = require("express")`, create an app instance with `const app = express()`, and start it with `app.listen(5000, () => { console.log("server is running on port 5000") })`.
- **Use environment variables for configuration**: The port is moved into a `.env` file (e.g., `PORT_NUMBER=5000`) and loaded with the ``dotenv` package (`require("dotenv").config())`, then accessed via `process.env.PORT_NUMBER`. This is a standard practice to keep configuration (and secrets) out of your code.

## Creating basic API
- **What an API/endpoint is**: An API (Application Programming Interface) is how the client talks to the server. Each URL (like https://dummyjson.com/users or http://localhost:5000/) represents an API endpoint that receives HTTP requests and returns responses.
- **How to define a GET endpoint in Express**: You use `app.get("/", (req, res) => { ... })` where / is the route, `req` holds request details, and `res` is used to send data back. In the video, it first returns "hello world", then a static object.
- **Sending JSON + status codes**: Instead of just a string, you typically send an object/JSON along with an HTTP status, e.g. `res.status(200).send(data)`, where 200 means the request succeeded.
- **Restarting the server after changes**: Because the server is already running, code changes don’t apply until you restart the Node/Express process (later in the course they use tools like nodemon to automate this).

## Configuring nodemon
- **Problem**: Manually stopping and restarting the Node server after every code change is slow and annoying during development.
- **Solution (nodemon)**: Installing nodemon globally with `npm install -g nodemon` lets you start your app with `nodemon index.js` instead of `node` index.js`. Nodemon watches your files and automatically restarts the server whenever you save changes.

## Practice Project
Practice create an API with Express JS | [Source Code](project/node-app/)

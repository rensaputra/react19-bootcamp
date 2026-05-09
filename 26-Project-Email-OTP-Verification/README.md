# Bit-Sized Project: Email OTP Verification

## Introduction & Project definition

- The project focuses on creating a secure OTP verification feature using `React with Vite` for the frontend, `Node.js` for the backend, and `SendGrid` for email delivery.
- All sensitive operations like OTP generation, sending, and verification happen on the server side to protect credentials and API keys.
- `Tailwind CSS` is used for clean and consistent styling, and by the end, you'll have a fully functional OTP verification app with practical hands-on experience in full-stack development.

## Why chose Vite over Create React App(CRA)?

- Vite is a modern front-end build tool preferred over traditional tools like Create React App because it offers Hot Module Replacement (HMR), which updates only specific parts of the UI in real time without a full reload.
- It significantly boosts performance by pre-building dependencies with ES build, which is much faster than traditional JavaScript bundlers.
- Vite automatically splits code into optimized chunks and provides a clean, minimal project structure with zero unnecessary configuration, making it ideal for modern React development.-

## Setting up the environment

- The project is set up using Vite with the React template, which creates a clean and efficient project structure.
- Running `npm create vite@latest otp-verification-app`
- I chose `React` as the framework and `TypeScript + React Compiler` as the varient for better type safety and optimization that Compiler provides.
- It will then scaffold the project and install the dependencies, the app will started on `localhost:5173` by default.
- The folder structure includes a src folder for components and assets, plus configuration files like vite.config.js for customizing the build and development server.
- The development server runs on port 5173, and you can view the default Vite React screen by opening localhost:5173 in your browser.
- The next step after setup is installing Tailwind CSS to style the application.

## Install and configure Tailwind CSS

- Tailwind CSS uses utility classes (like `text-lg`, `bg-blue-500`) instead of pre-built components, helping you avoid writing custom CSS.
- It optimizes performance by removing unused styles, which reduces the final CSS size.
- To install Tailwind with npm, follow the [official Tailwind CSS installation guide](https://tailwindcss.com/docs/installation/using-vite).

## Creating card for email verification

- How to create a clean, styled card layout using Tailwind CSS utility classes for borders, padding, shadows, rounded corners, and width control.
- Techniques to center text and use flexbox for form layout, including styling labels, input fields, and adding spacing.
- Styling a full-width submit button with background color, padding, and rounded edges.
- Setting background colors for the page and card container to make the card visually stand out.

## Creating routes

- Using React Router is the preferred way to manage multiple forms or views, like email verification and OTP verification, by creating separate routes instead of conditionally rendering forms in the same component.
- The setup involves installing the react-router package, wrapping your app with the BrowserRouter component, and defining individual Route components for each path.
- This approach keeps your code cleaner, easier to maintain, and improves navigation by mapping URLs to components.

## Creating OTP verification card

- You learned how to create an OTP verification card component by adapting an existing email verification component, updating titles, labels, input types, and button text to fit the OTP use case.
- The video demonstrates styling techniques using Tailwind CSS classes to center text, add margins, emphasize text with font weight, and arrange elements with flexbox for a clean layout.
- It shows how to include additional UI elements like displaying the email address where the OTP was sent and adding a resend button with appropriate styling.

## Handling form values

- Use React's useState hook to create state variables for form inputs like email and OTP, initializing them with empty strings.
- Create event handler functions (e.g., `onChangeHandler`) to update state based on user input by accessing event.target.value.
- Prevent the default form submission behavior using `e.preventDefault()` in the submit handler to avoid page refresh and keep input data intact.
- Log or process the input values on form submission to handle user data effectively.

## Setting up Express server using Node.js

- You learned how to initialize a Node.js project and create a server using the ExpressJS framework, which simplifies server setup and routing.
- First you run `npm init -y` to create a package.json file, then install Express with `npm install express`.
- The server runs continuously on a specified port, allowing it to listen for client requests.
- Best practice includes using a .env file to store configuration values like the port number, accessed in code via the dotenv package, avoiding hardcoding sensitive or environment-specific data.
- To use .env files, install dotenv with `npm install dotenv`, create a .env file with key-value pairs (e.g., `PORT_NUMBER=5000`), and load it in your server code with `require('dotenv').config()`.

## Creating basic GET API

- We created a basic GET API endpoint using ExpressJS in a Node.js server, including handling requests and sending responses with appropriate status codes.
- `app.listen()` is used to start the server and listen for incoming requests on a specified port, while `app.get()` defines a route handler for GET requests to a specific path.
- `app.get()` calls a callback function when a request is made to the defined route, allowing you to send a response back to the client using `res.status().json()` or similar methods.
- The video highlights the importance of restarting the server to see code changes and introduces `nodemon`, a tool that automatically restarts the server on code updates, improving development workflow.
- Understanding API endpoints as specific URLs on the server that clients communicate with is essential for building web applications that interact with databases and external services.

## Creating a simple POST API

- We created a POST API endpoint in ExpressJS that accepts the user's email in the request body.
- The API generates a random six-digit OTP using node's crypto module and sends it back in a JSON response.
- Proper error handling is implemented using try-catch blocks, with meaningful HTTP status codes for missing email input (400) and server errors (500).

## Postman installation

- We will use Postman as our API testing tool to send requests to our Express server and verify the functionality of our endpoints.
- Postman allows us to test various HTTP methods (GET, POST, etc.), set request headers, and view responses in a user-friendly interface.
- Download postman from the offcial website: https://www.postman.com/downloads/ and install it on your machine to start testing your APIs.

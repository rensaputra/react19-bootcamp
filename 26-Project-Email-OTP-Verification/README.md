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

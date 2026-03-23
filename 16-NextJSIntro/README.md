# 16. NextJS Introduction

## NextJS in spite of ReactJS

- **Full-Stack Capabilities**: Next.js is a full-stack React framework that supports server-side rendering and full-stack application operations like authentication and routing.
- **SEO and Performance**: Next.js serves dynamic sites as static, improving rendering speed and SEO compatibility.
- **Enhanced Features**: It offers features like file and path-based routing, data handling, and optimization, making it a robust choice for building dynamic web applications.
- **Server-Side Rendering (SSR)**: Next.js supports server-side rendering, which improves SEO and initial load times.
- **Automatic Code Splitting**: This feature ensures efficient loading by splitting JavaScript code into smaller chunks.
- **API Routes**: Next.js allows defining API routes within the same project, making API management easier.
- **File-Based Routing**: Simplifies routing without needing additional libraries like React Router DOM.
- **Built-In Image Optimization**: Ensures rendered images are appropriately sized.
- **Easy Deployment**: Next.js offers serverless deployment and integrates seamlessly with repositories for CI/CD.

## Creating first project

- **Command to Create App**: Use `npx create-next-app` to create a new Next.js application.
- **Node.js Requirement**: Ensure Node.js 18.17 or above is installed.
- **Project Setup Options**: Choose options like TypeScript, ESLint, and project structure (src folder).
- **App Router**: Opt for the app router, a feature introduced after Next.js 13.
- **Running the App**: Use `npm run dev` to start the development server and view the app at `localhost`.
- **Creating a Next.js Project**: Use the `create-next-app` utility with the command `npx create-next-app@latest` followed by the project name.
- **Node.js Version Requirement**: Ensure you have Node.js 18.17 or above installed.
- **Project Setup Options**: Choose between JavaScript or TypeScript, ESLint, Tailwind usage, src folder for project structure, and app or pages router.
- **Running the Development Server**: Use `npm run dev` to start the development server, which creates a `.next` folder for interface and cache storage.

## Project structure

- **Changing the Web App's Title**: This can be done from the `layout.js` file in the app directory.
- **Creating a Route**: To create a `details` route, you need to create a folder named `details` in the app directory.
- **Using .tsx Files**: You can use `.tsx` files for page components if you have opted for TypeScript while configuring the project.
- **Rendering Custom Text**: To render custom text on the main page, modify the `page.js` file and use the `<h1>` tag with your desired text.

## pages router vs app router

- **Importance of Router**: The router is a crucial component in any full-stack application, managing different paths for different functionalities.
- **App Router vs Pages Router**: Next.js 13 introduced the app router, which is an advanced way of creating routes compared to the pages router used in previous versions.
- **Modern Features**: The app router supports new features like React server components, enhancing the capabilities of Next.js applications.
- **Routers in Next.js**: Routers are essential for implementing routing and creating single-page applications.
- **Types of Routers**: Next.js has two types of routers - Pages Router and App Router.
- **Preferred Router**: The App Router, introduced after version 13, is recommended by Next.js due to its improvements over the Pages Router.

## Practice project

[Source code](/16-NextJSIntro/project/try-app/)

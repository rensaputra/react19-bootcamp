# Introduction

## React history: Milestone

- **ReactJS Origins**: Created by Facebook in 2011 to simplify development as Facebook's ad app scaled rapidly.
- **Major Milestones**: Open-sourced in 2013, introduction of React developer tools and Flux architecture in 2013, performance enchancement in React 15 (2016), error boundaries in React 16 (2018), and hooks in React 16.8 (2018).
- **Major Updates**: React 18(2022) introduced features like automatic batching and new hooks. React 19 (2024) brought new suspense updates, improved server-side rendering, and static stire generation for better performance and reduced loading times.

## React 19 and React Canary (RC)

- **React 19 Features**: Introduced new features like actions, server components, and hooks such as use action state, use form status, and use optimistic.
- **React Canary (RC)**: Allows developers to test and provide feedback on new features before the final release.
- **New API**: The use API helps read resources in render, suspending until the promise resolves.

## Creating first project: React 19

- **Creating a React Project**: Use `npx create-react-app` followed by the app name to create a new project with the latest version of React.
- **Installing Specific React Versions**: After creating the project, navigate to the project directory and use npm install with the specific version number to install a particular version of React and React-DOM.
- **Role of package.json**: This file stores metadata about the project, including its dependencies, scripts for common tasks, and development dependencies.
- **Role of package-lock.json**: Ensures consistent installation of dependencies across different environments by locking the exact versions used. Deleting this file can lead to unpredictable behavior, so it is best not to remove it manually.

### Understanding project structure

- **Public Directory**: Contains index.html, which is the main HTML file, manifest.json for PWA functionality, and robots.txt for search engine indexing.
  - **Progressive Web App**: A Javascript web application providing native app-like user experience with functionalities like cross-browser compatibility, offline access, and installability on various devices.
  - **Manifest.json**: Provide metadata for PWA such ass app name, icons, theme color, and startup behaviour, alling the app to be installed behave like native application.
  - **Robots.txt**: Used to define which pages of application can or cannot be accessed by search engine crawlers, helping to control which pages are indexed.
- **SRC Directory**: Includes index.js as the entry point, app.js as the first component, and various CSS files for styling.
  - **Entry points**: `index.html` in the public directory is the main HTML entry point, and `index.js` in the directory is the main Javascript entry point.
- **Testing and Performance**: setup-tests.js for global test setup, app.test.js for testing the app component, and reportWebVitals.js for measuring performance.
- **Configuration Files**: package.json for project metadata and dependencies, package-lock.json for exact versioning, and README.md for project description and setup instructions.
  - **Readme.md**: Contains documentation about the project, including its purpose, setup instructions, and usage, helping developers understand the project.
  - **.gitignore**: Specifies files and directories that should be ignored by versioon control, ensuing they are not tracked or included in commis.

## Creating project with TypeScript

- **Typescript overview**: Typescript is a strongly typed programming langeuage built on top of Javascript, adding static types to improve development by enabling static type checking and reducing runtime errors.
- **Project creation**: Use the command `npx create-react-app react-19-ts --template typescript` to create a new React project with TypeScript.
- **Project Stucture**: The project structure remains the same, but the javaScript files are now TypeScript (.ts and .tsx). A new file, `react-app-env.d.ts`, references type declarations specific to projects created with Create React App.
- **TypeScript configurations**: The `tsconfig.json` file contains options to control how the TypeScript compiler behaves, allowing customization and error checking.

### Q&A

**Q: Would I choose TypeScript over JavaScript for my react project?**

> Depends, most of the time yes.
>
> - Because TypeScript provides static types - which check the types at compile time & highlights them into the code itself. So it'll reduce the runtime errors.
> - It allows developers to define the shape of the objects, props & states, making the codebase more robust.
> - It improve the code readability & early detection of bugs.
> - It provides the better handling of props & states which can be error-prone.

Javascript can still be considered in some scenarios, such as small or short-lived projects, build prototypes or proof of concepts etc

**Q: Explain the purpose of tsconfig.json file in React project?**

> The plays important role in using TypeScript
>
> - It contains a set of options that control how the TypeScript compiler behaves when it transpiles TS code to JS.
> - We can configure the compilation settings, enable or disable specific TS features.
> - We can also define the project scope which defines whether the files and directories should be included or excluded during compilation process.
> - We can also configure the type checing rules, modules related config, languages etc

## Creating project in NextJS

- **Creating a Next.js Project**: Use the command `npx create-next-app@latest` to create a new Next.js project.
- **Project Setup**: Choose options such as using TypeScript, ESLint, and the app router during setup
- **Project structure**: The project included directories such as `public` for static files and `src` for application code, with key files like `page.tsx` for the home page and `layout.tsx` for global layout and metadata configuration.

### Q&A

**Q: What is the difference between React and Next.js?**

> - React is a javascript library, whereas Next.js are framework - which is built on top of react.
> - For routing, react needs an additional library called react-router, whereas NextJS have file based routing.
> - React is UI library, where NextJS are full-stack framework. So we can develop & handle API routes in the same project.
> - In React, we need to add SSR manually using the library - where nextJS have built in support for Server Side Rendering (SSR).
> - React is easy to learn & implement, to work with NextJS we have to learn React first as it is the foundation.
> - React delivers low performance compared to NextJS, as they are using built-in features of SSR & Static Site Generation (SSG).
> - The SEO of the project is excellent in NextJS compared to ReactJS.

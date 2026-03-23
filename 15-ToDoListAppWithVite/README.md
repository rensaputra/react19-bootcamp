# 15. To-Do List App with Vite: Hands-on practice app

# Introduction and definition

- **Creating a Project with Vite and React**: The video explains how to create a project using Vite and React, highlighting the benefits of using Vite over Create React App (CRA).
  ```
  npm create vite@latest my-app
  ```
- **Tailwind CSS Configuration**: It covers how to configure and style the application using Tailwind CSS, which is essential in the current tech market.
- **Building Components**: The video guides you through building a to-do form, to-do list, and to-do item component.
- **Data Persistence**: It also discusses using local storage for data persistence in the to-do application.

## Tailwind CSS installation and configuration

- **Tailwind CSS Installation**: To nstall Tailwind CSS using the command `npm install tailwindcss @tailwindcss/vite`.
- **Configuration**: Configure Tailwind CSS by importing it in vite.config.js and index.css.

Tailwind CSS offers several benefits:

- **Utility Classes**: Provides predefined utility classes like text-lg or bg-blue-500, which helps in quickly styling elements without writing custom CSS.
- **Performance Optimization**: Removes unused styles, reducing the final size of the CSS build and improving performance.
- **Ease of Use**: Simplifies the styling process by eliminating the need for custom CSS, making it easier to maintain and update styles.

  _**Tips**: Install `Tailwind CSS IntelliSense` extension in VS code that will provides autocomplete for Tailwind classes_  
  Create [tailwind.config.ts](/15-ToDoListAppWithVite/project/todo-app/tailwind.config.ts)

## Data persistance with localStorage

LocalStorage is a web storage API that allows you to store data in the browser. This data persists even after the browser is closed and reopened, making it useful for saving user preferences, session data, and more.

- **Storing Data**: Use `localStorage.setItem(key, value)` to store data. The `key` is the name of the data, and the `value` is the data you want to store.
  ```
  localStorage.setItem('username', 'Rendy');
  ```
- **Retrieving Data**: Use `localStorage.getItem(key)` to retrieve data. The `key` is the name of the data you want to retrieve.
  ```
  const username = localStorage.getItem('username');
  console.log(username); // Outputs: Rendy
  ```
- **Removing Data**: Use `localStorage.removeItem(key)` to remove data.
  ```
  localStorage.removeItem('username');
  ```
- **Clearing All Data**: Use `localStorage.clear()` to remove all data from localStorage.
  ```
  localStorage.clear();
  ```

## Project

![To-do list app using Vite](/15-ToDoListAppWithVite/docs/screenshots/todo-app.png)  
[Source code](/15-ToDoListAppWithVite/project/todo-app/)

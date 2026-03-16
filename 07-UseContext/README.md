# 7. The useContext() Hook: Global State Management

## Prop Drilling

- **Prop Drilling**: This occurs when you need to pass data from a parent component to a deeply nested child component. The data must be passed through all intermediate components, even if they don't use it directly.
- **Global State Management**: To avoid prop drilling and maintain state across components, you can use global state management. This can be achieved using React's built-in Context API or external libraries like Redux.
- **Context API**: The video dives deep into the Context API, explaining how it helps manage global state and avoid the complexities of prop drilling.

## Understanding of Context API

- **Avoiding Prop Drilling**: The Context API helps avoid prop drilling by allowing data to be accessed directly by any component, bypassing the need to pass props through intermediate components.
- **Setting Up Context API**: There are three main steps to set up the Context API: creating a context, providing the context using a provider component, and consuming the context using a consumer component.
- **Global State Management**: The Context API allows for the creation of a global state that can be accessed by any component, making it easier to manage state across the application.

  **Creating a Context**

  ```
  const appContext = React.createContext(defaultValue);
  export default appContext;
  ```

  **Providing the Context**

  ```
  <AppContext.Provider value={str}>
  <ComponentA />
  </AppContext.Provider>
  ```

  **Consuming the Context**

  ```
  <AppContext.Consumer>
  {value => (
    <JSX>{value}</JSX>
  )}
  </AppContext.Consumer
  ```

  **note**: this is the complicated way, `useContext()` is more modern way to retrive the context.

## useContext() hook

- **Simplifying Context API**: The `useContext` hook simplifies the usage of the Context API by allowing you to access context values directly without the need for a consumer component.
- **Syntax**: You create an instance of the `useContext` hook and pass the context reference as an argument to fetch the data provided by the context provider.
- **Implementation**: The video demonstrates how to replace the consumer component with the `useContext` hook in components to fetch and display context data more efficiently.  
  **Consuming the Context using useContext**
  ```
  const value = useContext(MyContext);
  ```

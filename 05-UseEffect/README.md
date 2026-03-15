# 5. useEffect(): Working with Component Life Cycles

- **Component Life Cycle Phases**: Components in React go through mounting, updating, and unmounting phases, similar to a human life cycle.
- **Lifecycle Methods in Class Components**: Methods like `componentDidMount`, `componentDidUpdate`, and `componentWillUnmount` are used to manage component behavior during different phases.
- **useEffect Hook in Functional Components**: From **React 16.8 onwards**, the `useEffect` hook is used to implement lifecycle-like functionalities in functional components.

## Introduction to useEffect hook

- **useEffect Hook**: The useEffect hook in functional components is used as a substitute for lifecycle methods like `componentDidMount`, `componentDidUpdate`, and `componentWillUnmount` in class components.
- **Callback Function**: The `useEffect` hook takes a callback function as an argument, which can be defined either inside or outside the hook.
- **Automatic Invocation**: The `useEffect` hook is automatically called by React when the component is mounted in the DOM, similar to the `componentDidMount` method.

```
import React, { useState, useEffect } from 'react';

function App() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    // This code runs after the component mounts and after every render
    document.title = `You clicked ${count} times`;
  }, [count]); // Only re-run the effect if count changes

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>
        Click me
      </button>
    </div>
  );
}

export default App;
```
## Using simple useEfect() hook

- **useEffect Hook**: The `useEffect` hook is used to handle side effects in functional components, similar to lifecycle methods in class components.
- **Dependency Array**: The `useEffect` hook takes a second argument called the dependency array, which determines when the effect should be run. If the dependency array is empty, the effect runs only once when the component mounts.
- **Component Re-renders**: Without the dependency array, the `useEffect` hook runs on every re-render of the component. Including dependencies ensures it only runs when those specific values change.
- The useEffect() hoook handles the `componentDidMount()`, `componentDidUpdate()` & the `componentWillUnmount()` methods of component life cycle.

## useEffect(): Cleanup function

- **useEffect Hook**: The useEffect hook is used to handle side effects in functional components, similar to lifecycle methods in class components.
- **Cleanup Function**: The cleanup function in the `useEffect` hook helps to clean up resources or side effects when a component unmounts or before the effect reruns, preventing memory leaks and ensuring smooth application performance.
- **Event Listeners**: The video demonstrates adding and removing event listeners using `window.addEventListener` and `window.removeEventListener` within the useEffect hook to manage side effects efficiently.
```
useEffect(() => {
  // Code to run when the component mounts or updates
  
  return () => {
    // Cleanup code to run when the component unmounts or before the effect runs again
  };
}, [/* dependencies */]);
```
## The right place to call the useEffect() hook

- **useEffect Hook Usage**: The `useEffect` hook should only be called at the top level of your component or custom hooks, not inside loops or conditions.
- **Error Handling**: Attempting to use `useEffect` inside a function, loop, or condition will result in an error.
- **Consistent Order**: React hooks, including `useEffect`, must be called in the exact same order in every component render to avoid errors.  
---
- **useEffect Hook Usage**: The `useEffect` hook should only be used when synchronizing with external systems like APIs or event listeners.
- **Avoid Unnecessary useEffect**: If you don't need to interact with external systems, avoid using the `useEffect` hook to prevent unnecessary re-renders**
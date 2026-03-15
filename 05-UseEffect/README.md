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
---
- **Strict Mode in React**: React's strict mode runs an extra development-only setup plus cleanup cycle before the first real setup to stress test the cleanup logic.
- **useEffect Hook**: The `useEffect` hook runs an extra time in strict mode, which can cause issues if the cleanup function is missing or incomplete.
- **Cleanup Function**: Implementing a cleanup function in the useEffect hook is crucial to ensure that any setup logic is fully undone, preventing issues like memory leaks.
---
- **useEffect Hook**: The useEffect hook in React reruns the effect whenever any dependency changes.
- **Dependency Array**: Including objects or functions defined inside the component in the dependency array can cause the effect to rerun more often than needed.
- **Optimization**: To avoid unnecessary re-renders, remove unnecessary object and function dependencies from the dependency array and extract state updates and non-reactive logic outside of the effect. 
---
- **useEffect Hook**: The useEffect hook runs asynchronously after the DOM has been painted, which can cause visual issues like flickering if the effect modifies the DOM.
- **useLayoutEffect Hook**: The useLayoutEffect hook runs synchronously before the browser repaints the screen, making it suitable for effects that modify the DOM and need to avoid visual issues.
- **Practical Example**: The video demonstrates how replacing useEffect with useLayoutEffect can prevent flickering in a tooltip component by ensuring the effect runs before the screen is repainted. 
---
- **Effect Timing: When an effect is caused by an interaction like a click, React may run the effect before the browser paints the updated screen.
- **Blocking Tasks**: For blocking tasks like alerts, use the setTimeout method to defer the effect until after the browser completes its paint cycle.
- **Practical Example**: The video demonstrates using setTimeout in the useEffect hook to ensure the screen updates before displaying an alert, preventing delays in visual updates. 
---
- **Client-Side Rendering**: The HTML or interface is generated on the browser at runtime.
- **Server-Side Rendering**: The HTML is generated on the server for a specific request or device and then sent to the browser.
- **useEffect Hook**: The `useEffect` hook only runs on the client side because it relies on browser APIs that are not available on the server. 
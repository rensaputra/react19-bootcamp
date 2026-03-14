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

# 14. Working With Custom Hooks

## Introduction to custom hooks

- **Naming Convention**: Custom hooks must start with the prefix use (e.g., `useState`, `useEffect`).
- **Usage Rules**: Hooks should be used at the top level of the code and not inside conditions, loops, or regular functions.
- **Reusability**: Custom hooks allow you to extract and reuse component logic, including built-in hooks, across different components, avoiding prop drilling and complex hierarchies.

```
import { useEffect } from 'react';
// Custom Hook
function usePrintMessage() {
  useEffect(() => {
    console.log('Hello World');
  }, []);
}

// Using the Custom Hook in a Component
function App() {
  usePrintMessage();
  return <div>Check the console for the message.</div>;
}
```

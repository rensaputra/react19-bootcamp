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

So basically custom hooks are a normal JavaScript functions inside which we can call other hooks, it follow certain norms like:

- Names start with the prefix `use`
- Always used at the top level of the code
- Can call other hooks inside them
- Let us extract & reuse stateful logic between components

When to use hooks?

- When we have a logic that use react's built-in hooks & want to make it reusable

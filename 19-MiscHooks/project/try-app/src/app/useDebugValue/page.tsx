"use client";

import { useState, useDebugValue } from "react";

// Custom hook that demonstrates useDebugValue()
function useCounter() {
  const [count, setCount] = useState(0);

  // useDebugValue shows custom label in React DevTools
  useDebugValue(`Count: ${count}`);

  return {
    count,
    increment: () => setCount(count + 1),
  };
}

// Component using the custom hook
export default function Page() {
  const { count, increment } = useCounter();

  return (
    <div style={{ padding: "20px", fontFamily: "Arial" }}>
      <h1>useDebugValue Demo</h1>
      <p>Counter: {count}</p>
      <button
        onClick={increment}
        style={{ padding: "8px 16px", fontSize: "16px" }}
      >
        Increment
      </button>
    </div>
  );
}

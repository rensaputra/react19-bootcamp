"use client";
import { useState } from "react";

const Counter = () => {
  const [count, setCount] = useState(0);

  const handleIncrement = () => {
    setCount((prev) => prev + 1);
  };

  const handleDecrement = () => {
    setCount((prev) => prev - 1);
  };

  return (
    <div style={{ display: "flex" }}>
      <button style={{ width: "4rem" }} onClick={handleDecrement}>
        -
      </button>
      <span style={{ padding: "1rem" }}>{count}</span>
      <button style={{ width: "4rem" }} onClick={handleIncrement}>
        +
      </button>
    </div>
  );
};

export default Counter;

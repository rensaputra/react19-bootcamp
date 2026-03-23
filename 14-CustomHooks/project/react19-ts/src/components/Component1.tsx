import React from "react";
import useCounter from "../hooks/useCounter";

const Component1 = () => {
  const { counter, incrementCounter } = useCounter();
  return (
    <div className="card">
      <h1>Component1</h1>
      <h2>{counter}</h2>
      <button onClick={incrementCounter}>Increment Counter</button>
    </div>
  );
};

export default Component1;

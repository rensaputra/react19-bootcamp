import React from "react";
import useCounter from "../hooks/useCounter";

const Component3 = () => {
  const { counter, incrementCounter } = useCounter();
  return (
    <div className="card">
      <h1>Component3</h1>
      <h2>{counter}</h2>
      <button onClick={incrementCounter}>Increment Counter</button>
    </div>
  );
};

export default Component3;

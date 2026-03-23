import React from "react";
import useTimer from "../hooks/useTimer";
const Component5 = () => {
  const time = useTimer(0, 2);
  return (
    <div className="card">
      <h1>Component5</h1>
      <p>Time: {time}</p>
    </div>
  );
};

export default Component5;

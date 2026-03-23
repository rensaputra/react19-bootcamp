import React from "react";
import useTimer from "../hooks/useTimer";
const Component6 = () => {
  const time = useTimer(0, 5);
  return (
    <div className="card">
      <h1>Component6</h1>
      <p>Time: {time}</p>
    </div>
  );
};

export default Component6;

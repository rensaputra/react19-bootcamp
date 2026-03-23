import React from "react";
import useTimer from "../hooks/useTimer";
const Component4 = () => {
  const time = useTimer(0, 1);
  return (
    <div className="card">
      <h1>Component4</h1>
      <p>Time: {time}</p>
    </div>
  );
};

export default Component4;

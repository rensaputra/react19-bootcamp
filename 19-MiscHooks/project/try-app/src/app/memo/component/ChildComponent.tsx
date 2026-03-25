import React from "react";

const ChildComponent = ({ counter }: { counter: number }) => {
  console.log("ChildComponent rendered");
  return <div>Counter: {counter}</div>;
};

export default React.memo(ChildComponent);

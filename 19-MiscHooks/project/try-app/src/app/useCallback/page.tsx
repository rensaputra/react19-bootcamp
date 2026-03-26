"use client";
"use no memo"; //disable react compiler so I can observe the behavior of useCallback without "Auto-optimizer"

import { useCallback, useState } from "react";
import ChildComponent from "./component/ChildComponent";

export default function Home() {
  const [count, setCount] = useState(0);
  const [toggle, setToggle] = useState(false);

  const handleIncrement = () => {
    setCount(count + 1);
  };

  const handleToggle = useCallback(() => {
    setToggle(!toggle);
  }, [toggle]);

  console.log("Parent component rendered");

  return (
    <div>
      <p>Count: {count}</p>
      <div className="flex gap-2 mt-2">
        <button
          onClick={handleIncrement}
          className="border border-gray-500 px-2 py-1 rounded max-w-fit cursor-pointer"
        >
          Increment
        </button>
      </div>
      <ChildComponent handleToggle={handleToggle} />
    </div>
  );
}

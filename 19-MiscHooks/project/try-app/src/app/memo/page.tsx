"use client";

import { useState } from "react";
import ChildComponent from "./component/ChildComponent";

export default function Home() {
  const [count, setCount] = useState(0);
  const [toggle, setToggle] = useState(false);

  const handleIncrement = () => {
    setCount(count + 1);
  };

  const handleToggle = () => {
    setToggle(!toggle);
  };

  console.log("Parent component rendered");

  return (
    <div>
      <div className="flex gap-2 mt-2">
        <button
          onClick={handleIncrement}
          className="border border-gray-500 px-2 py-1 rounded max-w-fit cursor-pointer"
        >
          Increment
        </button>
        <button
          onClick={handleToggle}
          className="border border-gray-500 px-2 py-1 rounded max-w-fit cursor-pointer"
        >
          Toggle
        </button>
      </div>
      <ChildComponent counter={count} />
    </div>
  );
}

"use client";
"use no memo"; //disable react compiler so I can observe the behavior of useMemo without "Auto-optimizer"
import { useMemo, useState } from "react";

export default function Home() {
  const [count, setCount] = useState(0);
  console.log("Parent component rendered");
  const numbers = [...Array(1000)].map((_, i) => i + 1);

  const total = useMemo(() => {
    return numbers.reduce((acc, curr) => {
      console.log("Sum calculated");
      return acc + curr;
    }, 0);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleIncrement = () => {
    setCount(count + 1);
  };

  return (
    <div>
      <p>{total}</p>
      <button type="button" onClick={handleIncrement}>
        Increment
      </button>
    </div>
  );
}

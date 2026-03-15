import react, { useState, useEffect } from "react";

const Counter = () => {
  const [counter, setCounter] = useState(0);
  const [cursorAxis, setCursorAxis] = useState({ x: 0, y: 0 });

  const handleIncrement = (e: any) => {
    setCursorAxis({ x: e.clientX, y: e.clientY });
    console.log(JSON.stringify(cursorAxis));
  };

  useEffect(() => {
    window.addEventListener("mousemove", handleIncrement);
    return () => {
      console.log(`Component Unmounted, removing event listener`);
      window.removeEventListener("mousemove", handleIncrement);
    };
  }, []);

  return (
    <>
      <h1>{JSON.stringify(cursorAxis)}</h1> <br />
      <button onClick={handleIncrement}>Increment</button>
    </>
  );
};

export default Counter;

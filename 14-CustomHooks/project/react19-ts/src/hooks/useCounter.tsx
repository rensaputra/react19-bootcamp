import { useState } from "react";

const useCounter = (
  initValue: number = 0,
  incrementValue: number = 1,
): {
  counter: number;
  incrementCounter: () => void;
} => {
  const [counter, setCounter] = useState(initValue);

  const incrementCounter = () => {
    setCounter(counter + incrementValue);
  };

  return { counter, incrementCounter };
};

export default useCounter;

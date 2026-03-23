import { useState, useEffect } from "react";

const useTimer = (initialTime: number = 0, increment: number = 1) => {
  const [time, setTime] = useState(initialTime);

  useEffect(() => {
    const timer = setInterval(() => {
      setTime((prevTime) => prevTime + increment);
    }, 1000);

    return () => clearInterval(timer);
  }, [increment]);

  return time;
};

export default useTimer;

import React, { useEffect, useState } from "react";
import "./App.css";
import Counter from "./components/Counter";

function App() {
  const [show, setShow] = useState(true);
  const toggleCounterSection = () => {
    setShow(!show);
  };

  return (
    <div>
      {show && <Counter />}
      <button onClick={toggleCounterSection}>
        {show ? "Hide" : "Show"} Counter
      </button>
    </div>
  );
}

export default App;

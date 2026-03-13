import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";

function App() {
  let [ctr, setCtr] = useState(0);

  const increment = () => {
    setCtr((c) => c + 1);
    setCtr((c) => c + 1);
    setCtr((c) => c + 1);
  };
  return (
    <div className="App">
      <h1>{ctr}</h1>
      <button onClick={increment}>Increment</button>
    </div>
  );
}

export default App;

import React, { useEffect } from "react";
import "./App.css";
import Component1 from "./components/Component1";
import Component2 from "./components/Component2";
import Component3 from "./components/Component3";

//Custom Hooks
function usePrintMessage() {
  useEffect(() => {
    console.log("Hello from custom hook!");
  }, []);
}

function App() {
  return (
    <div className="App">
      <Component1 />
      <Component2 />
      <Component3 />
    </div>
  );
}

export default App;

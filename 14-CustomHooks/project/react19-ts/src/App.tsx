import React, { useEffect } from "react";
import "./App.css";

//Custom Hooks
function usePrintMessage() {
  useEffect(() => {
    console.log("Hello from custom hook!");
  }, []);
}

function App() {
  usePrintMessage();
  return <div></div>;
}

export default App;

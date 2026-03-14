import React, { useEffect } from "react";
import "./App.css";

function App() {
  useEffect(() => {
    console.log("Component mounted");
  });

  return (
    <div>
      <h1>Hello World</h1>
    </div>
  );
}

export default App;

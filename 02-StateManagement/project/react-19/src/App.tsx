import React, { useState } from "react";
import "./App.css";
import Product from "./components/Product";

function createInitialValue() {
  console.log(`Initial state set`);
  return "Hello world";
}

function App() {
  let [ctr, setCtr] = useState(0);
  let [productName, setProductName] = useState("Orange");
  let [show, setShow] = useState(true);
  let [initialValue, setInitialValue] = useState(createInitialValue);
  let [arr, setArr] = useState([1, 2, 3]);
  let [obj, setObj] = useState({ productCode: "0001", productName: "Banana" });

  const increment = () => {
    setCtr((prevCtr) => prevCtr + 1);
    setCtr((prevCtr) => prevCtr + 1);
    setCtr((prevCtr) => prevCtr + 1);
    setArr((prevArr) => [...prevArr, ctr]);
  };

  const decrement = () => {
    setArr((prevArr) => prevArr.slice(0, -1));
  };

  const handleProductNameChange = (name: string) => {
    setProductName(name);
    setObj((prevObj) => ({ ...prevObj, productName: name }));
  };

  return (
    <>
      <button onClick={() => setShow(!show)}>{show ? "Hide" : "Show"}</button>
      <div className="App">
        <h1>{ctr}</h1>
        <button onClick={increment}>Increment</button>
        <button onClick={decrement}>Decrement</button>
      </div>
      {show && (
        <div>
          <h1>{productName}</h1>
          <button onClick={() => handleProductNameChange("Apple")}>
            Apple
          </button>
          <button onClick={() => handleProductNameChange("Orange")}>
            Orange
          </button>
        </div>
      )}
      <div>
        {arr.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </div>
      <div className="App">
        {obj.productCode} <br /> {obj.productName}
      </div>
      <Product />
    </>
  );
}

export default App;

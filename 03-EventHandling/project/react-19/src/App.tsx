import React, { useState } from "react";
import "./App.css";
import EventPropagation from "./components/EventPropagation";

function App() {
  let [data, setData] = useState({
    name: "",
    email: "",
    phoneNumber: NaN,
    isAccepted: false,
    gender: "",
    color: "",
  });

  let [text, setText] = useState("");

  const handleSubmit = (e: any) => {
    e.preventDefault();
    let formattedName =
      data.gender === "Male" ? "Mr " + data.name : "Ms " + data.name;
    setText(
      `${formattedName}, ${data.email}, ${data.phoneNumber}, ${data.isAccepted}, ${data.gender}, ${data.color}  `,
    );
    console.log("Form submitted");
  };

  const handleInputChange = (e: any) => {
    const { name, value } = e.target;
    setData((prev) => ({
      ...prev,
      [name]: name === "phoneNumber" ? Number(value) : value,
    }));
  };

  const handleCheckboxChange = (e: any) => {
    const { name, checked } = e.target;
    setData((prev) => ({ ...prev, [name]: checked }));
  };

  const handleColorChange = (e: any) => {
    const { name, value } = e.target;
    setData((prev) => ({
      ...prev,
      [name]: value,
    }));
    const divForm = document.querySelector("div");
    if (divForm) {
      divForm.style.backgroundColor = value;
    }
  };

  const handleOnFocus = (e: any) => {
    e.target.style = "background-color: lightyellow";
    console.log("Input focused");
  };

  const handleOnBlur = (e: any) => {
    e.target.style = "background-color: white";
    console.log("Input blurred");
  };

  const handleOnKeyUp = (e: any) => {
    console.log("released", e.key);
  };

  const handleOnKeyDown = (e: any) => {
    console.log("pressed", e.key);
  };

  const handleOnMouseEnter = (e: any) => {
    e.target.style = "border: 2px solid black";
  };

  const handleOnMouseLeave = (e: any) => {
    e.target.style = "border: 1px solid black";
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Enter name..."
          value={data.name}
          onChange={handleInputChange}
          onFocus={handleOnFocus}
          onBlur={handleOnBlur}
          onKeyUp={handleOnKeyUp}
          onKeyDown={handleOnKeyDown}
          onMouseEnter={handleOnMouseEnter}
          onMouseLeave={handleOnMouseLeave}
          name="name"
        />
        <br />
        <input
          type="text"
          placeholder="Enter email..."
          value={data.email}
          onChange={handleInputChange}
          name="email"
        />
        <br />
        <input
          type="number"
          value={data.phoneNumber}
          placeholder="0412345678"
          onChange={handleInputChange}
          name="phoneNumber"
        />
        <br />
        <input
          type="radio"
          name="gender"
          onChange={handleInputChange}
          value="Male"
        />
        <label>Male</label>
        <input
          type="radio"
          name="gender"
          onChange={handleInputChange}
          value="Female"
        />
        <label>Female</label>
        <br />
        <input
          type="radio"
          name="color"
          onChange={handleColorChange}
          value="Red"
        />
        <label>Red</label>
        <input
          type="radio"
          name="color"
          onChange={handleColorChange}
          value="Green"
        />
        <label>Green</label>
        <input
          type="radio"
          name="color"
          onChange={handleColorChange}
          value="Blue"
        />
        <label>Blue</label>
        <br />
        <input
          type="checkbox"
          name="isAccepted"
          checked={data.isAccepted}
          onChange={handleCheckboxChange}
        ></input>
        <label>I agree</label>
        <br />
        <button disabled={!data.isAccepted} type="submit">
          Submit
        </button>
      </form>
      <br />
      <h3>{text}</h3>
      <EventPropagation />
    </div>
  );
}

export default App;

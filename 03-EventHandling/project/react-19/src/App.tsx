import React, { useState } from "react";
import "./App.css";
import EventPropagation from "./components/EventPropagation";

function App() {
  let [data, setData] = useState({
    name: "",
    email: "",
    phoneNumber: NaN,
  });

  const handleSubmit = (e: any) => {
    e.preventDefault();
    setData({
      name: data.name,
      email: data.email,
      phoneNumber: data.phoneNumber,
    });
    console.log("Form submitted");
  };

  const handleNameChange = (e: any) => {
    setData({ ...data, name: e.target.value });
  };

  const handleEmailChange = (e: any) => {
    setData({ ...data, email: e.target.value });
  };

  const handlePhoneNumberChange = (e: any) => {
    setData({ ...data, phoneNumber: Number(e.target.value) });
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Enter name..."
          onChange={handleNameChange}
        />
        <br />
        <input
          type="text"
          placeholder="Enter email..."
          onChange={handleEmailChange}
        />
        <br />
        <input
          type="number"
          placeholder="0412345678"
          onChange={handlePhoneNumberChange}
        />
        <br />
        <button type="submit">Submit</button>
      </form>
      <br />
      <h3>{`${data.name}, ${data.email}, ${data.phoneNumber}`}</h3>
      <EventPropagation />
    </div>
  );
}

export default App;

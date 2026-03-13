import React, { useState } from "react";
import "./App.css";
import EventPropagation from "./components/EventPropagation";

function App() {
  let [name, setName] = useState("");
  let [email, setEmail] = useState("");
  let [phoneNumber, setPhoneNumber] = useState();
  let [data, setData] = useState("");

  const handleSubmit = (e: any) => {
    e.preventDefault();
    setData(`${name}, ${email}, ${phoneNumber}`);
    console.log("Form submitted");
  };

  const handleNameChange = (e: any) => {
    setName(e.target.value);
  };

  const handleEmailChange = (e: any) => {
    setEmail(e.target.value);
  };

  const handlePhoneNumberChange = (e: any) => {
    setPhoneNumber(e.target.value);
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
      <h3>{data}</h3>
      <EventPropagation />
    </div>
  );
}

export default App;

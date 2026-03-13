import React from "react";

const EventPropagation = () => {
  const handleDivClick = (e: any) => {
    alert("Div clicked");
  };

  const handleButtonClick = (e: any) => {
    e.stopPropagation();
    console.log(e.isPropagationStopped());
    alert("Button clicked");
  };

  return (
    <div
      onClick={handleDivClick}
      style={{
        padding: "20px",
        border: "1px solid black",
        width: "fit-content",
      }}
    >
      <button onClick={handleButtonClick}>Click me</button>
    </div>
  );
};

export default EventPropagation;

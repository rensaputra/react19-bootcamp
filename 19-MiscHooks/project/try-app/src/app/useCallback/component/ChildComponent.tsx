import React from "react";

const ChildComponent = ({ handleToggle }: { handleToggle: () => void }) => {
  console.log("ChildComponent rendered");
  return (
    <div>
      {" "}
      <button
        onClick={handleToggle}
        className="border border-gray-500 px-2 py-1 rounded max-w-fit cursor-pointer"
      >
        Toggle
      </button>
    </div>
  );
};

export default React.memo(ChildComponent);

import { useContext, useState } from "react";
import { CalculatorContext } from "../store/CalculatorContext";

const InputSection = () => {
  const { inputData, handleInputChange } = useContext(CalculatorContext);

  return (
    <div className="border p-2 rounded-md h-[250px] w-[230px] space-y-3">
      <div className="grid gap-1">
        <label className="text-gray-700 font-medium">First Number:</label>
        <input
          type="number"
          className="border border-gray-200"
          placeholder="Enter first number"
          name="num1"
          value={inputData.num1}
          onChange={handleInputChange}
        />
      </div>
      <div className="grid gap-1">
        <label className="text-gray-700 font-medium">Second Number:</label>
        <input
          type="number"
          className="border border-gray-200"
          placeholder="Enter second number"
          name="num2"
          value={inputData.num2}
          onChange={handleInputChange}
        />
      </div>
    </div>
  );
};

export default InputSection;

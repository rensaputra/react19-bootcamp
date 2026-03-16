import { useContext } from "react";
import { CalculatorContext } from "../store/CalculatorContext";
import { useSelector } from "react-redux";

const InputSection = () => {
  const { inputData, handleInputChange } = useContext(CalculatorContext);

  const theme = useSelector((state: any) => state.theme);

  return (
    <div className="border p-2 rounded-md h-[250px] w-[230px] space-y-3">
      <div className="grid gap-1">
        <label
          className={`text-gray-700 font-medium ${theme === "light" ? "text-black" : "text-white"}`}
        >
          First Number:
        </label>
        <input
          type="number"
          className={`border ${theme === "light" ? "bg-white text-black" : "bg-gray-700 text-white"}`}
          placeholder="Enter first number"
          name="num1"
          value={inputData.num1}
          onChange={handleInputChange}
        />
      </div>
      <div className="grid gap-1">
        <label
          className={`text-gray-700 font-medium ${theme === "light" ? "text-black" : "text-white"}`}
        >
          Second Number:
        </label>
        <input
          type="number"
          className={`border ${theme === "light" ? "bg-white text-black" : "bg-gray-700 text-white"}`}
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

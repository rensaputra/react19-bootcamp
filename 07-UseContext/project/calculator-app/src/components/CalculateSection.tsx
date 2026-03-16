import { useContext } from "react";
import { CalculatorContext } from "../store/CalculatorContext";

const CalculateSection = () => {
  const {
    calculateAddition,
    calculateSubtraction,
    calculateMultiplication,
    calculateDivision,
  } = useContext(CalculatorContext);

  return (
    <div className="border p-5 rounded-md h-[250px] w-[230px] grid gap-3">
      <button
        type="button"
        className="border rounded-md p-2 bg-blue-500 text-white"
        onClick={calculateAddition}
      >
        Add
      </button>
      <button
        type="button"
        className="border rounded-md p-2 bg-blue-500 text-white"
        onClick={calculateSubtraction}
      >
        Subtract
      </button>
      <button
        type="button"
        className="border rounded-md p-2 bg-blue-500 text-white"
        onClick={calculateMultiplication}
      >
        Multiply
      </button>
      <button
        type="button"
        className="border rounded-md p-2 bg-blue-500 text-white"
        onClick={calculateDivision}
      >
        Divide
      </button>
    </div>
  );
};

export default CalculateSection;

import { useContext } from "react";
import { CalculatorContext } from "../store/CalculatorContext";

const ResultSection = () => {
  const { result } = useContext(CalculatorContext);
  return (
    <div className="border p-5 rounded-md h-[250px] w-[230px]">
      <h2 className="text-3xl font-semibold text-gray-700">Result: {result}</h2>
    </div>
  );
};

export default ResultSection;

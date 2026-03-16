import { useContext } from "react";
import { CalculatorContext } from "../store/CalculatorContext";
import { useSelector } from "react-redux";

const ResultSection = () => {
  const { result } = useContext(CalculatorContext);
  const theme = useSelector((state: any) => state.theme);

  return (
    <div
      className={`border p-5 rounded-md h-[250px] w-[230px] ${theme === "light" ? "text-black" : "text-white"}`}
    >
      <h2
        className={`text-3xl font-semibold ${theme === "light" ? "text-black" : "text-white"}`}
      >
        Result: {result}
      </h2>
    </div>
  );
};

export default ResultSection;

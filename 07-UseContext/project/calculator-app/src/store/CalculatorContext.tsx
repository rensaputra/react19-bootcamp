import { createContext, useState } from "react";
import { CalculatorContextProviderProps, InputData } from "../type";

export const CalculatorContext = createContext({
  inputData: { num1: 0, num2: 0 },
  handleInputChange: (e: any) => {},
  calculateAddition: () => {},
  calculateSubtraction: () => {},
  calculateMultiplication: () => {},
  calculateDivision: () => {},
  result: 0,
});

const CalculatorContextProvider = ({
  children,
}: CalculatorContextProviderProps) => {
  const [inputData, setInputData] = useState<InputData>({
    num1: 0,
    num2: 0,
  });

  const [result, setResult] = useState(0);

  const handleInputChange = (e: any) => {
    setInputData((prev) => ({
      ...prev,
      [e.target.name]: parseFloat(e.target.value),
    }));
  };

  const calculateAddition = () => {
    setResult(inputData.num1 + inputData.num2);
  };

  const calculateSubtraction = () => {
    setResult(inputData.num1 - inputData.num2);
  };

  const calculateMultiplication = () => {
    setResult(inputData.num1 * inputData.num2);
  };

  const calculateDivision = () => {
    setResult(inputData.num1 / inputData.num2);
  };

  return (
    <CalculatorContext.Provider
      value={{
        inputData,
        handleInputChange,
        calculateAddition,
        calculateSubtraction,
        calculateMultiplication,
        calculateDivision,
        result,
      }}
    >
      {children}
    </CalculatorContext.Provider>
  );
};

export default CalculatorContextProvider;

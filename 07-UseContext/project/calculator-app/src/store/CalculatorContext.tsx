import { createContext, JSX } from "react";

export const CalculatorContext = createContext("");

type CalculatorContextProviderProps = {
  children: JSX.Element;
};

const CalculatorContextProvider = ({
  children,
}: CalculatorContextProviderProps) => {
  let str = "Hello World";
  return (
    <CalculatorContext.Provider value={str}>
      {children}
    </CalculatorContext.Provider>
  );
};

export default CalculatorContextProvider;

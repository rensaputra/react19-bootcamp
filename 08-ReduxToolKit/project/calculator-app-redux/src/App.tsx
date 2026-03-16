import React, { useContext } from "react";
import "./App.css";
import InputSection from "./components/InputSection";
import CalculateSection from "./components/CalculateSection";
import ResultSection from "./components/ResultSection";
import { ThemeContext } from "./store/ThemeContext";
import { useSelector } from "react-redux";

function App() {
  const theme = useSelector((state: any) => state.theme);
  const { toggleTheme } = useContext(ThemeContext);
  return (
    <div
      className={`${theme === "light" ? "bg-gray-100 text-black" : "bg-black text-white"}`}
    >
      <button
        type="button"
        className="bg-blue-500 text-white px-3 py-1 rounded-md m-4"
        onClick={toggleTheme}
      >
        Switch to {theme === "light" ? "dark" : "light"} theme
      </button>
      <div className="grid grid-cols-3 gap-6 p-5">
        <InputSection />
        <CalculateSection />
        <ResultSection />
      </div>
    </div>
  );
}

export default App;

import {
  calculateAddition,
  calculateSubtraction,
  calculateDivision,
  calculateMultiplication,
} from "../store/calculatorSlice";
import { useDispatch } from "react-redux";
const CalculateSection = () => {
  const dispatch = useDispatch();

  return (
    <div className="border p-5 rounded-md h-[250px] w-[230px] grid gap-3">
      <button
        type="button"
        className="border rounded-md p-2 bg-blue-500 text-white"
        onClick={() => dispatch(calculateAddition())}
      >
        Add
      </button>
      <button
        type="button"
        className="border rounded-md p-2 bg-blue-500 text-white"
        onClick={() => dispatch(calculateSubtraction())}
      >
        Subtract
      </button>
      <button
        type="button"
        className="border rounded-md p-2 bg-blue-500 text-white"
        onClick={() => dispatch(calculateMultiplication())}
      >
        Multiply
      </button>
      <button
        type="button"
        className="border rounded-md p-2 bg-blue-500 text-white"
        onClick={() => dispatch(calculateDivision())}
      >
        Divide
      </button>
    </div>
  );
};

export default CalculateSection;

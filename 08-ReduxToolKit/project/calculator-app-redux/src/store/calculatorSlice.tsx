import { createSlice } from "@reduxjs/toolkit";

const calculatorSlice = createSlice({
  name: "calculator",
  initialState: {
    inputData: {
      num1: 0,
      num2: 0,
    },
    result: 0,
  },
  reducers: {
    handleInputChange: (state, action) => {
      const { name, value } = action.payload;
      state.inputData[name as keyof typeof state.inputData] = parseFloat(value);
      return state;
    },
    calculateAddition: (state) => {
      const { num1, num2 } = state.inputData;
      state.result = Number(num1) + Number(num2);
      return state;
    },
    calculateSubtraction: (state) => {
      const { num1, num2 } = state.inputData;
      state.result = Number(num1) - Number(num2);
      return state;
    },
    calculateMultiplication: (state) => {
      const { num1, num2 } = state.inputData;
      state.result = Number(num1) * Number(num2);
      return state;
    },
    calculateDivision: (state) => {
      const { num1, num2 } = state.inputData;
      state.result = Number(num1) / Number(num2);
      return state;
    },
  },
});

export const {
  handleInputChange,
  calculateAddition,
  calculateSubtraction,
  calculateMultiplication,
  calculateDivision,
} = calculatorSlice.actions;
export default calculatorSlice.reducer;

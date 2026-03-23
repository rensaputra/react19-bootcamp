import { createSlice } from "@reduxjs/toolkit";
import { ProductState } from "../types";

const initialState: ProductState = {
  products: [],
};
const productSlice = createSlice({
  name: "Products",
  initialState,
  reducers: {
    setProducts: (state, action) => {
      state.products = action.payload;
      return state;
    },
  },
});

export const { setProducts } = productSlice.actions;
export default productSlice.reducer;

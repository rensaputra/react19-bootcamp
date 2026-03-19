import { createSlice } from "@reduxjs/toolkit";
import { ProductState } from "../types";

const initialState: ProductState = {
  products: [],
};
const productSlice = createSlice({
  name: "Products",
  initialState,
  reducers: {},
});

export default productSlice.reducer;

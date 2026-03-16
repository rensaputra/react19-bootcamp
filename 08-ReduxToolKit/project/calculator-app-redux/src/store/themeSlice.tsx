import { createSlice } from "@reduxjs/toolkit";

export const themeSlice = createSlice({
  name: "theme",
  initialState: "dark",
  reducers: {},
});

export default themeSlice.reducer;

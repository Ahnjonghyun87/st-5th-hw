import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  texts: localStorage.getItem("texts")
    ? JSON.parse(localStorage.getItem("texts"))
    : [],
};

const textsSlice = createSlice({
  name: "texts",
  initialState,
  reducers: {
    onAddTexts: (state, action) => {
      state.texts.push(action.payload);
    },
  },
});

export const { onAddTexts } = textsSlice.actions;
export default textsSlice.reducer;

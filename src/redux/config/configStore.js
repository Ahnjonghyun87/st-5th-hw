import { configureStore } from "@reduxjs/toolkit";
import textsSlices from "../slices/textsSlices";

const store = configureStore({
  reducer: {
    texts: textsSlices,
  },
});

export default store;

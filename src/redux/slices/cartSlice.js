import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cart: [],
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addCartItem: (state, action) => {
      state.cart.push(action.payload);
    },
    // 우리가 dispatch를 할때 인자값으로 넘겨준 것 (id)이 action.payload로 넘어간다.
    deleteCartItem: (state, action) => {
      // 카트 데이터를 갈아끼운다. 왜냐 불변성 안지켜도 되어서 그냥 갈아껴도 쌉가눙
      const result = state.cart.filter((cart) => cart.id !== action.payload);
      state.cart = result;
    },
  },
});

export const { deleteCartItem, addCartItem } = cartSlice.actions;
export default cartSlice.reducer;

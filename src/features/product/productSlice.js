import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  products: localStorage.getItem("products")
    ? JSON.parse(localStorage.getItem("products"))
    : [],
};

export const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const item = state.products.find(
        (product) => product.id === action.payload.id
      );

      if (item) {
        item.quantity += action.payload.quantity;
      } else {
        state.products.push(action.payload);
      }

      localStorage.setItem("products", JSON.stringify(state.products));
    },

    removeItem: (state, action) => {
      state.products = state.products.filter(
        (product) => product.id !== action.payload
      );

      localStorage.setItem("products", JSON.stringify(state.products));
    },

    clearCart: (state) => {
      state.products = [];

      localStorage.setItem("products", JSON.stringify(state.products));
    },
  },
});

export const { addToCart, removeItem, clearCart } = productSlice.actions;

export default productSlice.reducer;

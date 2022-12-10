import { createSlice } from "@reduxjs/toolkit";
import { toast } from "react-hot-toast";

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
        toast.success("Quantity increased");
      } else {
        state.products.push(action.payload);
        toast.success("Product added");
      }

      localStorage.setItem("products", JSON.stringify(state.products));
    },

    removeItem: (state, action) => {
      state.products = state.products.filter(
        (product) => product.id !== action.payload
      );

      toast.error("Item removed");

      localStorage.setItem("products", JSON.stringify(state.products));
    },

    clearCart: (state) => {
      state.products = [];

      toast.error("Cart cleared");

      localStorage.setItem("products", JSON.stringify(state.products));
    },
  },
});

export const { addToCart, removeItem, clearCart } = productSlice.actions;

export default productSlice.reducer;

import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./cartSlice";
import { apiSlice } from "./apiSlice";

const store = configureStore({
  reducer: {
    cart: cartReducer,
    [apiSlice.reducerPath]: apiSlice.reducer
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(apiSlice.middleware)
});

export default store;

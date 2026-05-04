import { configureStore } from "@reduxjs/toolkit";
import { createEpicMiddleware } from "redux-observable";
import productReducer from "@/lib/redux/products/productSlice";
import cartReducer from "@/lib/redux/cart/cartSlice"
import { rootEpic } from "./epics/rootEpic";

const epicMiddleware = createEpicMiddleware<any,any,any>();

export const store = configureStore({
  reducer: {
    products: productReducer,
    cart: cartReducer
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(epicMiddleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

epicMiddleware.run(rootEpic);
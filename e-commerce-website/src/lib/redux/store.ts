import { configureStore } from "@reduxjs/toolkit";
import { createEpicMiddleware } from "redux-observable";
import productReducer from "@/lib/redux/products/productSice"
import { rootEpic } from "./epics/rootEpic";

const epicMiddleware = createEpicMiddleware<any,any,any>();

export const store = configureStore({
  reducer: {
    products: productReducer
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(epicMiddleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

epicMiddleware.run(rootEpic);
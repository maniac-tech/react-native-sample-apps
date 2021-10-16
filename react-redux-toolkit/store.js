import { configureStore } from "@reduxjs/toolkit";
import simpleCounterReducer from "./slices/counterSlice";

export default store = configureStore({
  reducer: {
    counter: simpleCounterReducer,
  },
});

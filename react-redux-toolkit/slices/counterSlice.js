import { createSlice } from "@reduxjs/toolkit";

const counterSlice = createSlice({
  name: "counterSlice",
  initialState: {
    amount: 0,
  },
  reducers: {
    decrement: (state, { payload }) => {
      state.amount = payload;
    },
    increment: (state, { payload }) => {
      state.amount = payload;
    },
    setCounter: (state, { payload }) => {
      state.amount = payload;
    },
  },
});

export const { decrement, increment, setCounter } = counterSlice.actions;
export default counterSlice.reducer;

export const getCounterValue = (state) => state.counter.amount;

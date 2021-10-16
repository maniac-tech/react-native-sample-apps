import { CHANGE_BY_AMOUNT, DECREMENT, INCREMENT } from "./actionTypes";

export const changeByAmount = (val) => ({
  type: CHANGE_BY_AMOUNT,
  payload: val,
});

export const decrementAction = () => ({
  type: DECREMENT,
});

export const incrementAction = () => ({
  type: INCREMENT,
});

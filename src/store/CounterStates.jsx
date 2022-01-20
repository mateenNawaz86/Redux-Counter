import { createSlice } from "@reduxjs/toolkit";

// initial state for counter
const initialCounter = { counter: 0, showCounter: true };

// createSlice alternative of counterReducer
const counterSlice = createSlice({
  name: "counter",
  initialState: initialCounter,
  reducers: {
    increment(state) {
      state.counter++;
    },
    decrement(state) {
      state.counter--;
    },
    increase(state, action) {
      state.counter = state.counter + action.payload;
    },

    toggleCounter(state) {
      state.showCounter = !state.showCounter;
    },
  },
});

// create actions like this when we are working with redux toolkit
export const counterActions = counterSlice.actions;

export default counterSlice.reducer;

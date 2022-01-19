import { createSlice, configureStore } from "@reduxjs/toolkit";

// initial state for counter
const initialState = { counter: 0, showCounter: true };

// createSlice alternative of counterReducer
const sliceCounter = createSlice({
  name: "counter",
  initialState,
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

// create a reducer counter function
// const counterReducer = (state = initialState, action) => {
//   switch (action.type) {
//     case "INCREAMENT":
//       return {
//         counter: state.counter + 1,
//         showCounter: state.showCounter,
//       };

//     case "INCREASE":
//       return {
//         counter: state.counter + action.payload,
//         showCounter: state.showCounter,
//       };

//     case "DECREAMENT":
//       return {
//         counter: state.counter - 1,
//         showCounter: state.showCounter,
//       };

//     case "TOGGLE":
//       return {
//         showCounter: !state.showCounter,
//         counter: state.counter,
//       };

//     default:
//       return state;
//   }
// };

// create store

const store = configureStore({
  reducer: sliceCounter.reducer,
});

// create actions like this when we are working with redux toolkit
export const counterActions = sliceCounter.actions;

export default store;

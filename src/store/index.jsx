import { createStore } from "redux";

// initial state for counter
const initialState = { counter: 0, showCounter: true };

// create a reducer counter function
const counterReducer = (state = initialState, action) => {
  switch (action.type) {
    case "INCREAMENT":
      return {
        counter: state.counter + 1,
        showCounter: state.showCounter,
      };

    case "INCREASE":
      return {
        counter: state.counter + action.payload,
        showCounter: state.showCounter,
      };

    case "DECREAMENT":
      return {
        counter: state.counter - 1,
        showCounter: state.showCounter,
      };

    case "TOGGLE":
      return {
        showCounter: !state.showCounter,
        counter: state.counter,
      };

    default:
      return state;
  }
};

// create store
const store = createStore(counterReducer);

export default store;

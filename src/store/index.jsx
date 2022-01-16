import { createStore } from "redux";

// create a reducer counter function
const counterReducer = (state = { counter: 1 }, action) => {
  switch (action.type) {
    case "INCREAMENT":
      return {
        counter: state.counter + 1,
      };
    case "DECREAMENT":
      return {
        counter: state.counter - 1,
      };

    default:
      return state;
  }
};

// create store
const store = createStore(counterReducer);

export default store;

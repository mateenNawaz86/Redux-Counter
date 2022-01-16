import { createStore } from "redux";

// create a reducer counter function
const counterReducer = (state = { counter: 0 }, action) => {
  switch (action.type) {
    case "INCREAMENT":
      return {
        counter: state.counter + 1,
      };

    case "INCREASE":
      return {
        counter: state.counter + action.payload,
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

import { configureStore } from "@reduxjs/toolkit";
import counterSlice from "./CounterStates";
import authenticateSlice from "./AuthStates";

// slices store
const store = configureStore({
  reducer: {
    counter: counterSlice,
    authenticate: authenticateSlice,
  },
});

export default store;

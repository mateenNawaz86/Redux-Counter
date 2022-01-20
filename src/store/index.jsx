import { createSlice, configureStore } from "@reduxjs/toolkit";

// initial state for counter
const initialCounter = { counter: 0, showCounter: true };

// createSlice alternative of counterReducer
const sliceCounter = createSlice({
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

// initial State for authentication
const initialAuthentication = { isAuth: false };

// create slice for authentication
const authenticateSlice = createSlice({
  name: "authenticate",
  initialState: initialAuthentication,
  reducers: {
    login(state) {
      state.isAuth = true;
    },
    logOut(state) {
      state.isAuth = false;
    },
  },
});

// slices store
const store = configureStore({
  reducer: {
    counter: sliceCounter.reducer,
    authenticate: authenticateSlice.reducer,
  },
});

// create actions like this when we are working with redux toolkit
export const counterActions = sliceCounter.actions;

// create actions for authentication
export const authActions = authenticateSlice.actions;

export default store;

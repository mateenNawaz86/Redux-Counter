import { createSlice } from "@reduxjs/toolkit";

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

// create actions for authentication
export const authActions = authenticateSlice.actions;

export default authenticateSlice.reducer;

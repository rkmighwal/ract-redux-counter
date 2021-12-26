import { createSlice } from "@reduxjs/toolkit";

const INITIAL_AUTH_STATE = { isAuthenticated: false };

const authSlice = createSlice({
  name: "auth",
  initialState: INITIAL_AUTH_STATE,
  reducers: {
    login(state) {
      state.isAuthenticated = true;
    },
    logout(state) {
      state.isAuthenticated = false;
    },
  },
});

export default authSlice.reducer;
export const authActions = authSlice.actions;

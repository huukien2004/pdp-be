import { PayloadAction, createSelector } from "@reduxjs/toolkit";
import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../store";
// Define the initial state using that type
const initialState = {
  accessToken: "",
  isAuthentication: false,
};

export const authSlice = createSlice({
  name: "auth",
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    handleLogin: (state, action: PayloadAction<string>) => {
      state.accessToken = action.payload;
      state.isAuthentication = true;
    },
  },
});

// Other code such as selectors can use the imported `RootState` type
export const isAuthenticationSelector = createSelector(
  (state: RootState) => state.auth,
  (state) => state.isAuthentication
);

export default authSlice;

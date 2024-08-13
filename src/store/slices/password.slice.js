import { createSlice } from "@reduxjs/toolkit";

const password = createSlice({
  name: "password",
  initialState: "",
  reducers: {
    setPassword: (state, action) => action.payload,
  },
});

export const { setPassword } = password.actions;

export default password.reducer;

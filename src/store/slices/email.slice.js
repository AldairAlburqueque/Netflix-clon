import { createSlice } from "@reduxjs/toolkit";

const emailSlice = createSlice({
  name: "email",
  initialState: "",
  reducers: {
    setName: (state, action) => action.payload,
  },
});

export const { setName } = emailSlice.actions;

export default emailSlice.reducer;

import { configureStore } from "@reduxjs/toolkit";
import authEmail from "./slices/email.slice";
import authPassword from "./slices/password.slice";

export default configureStore({
  reducer: {
    authEmail,
    authPassword,
  },
});

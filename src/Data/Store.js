import { configureStore } from "@reduxjs/toolkit";
import AuthSlice from "./AuthSlice.js";

export const store = configureStore({ reducer: { outNav: AuthSlice } });

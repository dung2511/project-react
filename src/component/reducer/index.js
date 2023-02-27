import { configureStore } from "@reduxjs/toolkit";
import { Context } from "../reducer/cartReducer";

export const store = configureStore(Context);

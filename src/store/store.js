import { configureStore } from "@reduxjs/toolkit";
import callReducer from "../slices/callSlice";

export const store=configureStore({
    reducer:{
        call:callReducer
    }
});

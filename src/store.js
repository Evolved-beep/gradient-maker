import { configureStore } from "@reduxjs/toolkit";
import Gradient from "./features/gradient"

export const store = configureStore({
    reducer: {
        Gradient
    }
})
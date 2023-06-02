import { configureStore } from "@reduxjs/toolkit";
import SavedReducer from "./SavedReducer";

export const store = configureStore({
  reducer: {
    booking: SavedReducer,
  },
});

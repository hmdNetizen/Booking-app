import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  bookings: [],
};

const savedSlice = createSlice({
  name: "bookings",
  initialState,
  reducers: {
    savePlaces: (state, action) => {
      state.bookings.push({ ...action.payload });
    },
  },
});

export const { savePlaces } = savedSlice.actions;
export default savedSlice.reducer;

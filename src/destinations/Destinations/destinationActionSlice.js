import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  destinations: [],
  isDestLoad: false,
  isDestError: false,
};

const destinationActionSlice = createSlice({
  name: "destinations",
  initialState,
  reducers: {
    fetchingDestData: (state) => {
      state.isDestLoad = true;
    },
    fetchedDestData: (state, action) => {
      state.isDestLoad = false;
      state.destinations = action.payload;
    },
    fetchingDestError: (state, action) => {
      state.isDestLoad = true;
      state.isDestError = action.payload;
    },
  },
});

export const { fetchingDestData, fetchedDestData, fetchDestError } =
  destinationActionSlice.actions;
export default destinationActionSlice.reducer;

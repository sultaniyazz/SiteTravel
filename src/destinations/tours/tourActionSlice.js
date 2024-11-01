import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  tours: [],
  isTourLoad: false,
  isTourError: false,
};

const tourActionSlice = createSlice({
  name: "tours",
  initialState,
  reducers: {
    fetchingTourData: (state) => {
      state.isTourLoad = true;
    },
    fetchedTourData: (state, action) => {
      state.isTourLoad = false;
      state.tours = action.payload;
    },
    fetchingTourError: (state, action) => {
      state.isTourLoad = true;
      state.isTourError = action.payload;
    },
  },
});

export const { fetchingTourData, fetchedTourData, fetchTourError } =
  tourActionSlice.actions;
export default tourActionSlice.reducer;

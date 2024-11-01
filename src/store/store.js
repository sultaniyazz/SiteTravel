import { configureStore } from "@reduxjs/toolkit";
import homeActionSlice from "../destinations/home/homeActionSlice";
import destinationActionSlice from "../destinations/Destinations/destinationActionSlice";
import tourActionSlice from "../destinations/tours/tourActionSlice";
import pageActionSlice from "../destinations/pageActionSlice";

export const store = configureStore({
  reducer: {
    homeActionSlice,
    destinationActionSlice,
    tourActionSlice,
    pageActionSlice,
  },
});

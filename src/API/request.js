import axios from "axios";
import {
  fetchDestError,
  fetchedDestData,
  fetchingDestData,
} from "../destinations/Destinations/destinationActionSlice";
import {
  fetchedTourData,
  fetchingTourData,
  fetchTourError,
} from "../destinations/tours/tourActionSlice";

export const getAllDestData = (url) => {
  return async (dispatch) => {
    dispatch(fetchingDestData());
    try {
      const res = await axios.get(url);
      dispatch(fetchedDestData(res.data));
    } catch (err) {
      dispatch(fetchDestError(err.message));
    }
  };
};

export const getAllTourData = (url) => {
  return async (dispatch) => {
    dispatch(fetchingTourData());
    try {
      const res = await axios.get(url);
      dispatch(fetchedTourData(res.data));
    } catch (err) {
      dispatch(fetchTourError(err.message));
    }
  };
};

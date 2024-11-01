import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  mode: false,
  showSideBar: false,
};

const pageActionSlice = createSlice({
  name: "page",
  initialState,
  reducers: {
    darkMode: (state) => {
      state.mode = !state.mode;
    },
    modal: (state) => {
      state.showSideBar = !state.showSideBar;
    },
  },
});

export const { darkMode, modal } = pageActionSlice.actions;
export default pageActionSlice.reducer;

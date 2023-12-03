import { createSlice } from "@reduxjs/toolkit";

export const navSlice = createSlice({
  name: "nav",
  initialState: {
    currentSection: 3,
    currentSubSection: 1,
  },

  reducers: {
    setSection: (state, action) => {
      state.currentSection = action.payload;
    },
    setSubSection: (state, action) => {
      state.currentSubSection = action.payload;
    },
  },
});

export const { setSection, setSubSection } = navSlice.actions;

export default navSlice.reducer;

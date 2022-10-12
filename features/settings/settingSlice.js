import { createSlice } from "@reduxjs/toolkit";

export const settingSlice = createSlice({
  name: "setting",
  initialState: {
    background: {
      backgroundColor: "#fff",
    },
    bar: {
      position: "bottom-0",
      color: "black",
    },
  },

  reducers: {
    changeBackgroundColor: (state, action) => {
      state.background.backgroundColor = action.payload;
    },

    changeBarPosition: (state, action) => {
      state.bar.position = action.payload;
    },

    changeBarColor: (state, action) => {
      state.bar.color = action.payload;
    },
  },
});

export const { changeBackgroundColor, changeBarPosition, changeBarColor } =
  settingSlice.actions;

export default settingSlice.reducer;

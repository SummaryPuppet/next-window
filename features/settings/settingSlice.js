import { createSlice } from "@reduxjs/toolkit";

export const settingSlice = createSlice({
  name: "setting",
  initialState: {
    backgroundColor: "#fff",
  },

  reducers: {
    changeBackgroundColor: (state, action) => {
      state.backgroundColor = action.payload;
    },
  },
});

export const { changeBackgroundColor } = settingSlice.actions;

export default settingSlice.reducer;

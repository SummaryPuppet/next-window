import { createSlice } from "@reduxjs/toolkit";

export const windowSlice = createSlice({
  name: "window",
  initialState: {
    status: "",
    entities: [],
  },
  reducers: {
    addWindow: (state, action) => {
      state.entities.push(action.payload);
    },
    delWindow: (state, action) => {
      const i = state.entities.findIndex((entity) => entity == action.payload);
      if (i == -1) {
        state.entities.splice(i, 1);
      }
    },
  },
});

export const { addWindow, delWindow } = windowSlice.actions;

export default windowSlice.reducer;

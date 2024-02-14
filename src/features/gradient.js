import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  colors: [
    {
      id: 1,
      value: "#00d2ff",
      position: 20,
    },
    {
      id: 2,
      value: "#ee9ca7",
      position: 50,
    },
  ],
  pickColorID: 1,
  angle: 60,
};

export const gradientSlice = createSlice({
  name: "gradient",
  initialState,
  reducers: {
    updateColorValue: (state, action) => {
      const currentColor = state.colors.find(
        (color) => color.id === action.payload.id
      );
      currentColor.value = action.payload.value;
    },

    addColor: (state, action) => {
      if (state.colors.length === 5) return;

      state.colors.push({
        id: state.colors[state.colors.length - 1].id + 1,
        value: "#111111",
        position: 50,
      });
    },

    removeColor: (state, action) => {
      if (state.colors.length === 2) return;
      state.colors.pop();
    },
  },
});

export const { updateColorValue, addColor, removeColor } =
  gradientSlice.actions;
export default gradientSlice.reducer;

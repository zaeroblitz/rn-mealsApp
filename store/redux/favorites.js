import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  ids: [],
};

const favoritesSlice = createSlice({
  name: "favoriteMeals",
  initialState,
  reducers: {
    addFavorite: (state, action) => {
      state.ids.push(action.payload.id);
    },
    removeFavorite: (state, action) => {
      state.ids.splice(state.ids.indexOf(action.payload.id), 1);
    },
  },
});

export default favoritesSlice.reducer;
export const { addFavorite, removeFavorite } = favoritesSlice.actions;

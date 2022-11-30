import { gamesReducer } from "./features/games/games.slice";
import { configureStore } from "@reduxjs/toolkit";

const store = configureStore({
  reducer: {
    games: gamesReducer,
  },
});

export default store;

import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
  data: [],
  currentPage: 0,
  filter: [],
  loading: true,
};

const LISTING_SIZE = 21;

export const loadGames = createAsyncThunk("games", async (args, thunkApi) => {
  const options = {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": "32d7466644msh1ba77a4a5aa20dcp1f19acjsn88597a664ac3",
      "X-RapidAPI-Host": "free-to-play-games-database.p.rapidapi.com",
    },
  };

  const res = await fetch(
    `https://free-to-play-games-database.p.rapidapi.com/api/games?${args}`,
    options
  );

  const rawData = await res.json();

  const data = await rawData.map((game) => ({
    ...game,
    platform: game.platform.replace(", ", ",").split(","),
  }));

  return data;
});

const gamesSlice = createSlice({
  name: "games",
  initialState,
  reducers: {
    pageScrolled: (state, action) => {
      return { ...state, currentPage: state.currentPage + 1 };
    },
  },
  extraReducers: (builder) => {
    builder.addCase(loadGames.fulfilled, (state, action) => {
      return {
        ...state,
        data: action.payload,
      };
    });
  },
});

export const { pageScrolled } = gamesSlice.actions;
export const gamesReducer = gamesSlice.reducer;
export const selectAllGames = (state) => state.games.data;

export const selectGamesList = (state) => {
  const games = state.games.data;

  const gamesByPage = games.slice(
    0,
    state.games.currentPage * 9 + LISTING_SIZE
  );

  return {
    games: gamesByPage,
    currentSize: state.games.currentSize,
    pageScrolled,
    loading: state.loading,
  };
};

import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
  data: [],
  currentPage: 0,
  filter: [],
  di
};

const PAGE_SIZE = 9;

export const loadGames = createAsyncThunk("games", async (args, thunkApi) => {
  const options = {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": "32d7466644msh1ba77a4a5aa20dcp1f19acjsn88597a664ac3",
      "X-RapidAPI-Host": "free-to-play-games-database.p.rapidapi.com",
    },
  };

  const res = await fetch(
    "https://free-to-play-games-database.p.rapidapi.com/api/games",
    options
  );

  const data = await res.json();

  return data;
});

const gamesSlice = createSlice({
  name: "games",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(loadGames.fulfilled, (state, action) => {
      return {
        ...state,
        data: action.payload,
      };
    });
  },
});

export const gamesReducer = gamesSlice.reducer;
export const selectAllGames = (state) => state.games.data;

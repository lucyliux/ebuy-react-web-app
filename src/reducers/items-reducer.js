import { createSlice } from "@reduxjs/toolkit";
import { findRecentListingsThunk, findRecentLikesThunk, findItemsByKeywordThunk, findAllListingsThunk, findAllLikesThunk } from "../services/items/items-thunks";

const itemsSlice = createSlice({
  name: "items",
  initialState: {
    recentListings: [],
    recentLikes: [],
    allListings: [],
    allLikes: [],
    searchResult: [],
    loading: false,
    newItems: [],
  },
  extraReducers: {
    [findRecentLikesThunk.fulfilled]: (state, action) => {
      state.recentLikes = action.payload;
      state.loading = false;
    },
    [findRecentLikesThunk.pending]: (state, action) => {
      state.loading = true;
    },
    [findRecentListingsThunk.fulfilled]: (state, action) => {
      state.recentListings = action.payload;
      state.loading = false;
    },
    [findRecentListingsThunk.pending]: (state, action) => {
      state.loading = true;
    },
    [findAllLikesThunk.fulfilled]: (state, action) => {
      state.allLikes = action.payload;
      state.loading = false;
    },
    [findAllLikesThunk.pending]: (state, action) => {
      state.loading = true;
    },
    [findAllListingsThunk.fulfilled]: (state, action) => {
      state.allListings = action.payload;
      state.loading = false;
    },
    [findAllListingsThunk.pending]: (state, action) => {
      state.loading = true;
    },
    [findItemsByKeywordThunk.fulfilled]: (state, action) => {
      state.searchResult = action.payload;
    },
  },
});

export default itemsSlice.reducer;

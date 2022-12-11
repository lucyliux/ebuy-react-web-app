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
  },
  extraReducers: {
    [findRecentLikesThunk.fulfilled]: (state, action) => {
      state.recentLikes = action.payload;
      console.log(action.payload);
    },
    [findRecentListingsThunk.fulfilled]: (state, action) => {
      state.recentListings = action.payload;
    },
    [findAllLikesThunk.fulfilled]: (state, action) => {
      state.allLikes = action.payload;
    },
    [findAllListingsThunk.fulfilled]: (state, action) => {
      state.allListings = action.payload;
    },
    // remote api
    [findItemsByKeywordThunk.fulfilled]: (state, action) => {
      state.searchResult = action.payload;
    },
  },
});

export default itemsSlice.reducer;

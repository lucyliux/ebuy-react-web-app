import { createSlice } from "@reduxjs/toolkit";
import { findRecentListingsThunk, findRecentLikesThunk, findItemsByKeywordThunk, findAllListingsThunk, findAllLikesThunk, getRecentRemoteItemsThunk, getAllRemoteItemsThunk } from "../services/items/items-thunks";

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
    newItemsLoading: false,
    noMoreResults: false,
    currentSearch: "",
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
      if (action.payload.length === state.searchResult.length) {
        state.noMoreResults = true;
      }
      state.currentSearch = action.meta.arg;
      state.searchResult = action.payload;
      state.loading = false;
    },
    [findItemsByKeywordThunk.pending]: (state, action) => {
      if (action.meta.arg.num === 20) {
        state.loading = true;
      }
    },
    [getRecentRemoteItemsThunk.fulfilled]: (state, action) => {
      state.newItems = action.payload;
      state.newItemsLoading = false;
    },
    [getRecentRemoteItemsThunk.pending]: (state, action) => {
      state.newItemsLoading = true;
    },
    [getAllRemoteItemsThunk.fulfilled]: (state, action) => {
      if (action.payload.length === state.allListings.length) {
        state.noMoreResults = true;
      } else {
        state.noMoreResults = false;
      }
      state.allListings = action.payload;
      state.loading = false;
    },
    [getAllRemoteItemsThunk.pending]: (state, action) => {
      if (action.meta.arg === 20) {
        state.loading = true;
      }
    },
  },
});

export default itemsSlice.reducer;

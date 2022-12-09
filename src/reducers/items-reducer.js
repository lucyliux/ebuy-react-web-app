import { createSlice } from "@reduxjs/toolkit";
import { createItemThunk, findRecentListingsThunk, findRecentLikesThunk } from "../services/items/items-thunks";

const itemsSlice = createSlice({
  name: "items",
  initialState: {
    recentListings: [],
    recentLikes: []
  },
  extraReducers: {
    [findRecentLikesThunk.fulfilled]:
      (state, action) => {
        state.recentLikes = action.payload;
        console.log("payload")
        console.log(action.payload)
      },
    [findRecentListingsThunk.fulfilled]:
      (state, action) => {
        state.recentListings = action.payload;
        console.log("payload")
        console.log(action.payload)
      },
  }
});

export default itemsSlice.reducer;

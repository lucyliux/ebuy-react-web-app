import { createSlice } from "@reduxjs/toolkit";
import { createItemThunk, findRecentItemsThunk } from "../services/items/items-thunks";

const itemsSlice = createSlice({
  name: "items",
  initialState: {
    recentListings: [],
    recentLikes: []
  },
  extraReducers: {
    [findRecentItemsThunk.fulfilled]:
      (state, action) => {
        state.recentListings = action.payload;
        console.log("payload")
        console.log(action.payload)
      },
  }
});

export default itemsSlice.reducer;

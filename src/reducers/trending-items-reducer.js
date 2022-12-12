import { createSlice } from "@reduxjs/toolkit";

const trendingItemsSlice = createSlice({
  name: "trendingItems",
  initialState: [],
});

export default trendingItemsSlice.reducer;

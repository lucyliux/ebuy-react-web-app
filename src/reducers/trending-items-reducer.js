import { createSlice } from "@reduxjs/toolkit";
import trendingItems from "../data/trending-items.json";

const trendingItemsSlice = createSlice({
  name: "trendingItems",
  initialState: trendingItems,
});

export default trendingItemsSlice.reducer;

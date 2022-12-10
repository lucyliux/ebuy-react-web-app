import { createSlice } from "@reduxjs/toolkit";
import { createItemThunk, findRecentListingsThunk, findRecentLikesThunk, findRemoteItemsByKeywordThunk } from "../services/items/items-thunks";

const itemsSlice = createSlice({
  name: "items",
  initialState: {
    recentListings: [],
    recentLikes: [],
    searchResult: [],
    currentSearch: null,
    currentItem: null,
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
    
    // remote api
    [findRemoteItemsByKeywordThunk.fulfilled]:
      (state, action) => {
        // state.searchResult = action.payload;
        const searchResult = action.payload;
        const items = [];
        searchResult.forEach(result => {
          items.push(
            {
              id: result.goods_id,
              name: result.goods_name,
              // date: Date,
              condition: "NEW",
              price: Number(result.salePrice.amount),
              image: result.goods_img,
              description: result.goods_name,
              sellerName: "SHEIN",
            }
          );
        });

        console.log("payload")
        console.log(items)
        console.log(action.payload)
        state.searchResult = items;
    }
  }
});

export default itemsSlice.reducer;

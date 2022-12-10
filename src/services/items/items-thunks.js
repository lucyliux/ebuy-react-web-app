import { createAsyncThunk } from "@reduxjs/toolkit";
import * as service from "./items-service";

export const createItemThunk = createAsyncThunk(
    "createItem",
    async (item) => await service.createItem(item)
);

export const findRecentLikesThunk = createAsyncThunk(
  "findRecentLikes",
  async (itemIds) => await service.findRecentLikes(itemIds)
);

export const findRecentListingsThunk = createAsyncThunk(
  "findRecentListings",
  async (itemIds) => await service.findRecentListings(itemIds)
);

/////////////////////////////// eBay API /////////////////////////////////
const EBAY_BROWSE_API = "https://api.ebay.com/buy/browse/v1/item_summary/search?q=drone&limit=3";
export const findRemoteItemsByKeywordThunk = createAsyncThunk(
  "findRemoteItemsByKeyword",
  async (keyword) => await service.findRemoteItemsByKeyword(keyword)
);
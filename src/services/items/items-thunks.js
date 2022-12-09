import { createAsyncThunk } from "@reduxjs/toolkit";
import * as service from "./items-service";

export const createItemThunk = createAsyncThunk(
    "createItem",
    async (item) => await service.createItem(item)
);

export const findRecentItemsThunk = createAsyncThunk(
  "findRecentItems",
  async (itemIds) => await service.findRecentItems(itemIds)
);
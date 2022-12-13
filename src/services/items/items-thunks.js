import { createAsyncThunk } from "@reduxjs/toolkit";
import * as service from "./items-service";

export const createItemThunk = createAsyncThunk("createItem", async (item) => await service.createItem(item));

export const findRecentLikesThunk = createAsyncThunk("findRecentLikes", async (itemIds) => {
  if (itemIds === "") {
    return [];
  }
  let recentLikes = itemIds;
  let remoteLikes = await service.findRecentRemoteLikes(recentLikes);
  remoteLikes = remoteLikes.filter((like) => like.name !== undefined);
  remoteLikes.forEach((item) => {
    recentLikes = recentLikes.replace(item._id + ",", "");
  });
  const mongoLikes = await service.findRecentMongoLikes(recentLikes);
  if (remoteLikes === null || remoteLikes === "" || remoteLikes[0].name === undefined || remoteLikes.length === 0) {
    if (mongoLikes === null || Object.keys(mongoLikes).length === 0 || mongoLikes[0].name === undefined) {
      return null;
    } else {
      return mongoLikes;
    }
  } else {
    if (mongoLikes === null || Object.keys(mongoLikes).length === 0 || mongoLikes[0].name === undefined) {
      return remoteLikes;
    } else {
      return remoteLikes.concat(mongoLikes);
    }
  }
});

export const findRecentListingsThunk = createAsyncThunk("findRecentListings", async (itemIds) => {
  if (itemIds === "") {
    return [];
  }
  return await service.findRecentListings(itemIds);
});

export const findAllListingsThunk = createAsyncThunk("findAllListings", async (itemIds) => await service.findAllListings(itemIds));

export const findAllLikesThunk = createAsyncThunk("findAllLikes", async (itemIds) => {
  let allLikes = itemIds;
  const remoteLikes = await service.findAllRemoteLikes(allLikes);
  remoteLikes.forEach((item) => {
    allLikes = allLikes.replace(item._id + ",", "");
  });
  const mongoLikes = await service.findAllMongoLikes(allLikes);
  return remoteLikes.concat(mongoLikes);
});

export const findItemsByKeywordThunk = createAsyncThunk("findRemoteItemsByKeyword", async ({ keyword, num }) => {
  const remoteResult = await service.findRemoteItemsByKeyword({ keyword: keyword, num: num });
  const mongoResult = await service.findMongoItemsByKeyword({ keyword: keyword, num: num });
  return mongoResult.concat(remoteResult);
});

export const uploadImageThunk = createAsyncThunk("uploadImage", async (image) => await service.uploadImage(image));

export const getRecentRemoteItemsThunk = createAsyncThunk("getRecentRemoteItems", async () => await service.getRecentRemoteItems());

export const getAllRemoteItemsThunk = createAsyncThunk("getAllRemoteItems", async (num) => await service.getAllRemoteItems(num));

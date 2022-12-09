import { createAsyncThunk } from "@reduxjs/toolkit";
import * as service from "./sessions-service";

// export const findUserByIdThunk = createAsyncThunk(
//     "users/findUserById",
//     async () => await service.findBuyerById()
// );

export const getSessionAllThunk = createAsyncThunk(
    "getSessionAll",
    async () => await service.getSessionAll()
);
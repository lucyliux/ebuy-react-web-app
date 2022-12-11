import { createAsyncThunk } from "@reduxjs/toolkit";
import * as service from "./users-service";
import { useNavigate } from "react-router-dom";

export const signupThunk = createAsyncThunk("signup", async (user) => await service.signup(user));

export const loginThunk = createAsyncThunk("login", async (cred) => await service.login(cred));

export const profileThunk = createAsyncThunk("profile", async () => await service.profile());

export const logoutThunk = createAsyncThunk("logout", async (user) => await service.logout(user));

export const updateThunk = createAsyncThunk("update", async (user) => await service.update(user));

export const findUserByNameThunk = createAsyncThunk("findUserByName", async (username) => await service.findUserByName(username));

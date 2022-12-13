import { createSlice } from "@reduxjs/toolkit";
import { loginThunk, logoutThunk, profileThunk, signupThunk, updateThunk } from "../services/users/users-thunks";

const usersSlice = createSlice({
  name: "users",
  initialState: {
    allUsers: [],
    loading: false,
    currentUser: null,
  },
  extraReducers: {
    [signupThunk.fulfilled]: (state, action) => {
      state.currentUser = action.payload;
    },
    [signupThunk.rejected]: (state, action) => {
      alert("Username already exists");
    },
    [loginThunk.fulfilled]: (state, action) => {
      state.currentUser = action.payload;
    },
    [loginThunk.rejected]: (state, action) => {
      alert("Incorrect username or password");
    },
    [profileThunk.fulfilled]: (state, action) => {
      state.currentUser = action.payload;
    },
    [logoutThunk.fulfilled]: (state, action) => {
      state.currentUser = null;
    },
    [updateThunk.fulfilled]: (state, action) => {
      const updated = action.payload;
      if (updated.username === state.currentUser.username) {
        state.currentUser = action.payload;
      }
    },
  },
});

export default usersSlice.reducer;

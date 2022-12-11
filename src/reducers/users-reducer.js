import { createSlice } from "@reduxjs/toolkit";
import { loginThunk, logoutThunk, profileThunk, signupThunk, updateThunk } from "../services/users/users-thunks";

const usersSlice = createSlice({
  name: "users",
  initialState: {
    allUsers: [],
    loading: false,
    currentUser: null,
    // publicProfile: null,
  },
  extraReducers: {
    [signupThunk.fulfilled]: (state, action) => {
      state.currentUser = action.payload;
      state.allUsers.push(action.payload);
    },
    [loginThunk.fulfilled]: (state, action) => {
      state.currentUser = action.payload;
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
    // [findUserByNameThunk.fulfilled]: (state, action) => {
    //   console.log("find user")
    //   console.log(action.payload);
    //   state.publicProfile = action.payload;
    // },
  },
});

export default usersSlice.reducer;

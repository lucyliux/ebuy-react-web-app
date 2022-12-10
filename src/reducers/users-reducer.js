import { createSlice } from "@reduxjs/toolkit";
import { loginThunk, logoutThunk, profileThunk, signupThunk, updateThunk } from "../services/users/users-thunks"

const usersSlice = createSlice({
  name: "users",
  initialState: {
    allUsers: [],
    loading: false,
    currentUser: null,
    publicProfile: null
  },
  extraReducers: {
    [signupThunk.fulfilled]:
      (state, action) => {
        state.currentUser = action.payload;
        console.log("payload")
        console.log(state.currentUser)
        console.log(action);
        state.allUsers.push(action.payload);
      },
    [loginThunk.fulfilled]:
      (state, action) => {
        state.currentUser = action.payload;
        // state.users.push(action.payload);
        console.log(state.allUsers);
        // console.log("payload")
        console.log(action);
        console.log(action.payload)
      },
    [profileThunk.fulfilled]:
      (state, action) => {
        state.currentUser = action.payload;
        // console.log("payload")
        // console.log(state.currentUser)
      },
    [logoutThunk.fulfilled]:
      (state, action) => {
        state.currentUser = null;
        // state.currentUser = action.payload;
        // console.log("payload")
        // console.log(state.currentUser)
      },
    [updateThunk.fulfilled]:
      (state, action) => {
        state.currentUser = action.payload;
        console.log("payload")
        console.log(action.payload)
      },
  }
});

export default usersSlice.reducer;

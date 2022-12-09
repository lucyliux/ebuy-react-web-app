import { createSlice } from "@reduxjs/toolkit";
// import user from "../data/user.json";
import { loginThunk, logoutThunk, profileThunk, signupThunk, updateThunk } from "../services/users/users-thunks"
import { useDispatch } from "react-redux";
// import { getSessionAllThunk } from "../services/sessions/sessions-thunks";

const usersSlice = createSlice({
  name: "users",
  initialState: {
    users: [],
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
      },
    [loginThunk.fulfilled]:
      (state, action) => {
        state.currentUser = action.payload;
        // console.log("payload")
        // console.log(state.currentUser)
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

import { createSlice } from "@reduxjs/toolkit";
// import user from "../data/user.json";
import { getSessionAllThunk } from "../services/sessions/sessions-thunks";

const sessionsSlice = createSlice({
  name: "session",
  initialState: {
    currentSession: null,
  },
  extraReducers: {
    [getSessionAllThunk.fulfilled]:
      (state, action) => {
        state.currentSession = action.payload;
        console.log("session payload")
        console.log(state.currentSession)
      },
  }
});

export default sessionsSlice.reducer;

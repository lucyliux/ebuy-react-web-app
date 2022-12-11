import { createSlice } from "@reduxjs/toolkit";
import { findReviewsBySellerThunk } from "../services/reviews/reviews-thunk";

const reviewsSlice = createSlice({
  name: "reviews",
  initialState: {
    allReviews: []
  },
  extraReducers: {
    [findReviewsBySellerThunk.fulfilled]:
      (state, action) => {
        state.allReviews = action.payload;
    }
  }
});

export default reviewsSlice.reducer;

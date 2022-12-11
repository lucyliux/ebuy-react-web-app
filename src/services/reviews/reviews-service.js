import axios from 'axios';
const REVIEWS_API = 'http://localhost:4000/api/reviews'
const BASE_URL = "http://localhost:4000/api";

const api = axios.create({
   withCredentials: true
});

export const createReview = async (review) => {
  const response = await api.post(`${REVIEWS_API}/create`, review);
  return response.data;
}

export const findReviewsBySeller = async (sellerName) => {
  const response = await api.post(`${REVIEWS_API}/findReviewsBySeller`, {sellerName: sellerName});
  return response.data;
}
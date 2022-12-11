import axios from "axios";
import { API_BASE } from "../api";
const REVIEWS_API = `${API_BASE}/reviews`;

const api = axios.create({
  withCredentials: true,
});

export const createReview = async (review) => {
  const response = await api.post(`${REVIEWS_API}/create`, review);
  return response.data;
};

export const findReviewsBySeller = async (sellerName) => {
  const response = await api.post(`${REVIEWS_API}/findReviewsBySeller`, { sellerName: sellerName });
  return response.data;
};

import axios from 'axios';
const BASE_URL = "http://localhost:4000/api";
const ITEMS_API = `${BASE_URL}/items`;

const api = axios.create({
   withCredentials: true
});

export const createItem = async (item) => {
  const response = await api.post(`${ITEMS_API}/create`, item);
  return response.data;
}

export const findRecentLikes = async (itemIds) => {
  const response = await api.post(`${ITEMS_API}/findRecentItems`, {itemIds: itemIds});
  return response.data;
}

export const findRecentListings = async (itemIds) => {
  const response = await api.post(`${ITEMS_API}/findRecentItems`, {itemIds: itemIds});
  return response.data;
}
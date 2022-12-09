import axios from 'axios';
const BASE_URL = "http://localhost:4000/api";
const SESSION_API = `${BASE_URL}/session`;

const api = axios.create({
   withCredentials: true
});

export const getSessionAll = async () => {
  const response = await api.get(`${SESSION_API}/get`);
  return response.data;
}

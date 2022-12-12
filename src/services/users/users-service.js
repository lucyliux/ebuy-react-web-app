import axios from "axios";
import { API_BASE } from "../api";
const USER_API_URL = `${API_BASE}/users`;
const SECURITY_API = `${API_BASE}/auth`;

const api = axios.create({
  withCredentials: true,
});

export const signup = async (user) => {
  const response = await api.post(`${SECURITY_API}/signup`, user)
    // .catch((err) => alert("Username already exists"));

  return response.data;
};

export const login = async (user) => {
  const response = await api.post(`${SECURITY_API}/login`, user);
  return response.data;
};

export const logout = async (user) => api.post(`${SECURITY_API}/logout`, user).then((response) => response.data);

export const profile = async () => api.post(`${SECURITY_API}/profile`).then((response) => response.data);

export const update = async (user) => api.put(USER_API_URL, user).then((response) => response.data);

export const findUserByName = async (username) => api.get(`${USER_API_URL}/${username}`).then((response) => response.data);
// export const findUserByUsername = async (username) => {
//   const response = await axios.get(USERS_API + "/" + username);
//   const buyer = response.data;
//   return buyer;
// }

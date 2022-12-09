import axios from 'axios';
const USER_API_URL = 'http://localhost:4000/users'
const BASE_URL = "http://localhost:4000/api";
const SECURITY_API = `${BASE_URL}/auth`;

const api = axios.create({
   withCredentials: true
});

export const signup = async (user) => {
  const response = await api.post(`${SECURITY_API}/signup`, user);
  //   .catch((err) => {
  //   console.log(err.response.data);
  //   console.log(err.response.status);
  //   alert("username already exists");
  // });
  // if (response.status === 200) {
  //   alert("Success!")
  // }
  return response.data;
}

export const login = async (user) => {
   const response = await api.post(`${SECURITY_API}/login`, user)
   return response.data;
}

export const logout = async (user) =>
   api.post(`${SECURITY_API}/logout`, user)
       .then(response => response.data);

export const profile = async () =>
   api.post(`${SECURITY_API}/profile`)
       .then(response => response.data);






export const update = async (user) =>
   api.put(USER_API_URL, user)
      .then(response => response.data);
// export const findUserByUsername = async (username) => {
//   const response = await axios.get(USERS_API + "/" + username);
//   const buyer = response.data;
//   return buyer;
// }

// api.js
import axios from "axios";

const api = axios.create({
  baseURL: "http://13.213.208.92:7080/ecssms/api/",
  // baseURL: "https://hrisasia.com/ecssms/api/",
});

// // Add a request interceptor
// api.interceptors.request.use(
//   function (config) {
//     // Get token from localStorage or wherever you store it after login
//     const token = localStorage.getItem("token");

//     // If token exists, add it to the Authorization header
//     if (token) {
//       config.headers.Authorization = `Bearer ${token}`;
//     }

//     return config;
//   },
//   function (error) {
//     // Do something with request error
//     return Promise.reject(error);
//   }
// );

export default api;

import axios from "axios";

const api = axios.create({
  baseURL: "http://203.194.115.210:8008/api/", 
});

api.interceptors.request.use((config) => {
  const token = localStorage.getItem("token") || sessionStorage.getItem("token");
  if (token) config.headers.Authorization = `Bearer ${token}`;
  return config;
});

export default api;
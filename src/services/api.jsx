import axios from "axios";

const api = axios.create({
  baseURL: "/api/", // proxy Vercel
});

api.interceptors.request.use((config) => {
  const token = localStorage.getItem("token") || sessionStorage.getItem("token");
  if (token) config.headers.Authorization = `Bearer ${token}`;
  return config;
});

export default api;
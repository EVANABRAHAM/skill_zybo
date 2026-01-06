import axios from "axios";

const api = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_BASE_URL,
  headers: { "Content-Type": "application/json" },
  withCredentials: true,
});

api.interceptors.request.use((config) => {
  // Read token from cookies instead of localStorage
  const match = document.cookie.match(new RegExp('(^| )access_token=([^;]+)'));
  const token = match ? match[2] : null;

  if (token) config.headers.Authorization = `Bearer ${token}`;
  return config;
});

export default api;

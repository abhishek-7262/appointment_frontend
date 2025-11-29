import axios from "axios";
import { showSnackbar } from "./snackbar";

const baseURL = import.meta.env.VITE_API_BASE_URL;

const axiosInstance = axios.create({
  baseURL,
  headers: { "Content-Type": "application/json" },
});

// ✅ Request interceptor (for token only)
axiosInstance.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("authToken");
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// ✅ Response interceptor (this catches 400, 401, 403, 404, 500, etc)
axiosInstance.interceptors.response.use(
  (response) => response,

  (error) => {
    const message =
      error.response?.data?.message ||
      error.response?.data?.error ||
      error.response?.statusText ||
      error.message;

    showSnackbar(message, "error");

    return Promise.reject(error);
  }
);

export default axiosInstance;

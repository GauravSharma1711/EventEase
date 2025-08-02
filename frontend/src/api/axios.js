import axios from 'axios';

const API_URL = import.meta.env.MODE === "development"
  ? import.meta.env.VITE_API_URL || "http://localhost:8000/api/v1"
  : "/api/v1";

const axiosInstance = axios.create({
  baseURL: API_URL,
  withCredentials: true,
  timeout: 10000
});

export default axiosInstance;

// src/utils/axios.js
import axios from "axios";

const API = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL, // gets value from .env
  withCredentials: true, // for cookies/session
});

export default API;

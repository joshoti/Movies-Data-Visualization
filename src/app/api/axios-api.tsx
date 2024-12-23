import axios from "axios";

export const api = axios.create({
  baseURL: process.env.REACT_APP_BACKEND_URL,
  headers: {
    "Content-Type": "application/json",
    "ngrok-skip-browser-warning": "true",
  },
});

export const localApi = axios.create({
  baseURL: `http://127.0.0.1:5000`, // Python backend default port
  headers: {
    "Content-Type": "application/json",
  },
});

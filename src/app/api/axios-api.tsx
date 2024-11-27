import axios from "axios";

/* Would otherwise use dotenv or vite to import environment 
variables eg. import.meta.env.VITE_BASE_URL */

export const api = axios.create({
  baseURL: `http://127.0.0.1:5000`, // Python backend default port
  headers: {
    "Content-Type": "application/json",
  },
});

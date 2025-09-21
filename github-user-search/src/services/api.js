import axios from "axios";

const apiKey = import.meta.env.VITE_APP_GITHUB_API_KEY;

const api = axios.create({
  baseURL: "https://api.github.com",
  headers: apiKey
    ? { Authorization: `token ${apiKey}` }
    : {}
});

export default api;

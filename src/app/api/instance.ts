import axios from "axios";

const baseURL = "http://localhost:8080";
const timeout = 180 * 1000;
export const getToken = () => localStorage.getItem("@Token:User") || "";

export const instance = axios.create({ baseURL, timeout });

instance.interceptors.request.use((config) => {
  const token = getToken();

  if (token) {
    config.headers!.Authorization = `Bearer ${token}`;
  }

  return config;
});

export default instance;

import axios, { AxiosInstance } from "axios";
import { useAppStore } from "@/app/store/app";

const NASA_BASE_URL = "https://api.nasa.gov/";
const service: AxiosInstance = axios.create({
  baseURL: NASA_BASE_URL,
  timeout: 120 * 1000,
});

service.interceptors.request.use(
  (config) => {
    config.params.api_key = process.env.API_KEY;

    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

service.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    const store = useAppStore();
    const notify = store.notify;

    notify({ message: error.message, variant: "error" });

    return Promise.reject(error);
  }
);

export default service;

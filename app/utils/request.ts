import axios, { AxiosInstance } from "axios";

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
    return Promise.reject(error);
  }
);

export default service;

import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: 'http://localhost:5000/api',
  timeout: 10000
})

axiosInstance.interceptors.request.use((config) => {
  return config;
})

axiosInstance.interceptors.response.use((res) => {
  return res.data;
}, (err) => {
  return Promise.reject(err);
})

export default axiosInstance;
import axios from 'axios';
// const baseURL = import.meta.env.VITE_BASE_URL;

const axiosInstance = axios.create({
  baseURL: 'http://localhost:8000',
  headers: {
    'Content-Type': 'application/json',
    // Add other default headers if needed
  }
});

// Add request interceptor
axiosInstance.interceptors.request.use(config => {
  // Modify the request config here if needed
  console.log('Request:', config);
  return config;
}, error => {
  return Promise.reject(error);
});

// Add response interceptor
axiosInstance.interceptors.response.use(response => {
  // Modify the response here if needed
  console.log('Response:', response);
  return response;
}, error => {
  return Promise.reject(error);
});

export default axiosInstance;
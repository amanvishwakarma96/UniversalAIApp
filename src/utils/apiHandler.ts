import axios from 'axios';

const API = axios.create({
    baseURL: 'https://api.yourdomain.com/v1',
    timeout: 10000,
});

API.interceptors.request.use(
    async (config) => {
        // Add auth token if available
        const token = ''; // fetch from secure storage
        if (token) {
            config.headers.Authorization = `Bearer ${token}`;
        }
        return config;
    },
    (error) => Promise.reject(error)
);

API.interceptors.response.use(
    (response) => response,
    (error) => {
        console.error('API Error:', error.response || error.message);
        return Promise.reject(error);
    }
);

export default API;

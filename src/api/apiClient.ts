// src/api/apiClient.ts
import axios from 'axios';
import { StorageService } from '../services/StorageService';
import { API_BASE_URL } from '../config/env';

const api = axios.create({
    baseURL: API_BASE_URL,
    timeout: 15000,
});

api.interceptors.request.use(async (config) => {
    const token = await StorageService.get('access_token');
    if (token && config.headers) {
        config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
});

api.interceptors.response.use(
    (res) => res,
    (err) => {
        // global error handling: token refresh, logging, etc.
        if (err.response?.status === 401) {
            // optionally attempt refresh token flow here
        }
        return Promise.reject(err);
    },
);

export default api;

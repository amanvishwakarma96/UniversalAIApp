// src/config/env.ts
const ENV = 'development';

const CONFIG = {
    development: {
        API_BASE_URL: 'https://dev-api.example.com/api',
    },
    staging: {
        API_BASE_URL: 'https://staging-api.example.com/api',
    },
    production: {
        API_BASE_URL: 'https://prod-api.example.com/api',
    },
};

export const { API_BASE_URL } = CONFIG[ENV];

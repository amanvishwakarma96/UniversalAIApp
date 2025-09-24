// src/services/AuthService.ts
import api from '../api/apiClient';
import { StorageService } from './StorageService';

class AuthServiceClass {
    private static instance: AuthServiceClass;

    private constructor() { }

    static getInstance() {
        if (!AuthServiceClass.instance) {
            AuthServiceClass.instance = new AuthServiceClass();
        }
        return AuthServiceClass.instance;
    }

    async login(email: string, password: string) {
        const res = await api.post('/auth/login', { email, password });
        const { accessToken, refreshToken, user } = res.data;
        await StorageService.set('access_token', accessToken);
        await StorageService.set('refresh_token', refreshToken);
        await StorageService.set('user', user);
        return user;
    }

    async logout() {
        await StorageService.remove('access_token');
        await StorageService.remove('refresh_token');
        await StorageService.remove('user');
        // optionally call API logout
    }

    async getCurrentUser() {
        return StorageService.get('user');
    }
}

export const AuthService = AuthServiceClass.getInstance();

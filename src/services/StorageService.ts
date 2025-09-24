// src/services/StorageService.ts
import AsyncStorage from '@react-native-async-storage/async-storage';

export const StorageService = {
    async set(key: string, value: any) {
        await AsyncStorage.setItem(key, JSON.stringify(value));
    },
    async get<T = any>(key: string): Promise<T | null> {
        const v = await AsyncStorage.getItem(key);
        return v ? JSON.parse(v) : null;
    },
    async remove(key: string) {
        await AsyncStorage.removeItem(key);
    },
};

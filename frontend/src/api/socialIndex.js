import axios from 'axios';
import { getUserToken } from '../util/auth';
import { userStorage } from '../util/userStorage';
import { getToken } from './auth';

export const socialInstance = axios.create({
    baseURL: 'https://jintakim.shop/',
});

socialInstance.interceptors.request.use(
    (config) => {
        const token = getUserToken();
        config.headers.Authorization = `Bearer ${token}`;
        return config;
    },
    (error) => {
        return Promise.reject(error);
    },
);

socialInstance.interceptors.response.use(async (response) => {
    const { config } = response;
    if (response?.data?.errors?.[0]?.message === 'Unauthorized') {
        const originalRequest = config;

        try {
            const {
                data: {
                    data: { restoreAccessToken: newAccessToken },
                },
            } = await getToken();

            userStorage.set(newAccessToken);
            axios.defaults.headers.common.Authorization = `Bearer ${newAccessToken}`;
            originalRequest.headers.Authorization = `Bearer ${newAccessToken}`;
            return axios(originalRequest);
        } catch (error) {
            //
        }
    }
    return response;
});

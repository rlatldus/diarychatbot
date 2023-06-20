import axios from 'axios';
import { getUserToken, isAccessTokenExpired } from '../util/auth';
import { userStorage } from '../util/userStorage';
import { redirect } from 'react-router-dom';
import { getToken, logout } from './auth';

export const instance = axios.create({
    baseURL: 'https://jintakim.shop/graphql',
});

instance.interceptors.request.use(
    (config) => {
        const token = getUserToken();
        config.headers.Authorization = `Bearer ${token}`;
        return config;
    },
    (error) => {
        return Promise.reject(error);
    },
);

instance.interceptors.response.use(
    (response) => {
        return response;
    },
    async (error) => {
        const { config } = error;
        if (error.status === 401 && isAccessTokenExpired()) {
            console.log('확인1');
            const originalRequest = config;
            try {
                console.log('확인2');
                const {
                    data: {
                        data: { restoreAccessToken: newAccessToken },
                    },
                } = await getToken();

                userStorage.set(newAccessToken);

                axios.defaults.headers.common.Authorization = `Bearer ${newAccessToken}`;
                originalRequest.headers.Authorization = `Bearer ${newAccessToken}`;
                return axios(originalRequest);
            } catch {
                console.log('확인3');
                userStorage.remove();
                await logout();
                redirect('/');
            }
        }

        throw new Error(error);
    },
);

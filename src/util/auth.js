import { redirect } from 'react-router-dom';
import { userStorage } from './userStorage';
import jwtDecode from 'jwt-decode';

export const getUserToken = () => {
    const userToken = userStorage.get();
    if (!userToken) return null;

    return userToken;
};

export const isAccessTokenExpired = () => {
    const userToken = userStorage.get();
    if (!userToken) {
        return null;
    }
    const { exp } = jwtDecode(userToken);
    const currentTime = Date.now() / 1000;
    return exp < currentTime;
};

export const checkAuthLoader = async () => {
    const userToken = userStorage.get();

    if (!userToken) return redirect('/');

    return null;
};

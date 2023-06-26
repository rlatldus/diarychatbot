import { redirect } from 'react-router-dom';
import { userStorage } from './userStorage';

export const getUserToken = () => {
    const userToken = userStorage.get();
    if (!userToken) return null;

    return userToken;
};

export const checkAuthLoader = async () => {
    const userToken = userStorage.get();

    if (!userToken) return redirect('/');

    return null;
};

import { useMutation } from '@tanstack/react-query';
import { toast } from 'react-hot-toast';
import { socialLogin } from '../../api/socialAuth';
import { userStorage } from '../../util/userStorage';
import { getUser } from '../../api/user';

export const useSocialSignIn = (setIsLoading, navigate) => {
    return useMutation(socialLogin, {
        onSuccess: async (response) => {
            console.log(response);
        },
        onError: () => {
            toast.error('로그인에 실패하였습니다.');
        },
        onSettled: () => {
            setIsLoading(false);
        },
    });
};

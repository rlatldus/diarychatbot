import { useMutation } from '@tanstack/react-query';
import { toast } from 'react-hot-toast';
import { signIn } from '../../api/auth';
import { userStorage } from '../../util/userStorage';
import { getUser } from '../../api/user';

export const useSignIn = (setIsLoading, reset, navigate) => {
    return useMutation(signIn, {
        onSuccess: async (response) => {
            userStorage.set(response.data.data.login);

            const {
                data: {
                    data: {
                        fetchUser: { id, name },
                    },
                },
            } = await getUser();

            toast.success(`${name}님 로그인에 성공했습니다.`);
            navigate(`/main/${id}`, { replace: true });
            reset();
        },
        onError: () => {
            toast.error('로그인에 실패하였습니다.');
        },
        onSettled: () => {
            setIsLoading(false);
        },
    });
};

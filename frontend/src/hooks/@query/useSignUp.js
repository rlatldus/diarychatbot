import { useMutation } from '@tanstack/react-query';
import { signUp } from '../../api/auth';
import { toast } from 'react-hot-toast';

export const useSignUp = (setIsLoading, reset, navigate) => {
    return useMutation(signUp, {
        onSuccess: () => {
            reset();
            toast.success('회원가입에 성공했습니다.');
            navigate('/', { replace: true });
        },
        onError: () => {
            toast.error('회원가입에 실패했습니다.');
        },
        onSettled: () => {
            setIsLoading(false);
        },
    });
};

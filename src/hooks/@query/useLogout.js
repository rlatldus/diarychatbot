import { useMutation } from '@tanstack/react-query';
import { logout } from '../../api/auth';
import { toast } from 'react-hot-toast';
import { userStorage } from '../../util/userStorage';

export const useLogout = (navigate) => {
    return useMutation(logout, {
        onSuccess: () => {
            toast.success('로그아웃에 성공했습니다.');
            navigate('/', { replace: true });
            userStorage.remove();
        },
        onError: () => {
            toast.error('로그아웃에 실패했습니다.');
        },
    });
};

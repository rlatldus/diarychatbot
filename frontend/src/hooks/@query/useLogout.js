import { useMutation } from '@tanstack/react-query';
import { logout } from '../../api/auth';
import { toast } from 'react-hot-toast';
import { userStorage } from '../../util/userStorage';

export const useLogout = (navigate) => {
    return useMutation(logout, {
        onSuccess: (response) => {
            if (response?.data?.errors) {
                return toast.error(`${response.data.errors[0].message}`);
            }
            toast.success('로그아웃에 성공했습니다.');
            navigate('/', { replace: true });
            userStorage.remove();
        },
        onError: () => {
            toast.error('로그아웃에 실패했습니다.');
        },
    });
};

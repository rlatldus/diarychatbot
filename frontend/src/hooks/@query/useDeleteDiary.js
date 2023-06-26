import { useMutation } from '@tanstack/react-query';
import { toast } from 'react-hot-toast';
import { deleteMyDiary } from '../../api/diary';

export const useDeleteDiary = (setIsLoading, navigate, userId) => {
    return useMutation(deleteMyDiary, {
        onSuccess: () => {
            toast.success('일기가 삭제 되었습니다.');
            navigate(`/main/${userId}`, { replace: true });
        },
        onError: () => {
            toast.error('일기 삭제에 실패했습니다.');
        },
        onSettled: () => {
            setIsLoading(false);
        },
    });
};

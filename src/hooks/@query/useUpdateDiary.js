import { useMutation } from '@tanstack/react-query';
import { updateMyDiary } from '../../api/auth';
import { toast } from 'react-hot-toast';

export const useUpdateDiary = (setIsLoading) => {
    return useMutation(updateMyDiary, {
        onSuccess: () => {
            toast.success('일기가 수정 되었습니다.');
        },
        onError: () => {
            toast.error('일기 수정이 실패했습니다.');
        },
        onSettled: () => {
            setIsLoading(false);
        },
    });
};

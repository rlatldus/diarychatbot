import { useMutation } from '@tanstack/react-query';
import { updateMyDiary } from '../../api/diary';
import { toast } from 'react-hot-toast';

export const useUpdateDiary = (setIsLoading) => {
    return useMutation(updateMyDiary, {
        onSuccess: (response) => {
            if (response?.data?.errors) {
                return toast.error(`${response.data.errors[0].message}`);
            }
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

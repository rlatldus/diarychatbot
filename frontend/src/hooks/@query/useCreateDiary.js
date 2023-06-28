import { useMutation, useQueryClient } from '@tanstack/react-query';
import { createDiary } from '../../api/diary';
import { toast } from 'react-hot-toast';

export const useCreateDiary = (setIsLoading, navigate) => {
    const queryClient = useQueryClient();
    return useMutation(createDiary, {
        onSuccess: (response) => {
            if (response?.data?.errors) {
                return toast.error(`${response.data.errors[0].message}`);
            }
            toast.success('일기작성에 성공했습니다.');
            navigate(`${response.data.data.createDiary.id}`, { state: true });
            queryClient.invalidateQueries(['fetchDiary']);
        },
        onError: () => {
            toast.error('일기작성에 실패했습니다.');
        },
        onSettled: () => {
            setIsLoading(false);
        },
    });
};

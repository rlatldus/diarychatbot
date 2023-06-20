import { useQuery } from '@tanstack/react-query';
import { getDiary } from '../../api/diary';

export const useGetDiary = () => {
    return useQuery(['fetchMyDiary'], getDiary);
};

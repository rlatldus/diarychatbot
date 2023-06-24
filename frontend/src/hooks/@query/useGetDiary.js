import { useQuery } from '@tanstack/react-query';
import { getDiary } from '../../api/diary';

// 쿼리키 추가
export const useGetDiary = (fetchDiary) => {
    return useQuery(['fetchDiary', { fetchDiary }], () => getDiary(fetchDiary));
};

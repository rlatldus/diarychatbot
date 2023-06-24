import { useQuery } from '@tanstack/react-query';
import { getDiary } from '../../api/diary';

export const useGetDiary = (fetchDiary) => {
    return useQuery([fetchDiary], () => getDiary(fetchDiary));
};

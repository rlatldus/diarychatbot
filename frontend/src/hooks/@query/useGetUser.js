import { useQuery } from '@tanstack/react-query';
import { getUser } from '../../api/user';

export const useGetUser = () => {
    return useQuery(['fetchUser'], getUser);
};

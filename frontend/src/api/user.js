import { instance } from '.';

export const getUser = async () => {
    const response = await instance.post('', {
        query: `query{fetchUser{
            id
            email
            name
        }}`,
    });
    return response;
};

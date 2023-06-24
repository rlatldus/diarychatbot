import { instance } from '.';

export const getDiary = async (fetchDiary) => {
    const response = await instance.post('', {
        query: `query{${fetchDiary}{
            id
            title
            ask
            color
            answer
            score
            user {
                id
                email
                name
            }
            createdAt
            updatedAt
        }}`,
    });
    return response;
};

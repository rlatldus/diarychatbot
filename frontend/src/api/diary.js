import { instance } from '.';

export const getDiary = async () => {
    const response = await instance.post('', {
        query: `query{fetchMyDiary{
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

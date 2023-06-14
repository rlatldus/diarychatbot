import { instance } from '.';

export const getDiary = async () => {
    const response = await instance.post('', {
        query: `query{fetchMyDiary{
            id
            title
            ask
            sticker_color
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

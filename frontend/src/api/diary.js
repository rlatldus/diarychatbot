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

export const createDiary = async (formData) => {
    const response = await instance.post('', {
        query: `mutation{
          createDiary(createChatInput:{
            title: "${formData.title}",
            ask: "${formData.ask}",
            color: ${formData.color}
          }){
            id
            title
            ask
            answer
            score
            color
            user{
             id
            }
            updatedAt
          }
        }`,
    });
    return response;
};

export const updateMyDiary = async (formData) => {
    const response = await instance.post('', {
        query: `mutation{
          updateMyDiary(
            id:"${formData.id}"
            updateChatInput:{
            title:"${formData.title}",
            ask:"${formData.ask}",
            color:${formData.color}
          }){
            id
            title
            ask
            answer
            score
            color
            user{
                id
            }
            updatedAt
            createdAt
          }
        }`,
    });
    return response;
};

export const deleteMyDiary = async (id) => {
    const response = await instance.post('', {
        query: `
            mutation {
              deleteMyDiary(
                id: "${id}"
              )} `,
    });
    return response;
};

import { instance } from '.';

export const signUp = async (formData) => {
    const response = await instance.post('', {
        query: `mutation{
            createUser(createUserInput:{
                email: "${formData.email}"
                password: "${formData.password}"
                name: "${formData.name}"
            }){
                id
                name
            }
        }`,
    });
    return response;
};

export const signIn = async (formData) => {
    const response = await instance.post('', {
        query: `mutation{
            login(email: "${formData.email}", password: "${formData.password}")
        }`,
    });
    return response;
};

export const logout = async () => {
    const response = await instance.post('', {
        query: `mutation{logout}`,
    });
    return response;
};

export const getToken = async () => {
    const response = await instance.post('', {
        query: `mutation{restoreAccessToken}`,
    });
    return response;
};

export const createDiary = async (formData) => {
    if (formData.color === '#dfb1a3') {
        formData.color = 'scarlet';
    } else if (formData.color === '#A5A2AA') {
        formData.color = 'gray';
    } else if (formData.color === '#F3AC7F') {
        formData.color = 'orange';
    }
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
    if (formData.color === '#dfb1a3') {
        formData.color = 'scarlet';
    } else if (formData.color === '#A5A2AA') {
        formData.color = 'gray';
    } else if (formData.color === '#F3AC7F') {
        formData.color = 'orange';
    }
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

export const deleteMyDiary = async (formData) => {
    const response = await instance.post('', {
        query: `
            mutation {
              deleteMyDiary(
                id: "${formData.id}"
              )} `,
    });
    return response;
};

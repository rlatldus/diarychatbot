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
    const response = await instance.post(
        '',
        {
            query: `mutation{restoreAccessToken}`,
        },
        { withCredentials: true },
    );
    return response;
};

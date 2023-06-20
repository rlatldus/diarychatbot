import { socialInstance } from './socialIndex';

export const socialLogin = async (socialName) => {
    const response = await socialInstance.post(`/login/${socialName}`);

    return response;
};

import axiosInstance from '../utils/axiosInstance';

export const login = async (email, password) => {
    const {data} = await axiosInstance.post('login', {
        email, 
        password
    });
    return data;
};

export const me = async () => {
    const {data} = await axiosInstance.get('me');
    return data;
};

export const logout = async () => {
    const {data} = await axiosInstance.get('logout');
    return data;
};

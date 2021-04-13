import axiosInstance from '../utils/axiosInstance';

export const createUser = async (user) => {
    const {data} = await axiosInstance.post('user/user', user);
    return data;
};
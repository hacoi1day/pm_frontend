import axiosInstance from '../utils/axiosInstance';

export const listUser = async (page) => {
    const {data} = await axiosInstance.get(`user/user?page=${page}`);
    return data;
}

export const createUser = async (user) => {
    const {data} = await axiosInstance.post('user/user', user);
    return data;
};
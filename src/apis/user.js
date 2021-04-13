import axiosInstance from '../utils/axiosInstance';

export const listUser = async (page) => {
    const {data} = await axiosInstance.get(`user/user?page=${page}`);
    return data;
};

export const createUser = async (user) => {
    const {data} = await axiosInstance.post('user/user', user);
    return data;
};

export const editUser = async (user) => {
    const {data} = await axiosInstance.put(`user/user/${user.id}`, user);
    return data;
};

export const getUser = async (userId) => {
    const {data} = await axiosInstance.get(`user/user/${userId}`);
    return data;
};

export const deleteUser = async (userId) => {
    const {data} = await axiosInstance.delete(`user/user/${userId}`);
    return data;
};
import axiosInstance from '../utils/axiosInstance';

export const listDepartment = async (page) => {
    try {
        const {data} = await axiosInstance.get(`department/department?page=${page}`);
        return data;
    } catch (err) {
        console.log(err);
        return [];
    }
};

export const createDepartment = async (user) => {
    try {
        const {data} = await axiosInstance.post('department/department', user);
        return data;
    } catch (err) {
        console.log(err);
        return false;
    }
};

export const editDepartment = async (user) => {
    try {
        const {data} = await axiosInstance.put(`department/department/${user.id}`, user);
        return data;
    } catch (err) {
        console.log(err);
        return false
    }
};

export const getDepartment = async (userId) => {
    try {
        const {data} = await axiosInstance.get(`department/department/${userId}`);
    return data;
    } catch (err) {
        console.log(err);
        return false
    }
};

export const deleteDepartment = async (userId) => {
    try {
        const {data} = await axiosInstance.delete(`department/department/${userId}`);
        return data;
    } catch (err) {
        console.log(err);
        return false;
    }
};

export const dropdownDepartment = async () => {
    try {
        const {data} = await axiosInstance.post('department/dropdown');
        return data;
    } catch (err) {
        console.log(err);
        return [];
    }
}
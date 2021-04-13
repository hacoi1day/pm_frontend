import axiosInstance from '../utils/axiosInstance';

export const storeFile = async (file) => {
    let formData = new FormData();
    formData.append('file', file);
    const {data} = await axiosInstance.post('storage/store-file', formData);
    return data;
};

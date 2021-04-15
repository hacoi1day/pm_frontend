import axiosInstance from '../utils/axiosInstance';

export const login = async (email, password) => {
    const {data} = await axiosInstance.post('login', {
        email, 
        password
    });
    return data;
};

export const resetPassword = async (email) => {
    const {data} = await axiosInstance.post('reset-password', {
        email
    });
    return data;
}

export const me = async () => {
    try {
        const {data} = await axiosInstance.get('me');
        return data;
    } catch(err) {
        return false;
    }
};

export const logout = async () => {
    const {data} = await axiosInstance.get('logout');
    return data;
};

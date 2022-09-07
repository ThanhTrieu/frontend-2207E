import axios from 'axios';

const getAllUsers = () => {
    const url = `https://fakestoreapi.com/users`;
    return axios.get(url);
}

export const api = {
    getAllUsers
}
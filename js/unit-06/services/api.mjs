import axios from 'axios';

// async ... await
const getDataPostById = async (id) => {
    const urlApi = `https://jsonplaceholder.typicode.com/posts/${id}`;
    const response = await axios.get(urlApi); // await doi xu ly xong - cac cau lenh ben duoi phai cho
    const result = response.status === 200 ? response.data : null;
    return result; // tra ve promise
}

const getDataCommentsByPostId = async (id) => {
    const url = `https://jsonplaceholder.typicode.com/posts/${id}/comments`;
    const response = await axios.get(url);
    const result = response.status === 200 ? response.data : null;
    return result; // tra ve promise
}

const getAllDataPosts = async () => {
    const response = await axios.get(`https://jsonplaceholder.typicode.com/posts`);
    const result = response.status === 200 ? response.data : null;
    return result; // tra ve promise
}
const getAllDataComments = async () => {
    const response = await axios.get(`https://jsonplaceholder.typicode.com/comments`);
    const result = response.status === 200 ? response.data : null;
    return result; // tra ve promise
}

export const api = {
    getDataPostById,
    getDataCommentsByPostId,
    getAllDataPosts,
    getAllDataComments
}
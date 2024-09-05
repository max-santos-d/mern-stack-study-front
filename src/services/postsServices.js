import axios from 'axios';
import Cookies from 'js-cookie'

const baseURL = 'http://localhost:3001';
/**/

export function getAllPosts() {
    const response = axios.get(`${baseURL}/news`);
    return response;
};

export function getTopPost() {
    const response = axios.get(`${baseURL}/news/search?last=true`);
    return response;
};

export function searchPost(title) {
    const response = axios.get(`${baseURL}/news/search?title=${title}`);
    return response;
};

export function getAllPostsByUser(userId) {
    const response = axios.get(`${baseURL}/news/search?userId=${userId}`);
    return response;
};

export function createPost(body) {
    const response = axios.post(`${baseURL}/news`, body, {
        headers: {
            Authorization: `Bearer ${Cookies.get('token')}`,
        },
    });
    return response;
};

export function getPostById(id) {
    const response = axios.get(`${baseURL}/news/search?id=${id}`, {
        headers: {
            Authorization: `Bearer ${Cookies.get('token')}`,
        },
    });
    return response;
};

export function editPost(body, id) {
    const response = axios.patch(`${baseURL}/news/${id}`, body, {
        headers: {
            Authorization: `Bearer ${Cookies.get('token')}`,
        },
    });
    return response;
};

export function deletePost(id) {
    const response = axios.delete(`${baseURL}/news/${id}`, {
        headers: {
            Authorization: `Bearer ${Cookies.get('token')}`,
        },
    });
    return response;
};

export function likePost(id) {
    const body = {}
    const response = axios.patch(`${baseURL}/news/like/${id}`, body, {
        headers: {
            Authorization: `Bearer ${Cookies.get('token')}`,
        },
    });
    return response;
};
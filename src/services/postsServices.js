import axios from 'axios';
import Cookies from 'js-cookie'

const baseURL = 'http://localhost:3001';

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

export function createPost(body){
    const response = axios.post(`${baseURL}/news`, body, {
        headers: {
            Authorization: `Bearer ${Cookies.get('token')}`,
        },
    });

    return response;
}
import axios from 'axios';

const baseURL = 'http://localhost:3001';

export function getAllPosts() {
    const response = axios.get(`${baseURL}/news`);
    return response;
};

export function getTopPost () {
    const response = axios.get(`${baseURL}/news/search?last=true`);
    return response;
};
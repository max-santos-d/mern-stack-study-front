import axios from 'axios';

const baseURL = 'http://localhost:3001';

export function signup(data) {
    delete data.confirmPassword;
    const body = {
        ...data,
        username: generateUsername(),
        avatar: 'https://img.freepik.com/free-psd/3d-illustration-human-avatar-profile_23-2150671122.jpg?size=338&ext=jpg&ga=GA1.1.2008272138.1724112000&semt=ais_hybrid',
        // avatar: 'https://img.freepik.com/free-psd/3d-rendering-avatar_23-2150833546.jpg?size=338&ext=jpg&ga=GA1.1.2008272138.1724112000&semt=ais_hybrid',
        background: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQi8NEbgQsVHcCRBRO2pkCEEgu4A0nJR9uhOjtHn-1RKKhy56Mll3wn2oiNybt3FVaIZnM&usqp=CAU'
    }
    const response = axios.post(`${baseURL}/user`, body);
    return response;
};

function generateUsername() {
    const max = 999;
    const min = 111;
    const random = Math.floor(Math.random() * (max - min + 1)) + min;
    return `username-${Date.now()}${random}`
};
import axios from 'axios';
import Storage from '../utils/storage';

const api = axios.create({
    baseURL: `http://localhost:3400`
});

api.interceptors.request.use((config) => {
    let token = Storage.getTokenFromStorage();
    config.headers.Authorization = token;

    return config;
})

export default api;
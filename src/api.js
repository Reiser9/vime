import axios from 'axios';

const token = 'DZRNMu762NH96dG8ulbct86tAfnhiT1';
export const skinApi = 'http://skin.vimeworld.ru';

export const vimeApi = axios.create({
    baseURL: 'https://api.vimeworld.ru',
    params: {
        token
    }
});
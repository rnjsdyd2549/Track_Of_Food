import axios from 'axios';

const api = axios.create({
    baseURL: process.env.REACT_APP_RESULT_API_HOST,
    timeout: 30000,
    headers: {
        "Content-Type": "application/json;charset=UTF-8",
        "Access-Control-Allow-Origin": "*",
        "Accept": "application/json",
    }
});

export default api;
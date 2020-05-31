import axios from 'axios';

export default const api = axios.create({
 baseURL: process.env.API_URL,
});

export default api;

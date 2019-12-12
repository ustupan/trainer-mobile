import axios from 'axios';

const instance = axios.create({
    baseURL: "http://7aed8136.ngrok.io"
});

export default instance;
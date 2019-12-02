import axios from 'axios';

const instance = axios.create({
    baseURL: "http://5d779794.ngrok.io"
});

export default instance;
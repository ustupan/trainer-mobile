import axios from 'axios';

const instance = axios.create({
    baseURL: "http://5fbffd9f.ngrok.io"
});

export default instance;
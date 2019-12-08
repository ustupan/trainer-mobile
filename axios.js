import axios from 'axios';

const instance = axios.create({
    baseURL: "http://548f2e5d.ngrok.io"
});

export default instance;
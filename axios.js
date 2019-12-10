import axios from 'axios';

const instance = axios.create({
    baseURL: "http://4bbfc73c.ngrok.io"
});

export default instance;
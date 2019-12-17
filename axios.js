import axios from 'axios';

const instance = axios.create({
    baseURL: "http://6e28ff13.ngrok.io"
});

export default instance;
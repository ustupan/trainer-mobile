import axios from 'axios';

const instance = axios.create({
    baseURL: "http://493f2bab.ngrok.io"
});

export default instance;
import axios from 'axios';

const instance = axios.create({
    baseURL: "http://a79debcd.ngrok.io"
});

export default instance;
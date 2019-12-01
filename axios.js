import axios from 'axios';

const instance = axios.create({
    baseURL: "http://ba045be6.ngrok.io"
});

export default instance;
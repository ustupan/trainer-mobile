import axios from 'axios';

const instance = axios.create({
    baseURL: "http://0fbea03b.ngrok.io"
});

export default instance;
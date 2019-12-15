import axios from 'axios';

const instance = axios.create({
    baseURL: "http://f697196c.ngrok.io"
});

export default instance;
import axios from 'axios';

const instance = axios.create({
    baseURL: "http://b2c109ee.ngrok.io"
});

export default instance;
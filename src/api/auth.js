import axios from 'axios';


const baseUrl = 'http://2a267a69.ngrok.io';

export const register = async (state) => {
    return axios.post(`${baseUrl}/registration/user`, {
            "username": `${state.username}`,
            "email": `${state.email}`,
            "password": `${state.password}`,
            "gender": `${state.gender}`,
            "roleName": `${state.roleName}`
        });
};
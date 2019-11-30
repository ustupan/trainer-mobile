import axios from 'axios';


const baseUrl = 'http://f4ddd2e2.ngrok.io';

export const register = async (state) => {
    return axios.post(`${baseUrl}/registration/user`, {
            "username": `${state.username}`,
            "email": `${state.email}`,
            "password": `${state.password}`,
            "gender": `${state.gender}`,
            "roleName": `${state.roleName}`
        });
};

export const login = async (state) => {
    return axios.post(`${baseUrl}/authenticate`, {
        "username": `${state.username}`,
        "password": `${state.password}`,
    });
};
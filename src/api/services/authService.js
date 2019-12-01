import axios from '../../../axios'



export const register = async (state) => {
    return axios.post(`/registration/user`, {
            "username": `${state.username}`,
            "email": `${state.email}`,
            "password": `${state.password}`,
            "gender": `${state.gender}`,
            "roleName": `${state.roleName}`
        });
};

export const login = async (state) => {
    return axios.post(`/authenticate`, {
        "username": `${state.username}`,
        "password": `${state.password}`,
    });
};
import { AsyncStorage } from 'react-native';
import jwt_decode from 'jwt-decode';

const getJwtRoles = (jwt) => {
    let decoded = jwt_decode(jwt);
    return decoded['role'];
};

export const saveItem = async (key, value) => {

    const adjustJwt = (jwt) => {
        jwt = jwt.replace("Bearer","");
        return jwt;
    };
    try {
        if(key === 'jwt') value = adjustJwt(value);
        await AsyncStorage.setItem(key, value);
    } catch (error) {
        throw error;
    }
};

export const getItem = async (key) => {
    try {
        await AsyncStorage.getItem(key);
    } catch (error) {
        console.log('AsyncStorage Error: ' + error.message);
    }
};

const deviceStorage = {

    async clear() {
        try {
            await AsyncStorage.clear();
        } catch (error) {
            console.log('AsyncStorage Error: ' + error.message);
        }
    },

    async loadJwt() {
        try {
            const value = await AsyncStorage.getItem('jwt');
            if (value !== null) {
                this.setState({
                    jwt: value,
                    loading: false,
                    roles: getJwtRoles(value)
                });
            } else {
                this.setState({
                    loading: false
                });
            }
        } catch (error) {
            console.log('AsyncStorage Error: ' + error.message);
        }
    },

    async saveItem(key, value) {
        const adjustJwt = (jwt) => {
            jwt = jwt.replace("Bearer", "");
            return jwt;
        };
        try {
            if (key === 'jwt') value = adjustJwt(value);
            await AsyncStorage.setItem(key, value);
        } catch (error) {
            throw error;
        }
    }
};


export default deviceStorage;



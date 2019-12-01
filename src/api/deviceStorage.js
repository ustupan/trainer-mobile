import { AsyncStorage } from 'react-native';
import {get} from "react-native/Libraries/TurboModule/TurboModuleRegistry";



export const saveItem = async (key, value) => {

    const adjustJwt = (jwt) => {
        jwt = jwt.replace("Bearer","");
        return jwt;
    };

    try {
        if(key === 'jwt') value = adjustJwt(value);
        await AsyncStorage.setItem(key, value);
    } catch (error) {
        console.log('AsyncStorage Error: ' + error.message);
    }
};

export const clear = async () => {
    try {
        await AsyncStorage.clear().then(() => {
            console.log(getItem('jwt'));
        });
    } catch (error) {
        console.log('AsyncStorage Error: ' + error.message);
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
                    loading: false
                });
            } else {
                this.setState({
                    loading: false
                });
            }
        } catch (error) {
            console.log('AsyncStorage Error: ' + error.message);
        }
    }
};


export default deviceStorage;



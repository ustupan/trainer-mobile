import { AsyncStorage } from 'react-native';


export const saveItem = async (key, value) => {
    try {
        await AsyncStorage.setItem(key, value);
    } catch (error) {
        console.log('AsyncStorage Error: ' + error.message);
    }
};

export const clear = async () => {
    try {
        await AsyncStorage.clear();
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



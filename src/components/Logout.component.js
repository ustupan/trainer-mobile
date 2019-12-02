import React from 'react';
import deviceStorage from "../api/deviceStorage";
import { StyleSheet, Text, TextInput, View, Alert } from "react-native";

import Button from "react-native-button";
import {AppStyles} from "../../AppStyles";

class LogoutComponent extends React.Component {

    constructor(props) {
        super(props);
        this.clear = deviceStorage.clear.bind(this);
        this.logout = this.logout.bind(this);
    }

    async logout(){
        try{
            await this.clear();
            await this.props.navigation.navigate('Welcome');
            //console.log(this.props);
        }
        catch (e) {
            console.log(e.message);
            Alert.alert('Nie udało się wylogować!!');
        }

    };

    render() {
        return (
            <View style={styles.container}>
                <Button
                    containerStyle={styles.logoutContainer}
                    style={styles.loginText}
                    onPress = {this.logout}
                >
                    Wyloguj
                </Button>
            </View>

        )}
}
export default LogoutComponent;

const styles = StyleSheet.create({
    logoutContainer: {
        width: 100,
        padding: 5,
        backgroundColor: AppStyles.color.tint,
        borderRadius: 5,
    },
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    loginText: {
        color: AppStyles.color.white
    }
});
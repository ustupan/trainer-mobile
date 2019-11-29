import React from "react";
import { StyleSheet, Text, TextInput, View } from "react-native";
import Button from "react-native-button";

export default class SignUp extends React.Component {
    render() {
        return(
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                <Button
                    onPress = { () => this.props.navigation.navigate('Dashboard')}
                    title={"Rejestracja"}>
                    Rejestracja
                </Button>
            </View>

        )
    }
};

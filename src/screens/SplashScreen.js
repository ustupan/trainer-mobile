import React from "react";
import {  StyleSheet } from "react-native";
import {  ActivityIndicator } from "react-native";

export default class SplashScreen extends React.Component {

    render() {
        return (
            <ActivityIndicator
                style={styles.spinner}
                size="large"
                color={{color: '#ff5a66'}}
            />
        );
        }
}

const styles = StyleSheet.create({

    spinner: {
        marginTop: 200
    }
});


import React from "react";
import {  StyleSheet, View } from "react-native";
import {  ActivityIndicator } from "react-native";

export default class SplashScreen extends React.Component {

    render() {
        return (
            <View style={[styles.container, styles.horizontal]}>
                <ActivityIndicator size="large" color="#ff5a66" />
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center'
    },
    horizontal: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        padding: 10
    }
});



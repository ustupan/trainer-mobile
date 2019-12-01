import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Button from 'react-native-button'
import { AppStyles } from "../../../AppStyles";


export default class Welcome extends React.Component {
    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.title}>Witaj w aplikacji Trainer</Text>

                <Button
                    containerStyle={styles.loginContainer}
                    style={styles.loginText}
                    onPress = { () => this.props.navigation.navigate('SignIn')}
                    title={"Logowanie"}>
                    Logowanie
                </Button>
                <Button
                    containerStyle={styles.signupContainer}
                    style={styles.signupText}
                    onPress = { () => this.props.navigation.navigate('SignUp')}
                    title={"Rejestracja"}>
                    Rejestracja
                </Button>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        marginBottom: 0,
    },
    logo: {
        width: 200,
        height: 200
    },
    title: {
        fontSize: 30,
        fontWeight: "bold",
        color: AppStyles.color.tint,
        marginTop: 20,
        textAlign: "center",
        marginBottom: 10,
        marginLeft: 20,
        marginRight: 20
    },
    subTitle: {
        fontSize: 17,
        color: "#9AA5A3",
        textAlign: "center",
        marginBottom: 20,
        marginLeft: 20,
        marginRight: 20
    },
    loginContainer: {
        width: AppStyles.buttonWidth.main,
        backgroundColor: AppStyles.color.tint,
        borderRadius: 5,
        padding: 10,
        marginTop: 30
    },
    loginText: {
        color: AppStyles.color.white
    },
    signupContainer: {
        width: AppStyles.buttonWidth.main,
        backgroundColor: AppStyles.color.white,
        borderRadius: 5,
        padding: 8,
        borderWidth: 1,
        borderColor: AppStyles.color.tint,
        marginTop: 15
    },
    signupText: {
        color: AppStyles.color.tint
    },
    spinner: {
        marginTop: 200
    }
});

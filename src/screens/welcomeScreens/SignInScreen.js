import React from "react";
import { StyleSheet, Text, TextInput, View, Alert } from "react-native";
import Button from "react-native-button";
import { AppStyles } from "../../../AppStyles";
import {login} from "../../api/services/authService";
import {saveItem} from "../../api/deviceStorage"
import deviceStorage from "../../api/deviceStorage";
import jwt_decode from 'jwt-decode';
import responseHandle from "../../api/responseHandler";
import {getItem} from "../../api/deviceStorage";
import SplashScreen from "../SplashScreen";


class SignIn extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            loading: false,
            username: "",
            password: "",
        };
        this.saveItem = deviceStorage.saveItem.bind(this);
    }

    getJwtRoles = (jwt) => {
        let decoded = jwt_decode(jwt);
        return decoded['role'];
    };


    onValid = () => {
        const username = this.state.username;
        const password = this.state.password;

        if (username === undefined || username === '') throw {message: "Nazwa użytkownika jest wymagana!" };

        if (password === undefined || password === '') throw {message: "Hasło jest wymagane!" };

    };


    signIn = async () => {
        try {
            this.onValid();
            login(this.state).then((response) => {
                console.log(this.state);
                this.saveItem('jwt',response.headers['authorization']);
                if (this.getJwtRoles(response.headers['authorization']).filter((role) => role.includes('ATHLETE')).length > 0) this.props.navigation.navigate('AthleteDashboard'); //athlete
                else this.props.navigation.navigate('TrainerDashboard'); //trainer
            })
                .catch((er)=>{
                    Alert.alert('Podano nieprawidłowe dane!');
                   throw er;
                });

        } catch (err) {
            responseHandle(err);
        }
    };

    render() {
        if (this.state.loading) {
            return <SplashScreen/>
        }
        return (
            <View style={styles.container}>
                <Text style={styles.title}></Text>
                <View style={styles.InputContainer}>
                    <TextInput
                        style={styles.body}
                        placeholder="Nazwa użytkownika"
                        onChangeText={text => this.setState({ username: text })}
                        value={this.username}
                        placeholderTextColor={AppStyles.color.grey}
                        underlineColorAndroid="transparent"
                    />
                </View>
                <View style={styles.InputContainer}>
                    <TextInput
                        style={styles.body}
                        secureTextEntry={true}
                        placeholder="Hasło"
                        onChangeText={text => this.setState({ password: text })}
                        value={this.state.password}
                        placeholderTextColor={AppStyles.color.grey}
                        underlineColorAndroid="transparent"
                    />
                </View>
                <Button
                    containerStyle={styles.loginContainer}
                    style={styles.loginText}
                    onPress = {this.signIn}
                >
                    Zaloguj
                </Button>
            </View>
        );
    }
}



const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        marginTop: 0,
    },
    or: {
        fontFamily: AppStyles.fontName.main,
        color: "black",
        marginTop: 40,
        marginBottom: 10
    },
    title: {
        fontSize: 30,
        fontWeight: "bold",
        color: AppStyles.color.tint,
        marginTop: 20,
        textAlign: "center",
        marginBottom: 200,
        marginLeft: 20,
        marginRight: 20
    },
    leftTitle: {
        alignSelf: "stretch",
        textAlign: "left",
        marginLeft: 20
    },
    content: {
        paddingLeft: 50,
        paddingRight: 50,
        textAlign: "center",
        fontSize: AppStyles.fontSize.content,
        color: AppStyles.color.text
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
    placeholder: {
        fontFamily: AppStyles.fontName.text,
        color: "red"
    },
    InputContainer: {
        width: AppStyles.textInputWidth.main,
        marginTop: 30,
        borderWidth: 1,
        borderStyle: "solid",
        borderColor: AppStyles.color.grey,
        borderRadius: 5
    },
    body: {
        height: 42,
        paddingLeft: 20,
        paddingRight: 20,
        color: AppStyles.color.text
    }
});

export default SignIn;
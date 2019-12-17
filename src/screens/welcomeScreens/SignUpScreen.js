import React from "react";
import { StyleSheet, Text, TextInput, View, Alert } from "react-native";
import Button from "react-native-button";
import { AppStyles } from "../../../AppStyles";
import RNPickerSelect from 'react-native-picker-select';
import { register } from "../../api/services/authService";
import responseHandle from '../../api/responseHandler';


export default class SignUp extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            loading: true,
            username: "",
            email: "",
            password: "",
            confirmPassword: "",
            gender: "",
            roleName: ""
        };
    }

    onValid = () => {
        const username = this.state.username;
        const password = this.state.password;
        const confirmPassword = this.state.confirmPassword;
        const email = this.state.email;
        const role = this.state.roleName;

        if (username === undefined || username === '') throw {message: "Nazwa użytkownika jest wymagana!" };

        if (role === undefined || role === '') throw {message: "Rola jest wymagana!"};

        if (password === undefined || password === '' || confirmPassword === undefined || confirmPassword === '' ) throw {message: "Hasło jest wymagane!" };

        if (password.localeCompare(confirmPassword) !== 0) throw {message: "Hasła muszą być identyczne!" };

        const emailRegex = /((\w|\.)+)@(\w+)(\.\w{2,3}){1,}/;

        if(!(email.match(emailRegex))) throw {message: "E-mail jest niepoprawny!"};

    };

    signUp = async () => {
        try {
            this.onValid();
            const response = await register(this.state);
        } catch (err) {
            console.log(err);
            responseHandle(err);
            return;
        }
        this.props.navigation.goBack();
        };

    render() {
        const genderPlaceholder = {
            label: 'Wybierz płeć...',
            value: null,
            color: '#9EA0A4',
        };
        const athletePlaceholder = {
            label: 'Wybierz role...',
            value: null,
            color: '#9EA0A4',
        };
        return (
            <View style={styles.container}>
                <Button
                    containerStyle={styles.loginContainer}
                    style={styles.facebookText}
                    onPress = {this.signUp}
                >
                    Zarejestruj
                </Button>
                <View style={styles.InputContainer}>
                    <TextInput
                        style={styles.body}
                        placeholder="Nazwa użytkownika"
                        onChangeText={text => this.setState({ username: text })}
                        value={this.state.username}
                        placeholderTextColor={AppStyles.color.grey}
                    />
                </View>
                <View style={styles.InputContainer}>
                    <TextInput
                        style={styles.body}
                        placeholder="Adres E-mail"
                        onChangeText={text => this.setState({ email: text })}
                        value={this.state.email}
                        placeholderTextColor={AppStyles.color.grey}
                    />
                </View>
                <View style={styles.InputContainer}>
                    <RNPickerSelect
                        placeholder={genderPlaceholder}
                        style={pickerSelectStyles}
                        onValueChange={(value) => this.setState({gender:value})}
                        value={this.state.gender}
                        items={[
                            { label: 'Mężczyzna', value: 'man' },
                            { label: 'Kobieta', value: 'woman' },
                            { label: 'Inna', value: 'other' },
                        ]}
                    />
                </View>
                <View style={styles.InputContainer}>
                    <RNPickerSelect
                        placeholder={athletePlaceholder}
                        style={pickerSelectStyles}
                        onValueChange={(value) => this.setState({roleName:value})}
                        value={this.state.roleName}
                        items={[
                            { label: 'Sportowiec', value: 'ROLE_ATHLETE' },
                            { label: 'Trener', value: 'ROLE_TRAINER' },
                        ]}
                    />
                </View>
                <View style={styles.InputContainer}>
                    <TextInput
                        style={styles.body}
                        placeholder="Hasło"
                        secureTextEntry={true}
                        onChangeText={text => this.setState({ password: text })}
                        value={this.state.password}
                        placeholderTextColor={AppStyles.color.grey}
                    />
                </View>
                <View style={styles.InputContainer}>
                    <TextInput
                        style={styles.body}
                        placeholder="Potwierdz hasło"
                        secureTextEntry={true}
                        onChangeText={text => this.setState({ confirmPassword: text })}
                        value={this.state.confirmPassword}
                        placeholderTextColor={AppStyles.color.grey}
                    />
                </View>

            </View>
        );
    }
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    title: {
        fontSize: AppStyles.fontSize.title,
        fontWeight: "bold",
        color: AppStyles.color.tint,
        marginTop: 20,
        marginBottom: 20
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
    },
    facebookContainer: {
        width: AppStyles.buttonWidth.main,
        backgroundColor: AppStyles.color.tint,
        borderRadius: AppStyles.borderRadius.main,
        padding: 10,
        marginTop: 30
    },
    facebookText: {
        color: AppStyles.color.white
    }
});

const pickerSelectStyles = StyleSheet.create({
    inputIOS: {
        fontSize: 16,
        paddingVertical: 12,
        paddingHorizontal: 10,
        borderWidth: 1,
        borderColor: 'gray',
        borderRadius: 4,
        color: 'black',
        paddingRight: 30, // to ensure the text is never behind the icon
    },
    inputAndroid: {
        fontSize: 16,
        paddingHorizontal: 10,
        paddingVertical: 8,
        borderWidth: 0.5,
        borderColor: 'purple',
        borderRadius: 8,
        color: 'black',
        paddingRight: 30, // to ensure the text is never behind the icon
    },
});
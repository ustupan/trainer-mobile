import React from "react";
import { StyleSheet, Text, TextInput, View } from "react-native";
import Button from "react-native-button";
import { AppStyles } from "../../AppStyles";


class SignIn extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            loading: true,
            username: "",
            password: ""
        };
    }
    render() {
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
import React from 'react';
import {Picker, StyleSheet, Text, TouchableOpacity, View, Alert, TextInput, ScrollView} from 'react-native';
import DatePicker from 'react-native-datepicker'
import Button from "react-native-button";
import {AppStyles} from "../../../AppStyles";
import RNPickerSelect from "react-native-picker-select";


export default class EditResultScreen extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            value:"",
            resultDate:"",
            discipline: "",
            unit: "",
            motivationLevel: "",
            dispositionLevel: "",
            description: "Dokłady opis treningu disa disabled disabled disabled disabled disabled disabled",
        };
    }

    clickEventListener = () => {
    };

    setLoadingFalse(){
        this.setState({
            loading: false
        })
    }

    render() {
        const motivationPlaceholder = {
            label: 'Wybierz poziom motywacji...',
            value: null,
            color: '#9EA0A4',
        };
        const dispositionPlaceholder = {
            label: 'Wybierz poziom dyspozycji...',
            value: null,
            color: '#9EA0A4',
        };
        return (
            <View style={styles.container}>
                <ScrollView contentContainerStyle={styles.scrollView}>
                    <Text style={{fontSize:25, fontWeight:'bold',  color:"#ff5a66", marginTop: 20}}>Rezultat</Text>
                    <View style={[styles.InputContainer, {marginTop: 20}]}>
                        <TextInput
                            style={styles.body}
                            placeholder="Dyscyplina"
                            onChangeText={text => this.setState({ discipline: text })}
                            value={this.state.discipline}
                            placeholderTextColor={AppStyles.color.grey}

                        />
                    </View>
                    <View style={[styles.InputContainer, {}]}>
                        <TextInput
                            style={styles.body}
                            placeholder="Rezultat"
                            onChangeText={text => this.setState({ value: text })}
                            value={this.state.value}
                            placeholderTextColor={AppStyles.color.grey}

                        />
                    </View>
                    <View style={[styles.InputContainer, {}]}>
                        <TextInput
                            style={styles.body}
                            placeholder="Jednostka"
                            onChangeText={text => this.setState({ unit: text })}
                            value={this.state.unit}
                            placeholderTextColor={AppStyles.color.grey}

                        />
                    </View>
                    <View style={[styles.bodyContent, {}]}>
                        <DatePicker
                            style={{width: 335, borderWidth: 1,
                                borderStyle: "solid",
                                borderColor: AppStyles.color.grey,
                                height: 50,
                                marginBottom: 30,
                                borderRadius: 5}}
                            date={this.state.resultDate}
                            mode="date"
                            placeholder="Data osiągnięcia rezultatu"
                            format="YYYY-MM-DD"
                            minDate="2019-05-01"
                            maxDate="2030-06-01"
                            confirmBtnText="Potwierdź"
                            cancelBtnText="Anuluj"
                            locale={"pl"}
                            customStyles={{
                                dateInput: {
                                    marginLeft: 10,
                                    borderWidth: 0,
                                    textAlign: 'left',
                                }

                            }}
                            onDateChange={(date) => {this.setState({resultDate: date})}}
                        />
                    </View>

                    <View style={[styles.InputContainer,{}]}>
                        <TextInput
                            style={[styles.body, {height: 100, justifyContent: 'center',
                                alignItems: 'center'}]}
                            multiline={true}
                            onChangeText={text => this.setState({ description: text })}
                            value={this.state.description}
                            placeholderTextColor={AppStyles.color.grey}
                            disabled={true}
                        />
                    </View>
                    <View style={styles.InputContainer}>
                        <RNPickerSelect
                            placeholder={motivationPlaceholder}
                            style={pickerSelectStyles}
                            onValueChange={(value) => this.setState({motivationLevel:value})}
                            value={this.state.motivationLevel}
                            items={[
                                { label: '1', value: 1 },
                                { label: '2', value: 2 },
                                { label: '3', value: 3 },
                                { label: '4', value: 4 },
                                { label: '5', value: 5 },
                            ]}
                        />
                    </View>
                    <View style={styles.InputContainer}>
                        <RNPickerSelect
                            placeholder={dispositionPlaceholder}
                            style={pickerSelectStyles}
                            onValueChange={(value) => this.setState({dispositionLevel:value})}
                            value={this.state.dispositionLevel}
                            items={[
                                { label: '1', value: 1 },
                                { label: '2', value: 2 },
                                { label: '3', value: 3 },
                                { label: '4', value: 4 },
                                { label: '5', value: 5 },
                            ]}
                        />
                    </View>
                </ScrollView>
                <TouchableOpacity style={[styles.buttonContainer, styles.button]} onPress={() => {this.clickEventListener()}}>
                    <Text style={styles.buttonText}>Edytuj rezultat</Text>
                </TouchableOpacity>
            </View>

        );
    }
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center'
    },
    scrollView: {
        alignItems: 'center',
        width: 350
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
        width: 335,
        marginBottom: 15,
        borderWidth: 1,
        borderStyle: "solid",
        borderColor: AppStyles.color.grey,
        borderRadius: 5,

    },
    body: {
        height: 50,
        paddingLeft: 20,
        paddingRight: 20,
        color: AppStyles.color.text,
        textAlign: 'center'
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
    },
    buttonContainer: {
        height:45,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom:20,
        width:300,
        borderRadius:8,
        backgroundColor:'transparent'
    },
    button: {
        backgroundColor: "#ff5a66",

        shadowColor: "#808080",
        shadowOffset: {
            width: 0,
            height: 9,
        },
        shadowOpacity: 0.50,
        shadowRadius: 12.35,

        elevation: 19,
    },
    buttonText: {
        color: 'white',
        fontSize: 18,
        fontWeight: '600'
    },
    bodyContent:{
        flexDirection: 'row',
        flexWrap: 'wrap'
    },
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

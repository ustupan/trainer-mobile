import React from 'react';
import {Picker, StyleSheet, Text, TouchableOpacity, View, Alert, TextInput, ScrollView} from 'react-native';
import DatePicker from 'react-native-datepicker'
import Button from "react-native-button";
import {AppStyles} from "../../../AppStyles";
import RNPickerSelect from "react-native-picker-select";
import deviceStorage from "../../api/deviceStorage";
import trainerService from "../../api/services/trainerService";


export default class EditTrainingDayScreen extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            trainingDayDate:this.props.navigation.state.params.trainingDay.trainingDate,
            motivationLevel: this.props.navigation.state.params.trainingDay.motivationLevel,
            dispositionLevel: this.props.navigation.state.params.trainingDay.dispositionLevel,
            note: this.props.navigation.state.params.trainingDay.note,
            description: this.props.navigation.state.params.trainingDay.description,
            title: this.props.navigation.state.params.trainingDay.title,
            calendarId: this.props.navigation.state.params.trainingDay.calendarId,
            id: this.props.navigation.state.params.trainingDay.id,
        };
        this.loadJwt = deviceStorage.loadJwt.bind(this);
        this.loadJwt().then( () => {
            this.setState({loading: true});
        });
        this.editTrainingDay = trainerService.editTrainingDay.bind(this);
    }

    clickEventListener = () => {

        if(this.state.title === "") Alert.alert("Tytuł nie może być pusty!");
        else if(this.state.trainingDayDate === "") Alert.alert("Termin treningu nie może być pusty!");
        else {
            let trainingDayDto = {
                "id": this.state.id,
                "title": this.state.title,
                "description": this.state.description,
                "trainingDate": this.state.trainingDayDate,
                "calendarId": this.state.calendarId,
                "note": this.state.note,
                "motivationLevel": this.state.motivationLevel,
                "dispositionLevel":this.state.dispositionLevel,
            };
            this.editTrainingDay(this.state.jwt,trainingDayDto);
        }
    };

    setLoadingFalse(){
        this.setState({
            loading: false
        })
    }

    render() {
        console.log(this.state);
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
                        <Text style={{fontSize:25, fontWeight:'bold',  color:"#ff5a66", marginTop: 30}}>Dzień treningowy</Text>
                        <View style={[styles.InputContainer, {marginTop: 50}]}>
                            <TextInput
                                style={styles.body}
                                placeholder="Tytuł"
                                onChangeText={text => this.setState({ title: text })}
                                value={this.state.title}
                                placeholderTextColor={AppStyles.color.grey}
                            />
                        </View>
                        <View style={[styles.bodyContent, {marginBottom: 20}]}>
                            <DatePicker
                                style={{width: 335, borderWidth: 1,
                                    borderStyle: "solid",
                                    borderColor: AppStyles.color.grey,
                                    height: 50,
                                    marginBottom: 30,
                                    borderRadius: 5}}
                                date={this.state.trainingDayDate}
                                mode="date"
                                placeholder="Data dnia treningowego"
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
                                onDateChange={(date) => {this.setState({trainingDayDate: date})}}
                            />
                        </View>

                        <View style={[styles.InputContainer,{}]}>
                            <TextInput
                                style={[styles.body, {height: 200, justifyContent: 'center',
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
                        <View style={[styles.InputContainer,{}]}>
                            <TextInput
                                style={[styles.body, {height: 200, justifyContent: 'center',
                                    alignItems: 'center'}]}
                                multiline={true}
                                onChangeText={text => this.setState({ note: text })}
                                value={this.state.note}
                                placeholderTextColor={AppStyles.color.grey}
                                disabled={true}
                            />
                        </View>
                    </ScrollView>
                    <TouchableOpacity style={[styles.buttonContainer, styles.button]} onPress={() => {this.clickEventListener()}}>
                        <Text style={styles.buttonText}>Edytuj dzień treningowy</Text>
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
        marginBottom: 45,
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
//
//     render() {
//         return (
//             <View style={styles.container}>
//                 <View style={styles.body}>
//                     <Text style={{fontSize:25, fontWeight:'bold',  color:"#ff5a66"}}>Dodaj dzień treningowy</Text>
//                     <Picker
//                         style={{width: 350, height: 150, marginBottom:20}} itemStyle={{height: 150}}
//                         selectedValue={this.state.charType}
//                         onValueChange={(type) => this.setState({charType: type})}>
//                         <Picker.Item label="Wybierz rodzaj wykresu..." value="" />
//                         <Picker.Item label="Liniowy" value="line" />
//                         <Picker.Item label="Słupkowy" value="bar" />
//                         <Picker.Item label="Kołowy" value="pie" />
//                     </Picker>
//                     <Text style={{padding:5, fontSize: 18}}>Okres rezultatów</Text>
//                     <View style={styles.bodyContent}>
//                         <DatePicker
//                             style={{width: 150}}
//                             date={this.state.trainingDayDate}
//                             mode="date"
//                             placeholder="select date"
//                             format="YYYY-MM-DD"
//                             minDate="2019-05-01"
//                             maxDate="2030-06-01"
//                             confirmBtnText="Potwierdz"
//                             cancelBtnText="Anuluj"
//                             showIcon={false}
//                             customStyles={{
//                                 dateInput: {
//                                     marginLeft: 10
//                                 }
//                             }}
//                             onDateChange={(date) => {this.setState({trainingDayDate: date})}}
//                         />
//
//                     </View>
//
//                     <View style={styles.body}>
//                         <Picker
//                             style={{width: 350, height: 150, marginBottom:20}} itemStyle={{height: 150}}
//                             selectedValue={this.state.selected}
//                             onValueChange={(select) => this.setState({selected: select})}>
//                             <Picker.Item label={"Wybierz rodzaj danych..."} value={""} />
//                             <Picker.Item label={"Wszystkie wyniki"} value={"all"} />
//                             <Picker.Item label={"10 ostatnich wyników"} value={"10last"} />
//                             <Picker.Item label="5 najlepszych wyników" value="10best" />
//                             <Picker.Item label="5 najgorszych wyników" value="10worst" />
//                             <Picker.Item label="Średni poziom motywacji" value="averageMotivation" />
//                             <Picker.Item label="Średni poziom dyspozycji" value="averageDisposition" />
//                         </Picker>
//                     </View>
//                     <TouchableOpacity style={[styles.buttonContainer, styles.button]} onPress={() => {this.clickEventListener()}}>
//                         <Text style={styles.buttonText}>Dodaj dzień treningowy</Text>
//                     </TouchableOpacity>
//                 </View>
//             </View>
//         );
//
//
//
//     }
// }
//
// const styles = StyleSheet.create({
//     container:{
//         flex:1,
//         backgroundColor:"#ffffff",
//         marginBottom: 20
//     },
//     headerContent:{
//         padding:0,
//         alignItems: 'center',
//     },
//     header:{
//         backgroundColor: "#ffffff",
//     },
//     body: {
//         flex: 1,
//         alignItems: 'center',
//         padding:30,
//     },
//     bodyContent:{
//         flexDirection: 'row',
//         flexWrap: 'wrap'
//     },
//
//     buttonContainer: {
//         height:45,
//         flexDirection: 'row',
//         justifyContent: 'center',
//         alignItems: 'center',
//         marginBottom:20,
//         width:300,
//         borderRadius:8,
//         backgroundColor:'transparent'
//     },
//     button: {
//         backgroundColor: "#ff5a66",
//
//         shadowColor: "#808080",
//         shadowOffset: {
//             width: 0,
//             height: 9,
//         },
//         shadowOpacity: 0.50,
//         shadowRadius: 12.35,
//
//         elevation: 19,
//     },
//     buttonText: {
//         color: 'white',
//         fontSize: 18,
//         fontWeight: '600'
//     },
//
//     name:{
//         fontSize:18,
//         flex: 1,
//         justifyContent: 'center',
//         alignItems: 'center',
//         marginTop:30,
//         color:"white",
//         fontWeight:'bold'
//     },
//     name1:{
//         fontSize:25,
//         color:"#ff5a66",
//         fontWeight:'600',
//         marginBottom: 5
//     },
//     email:{
//         fontSize:12,
//         color:"#ff5a66",
//         fontWeight:'600',
//     }
// });
import React, {Component} from 'react';
import {Picker, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import DatePicker from 'react-native-datepicker'
import SplashScreen from "../SplashScreen";


const testData = [
    {"id":"1","discipline":"100m run","description":"lorem ipsum","value":"10.1", "unit": "s", "motivationLevel": 10, "resultDate": "2019-06-21", "dispositionLevel": 4 },
    {"id":"2","discipline":"100m run","description":"lorem ipsum","value":"9.1", "unit": "s", "motivationLevel": 9, "resultDate": "2019-06-21", "dispositionLevel": 5 },
    {"id":"3","discipline":"100m run","description":"lorem ipsum","value":"9.8", "unit": "s", "motivationLevel": 5, "resultDate": "2019-07-06", "dispositionLevel": 4 },
    {"id":"4","discipline":"100m run","description":"lorem ipsum","value":"11.1", "unit": "s", "motivationLevel": 1, "resultDate": "2019-08-11", "dispositionLevel": 2 },
    {"id":"5","discipline":"100m run","description":"lorem ipsum","value":"10.5", "unit": "s", "motivationLevel": 4, "resultDate": "2019-09-20", "dispositionLevel": 3 },
    {"id":"6","discipline":"100m run","description":"lorem ipsum","value":"10.4", "unit": "s", "motivationLevel": 5, "resultDate": "2019-10-27", "dispositionLevel": 3 },
    {"id":"7","discipline":"100m run","description":"lorem ipsum","value":"10.2", "unit": "s", "motivationLevel": 8, "resultDate": "2019-10-29", "dispositionLevel": 3 },
    {"id":"8","discipline":"100m run","description":"lorem ipsum","value":"10.7", "unit": "s", "motivationLevel": 7, "resultDate": "2019-11-10", "dispositionLevel": 2 },
    {"id":"9","discipline":"100m run","description":"lorem ipsum","value":"9.2", "unit": "s", "motivationLevel": 8, "resultDate": "2019-11-19","dispositionLevel": 5 },
    {"id":"10","discipline":"100m run","description":"lorem ipsum","value":"10.1", "unit": "s", "motivationLevel": 7, "resultDate": "2019-11-29", "dispositionLevel": 2 },
    {"id":"111","discipline":"100m run","description":"lorem ipsum","value":"9.5", "unit": "s", "motivationLevel": 5, "resultDate": "2019-12-1", "dispositionLevel": 4 },
];


export default class BalanceScreen extends Component {

    constructor(props) {
        super(props);
        this.state = {
            loading: false,
            settings: true,
            chartType: "",
            data: testData,
            chartData : [],
            selected: "",
            dateFrom:"",
            dateTo:""
        };
        this.setLoadingFalse = this.setLoadingFalse.bind(this);
        this.setSettingsTrue = this.setSettingsTrue().bind(this);
    }

    getBest10(data) {
        return data.sort((a, b) => a.value > b.value).slice(0,10);
    }

    getWorst10(data) {
        return data.sort((a, b) => a.value < b.value).slice(0,10);
    }


    clickEventListener = () => {
        this.setState({loading:true});
        if(this.state.dateTo){
            this.setState({chartData: this.state.data.filter((el) => {
                return new Date(el.resultDate) < new Date(this.state.dateTo);
                })});
            if(this.state.dateFrom){
                this.setState({chartData: this.state.data.filter((el) => {
                        return new Date(el.resultDate) > new Date(this.state.dateFrom);
                    })});
            }
        }
        else {
            if(this.state.dateFrom) {
                this.setState({
                    chartData: this.state.data.filter((el) => {
                        return new Date(el.resultDate) > new Date(this.state.dateFrom);
                    })
                });
            }
        }

        if (this.state.selected === '10best'){
            this.setState({
                chartData: this.getBest10(this.state.chartData)
            })
        }
        else if (this.state.selected === '10worst'){
            this.setState({
                chartData: this.getWorst10(this.state.chartData)
            })
        }
        // else if (this.state.selected === 'motivationLevel'){
        //     this.setState({
        //
        //     })
        // }
        // else if (this.state.selected === 'dispositionLevel'){
        //     this.setState({
        //
        //     })
        // }

    };

    setLoadingFalse(){
        this.setState({
            loading: false
        })
    }

    setSettingsTrue(){
        this.setState({
            loading: false,
            settings: true,
            chartType: "",
            data: testData,
            chartData : [],
            selected: "",
            dateFrom:"",
            dateTo:""
        })
    }

    render() {
        if(this.state.loading) return (<SplashScreen/>);

        if(this.state.settings) return (
            <View style={styles.container}>
                <View style={styles.body}>
                    <Text style={{fontSize:25, fontWeight:'bold',  color:"#ff5a66"}}>Opcje wykresu</Text>
                    <Picker
                        style={{width: 350, height: 150, marginBottom:20}} itemStyle={{height: 150}}
                        selectedValue={this.state.charType}
                        onValueChange={(type) => this.setState({charType: type})}>
                        <Picker.Item label="Wybierz rodzaj wykresu..." value="" />
                        <Picker.Item label="Liniowy" value="line" />
                        <Picker.Item label="Słupkowy" value="bar" />
                        <Picker.Item label="Kołowy" value="pie" />
                        <Picker.Item label="Postępu" value="progress" />
                    </Picker>
                    <Text style={{padding:5, fontSize: 18}}>Okres rezultatów</Text>
                    <View style={styles.bodyContent}>
                        <Text style={{marginTop: 10, fontSize:16}}>Od</Text>
                        <DatePicker
                            style={{width: 150}}
                            date={this.state.dateFrom}
                            mode="date"
                            placeholder="select date"
                            format="YYYY-MM-DD"
                            minDate="2019-05-01"
                            maxDate="2030-06-01"
                            confirmBtnText="Confirm"
                            cancelBtnText="Cancel"
                            showIcon={false}
                            customStyles={{
                                dateInput: {
                                    marginLeft: 10
                                }
                            }}
                            onDateChange={(date) => {this.setState({dateFrom: date})}}
                        />
                        <Text style={{marginLeft: 10, marginTop: 10, fontSize:16}}>Do</Text>
                        <DatePicker
                            style={{width: 150}}
                            date={this.state.dateTo}
                            mode="date"
                            placeholder="select date"
                            format="YYYY-MM-DD"
                            minDate="2019-05-01"
                            maxDate="2030-06-01"
                            confirmBtnText="Confirm"
                            cancelBtnText="Cancel"
                            showIcon={false}
                            customStyles={{
                                dateInput: {
                                    marginLeft: 10
                                }
                            }}
                            onDateChange={(date) => {this.setState({dateTo: date})}}
                        />
                    </View>

                    <View style={styles.body}>

                        <Picker
                            style={{width: 350, height: 150, marginBottom:20}} itemStyle={{height: 150}}
                            selectedValue={this.state.selected}
                            onValueChange={(select) => this.setState({selected: select})}>
                            <Picker.Item label={"Wybierz rodzaj danych..."} value={""} />
                            <Picker.Item label={"Wszystkie"} value={"all"} />
                            <Picker.Item label="10 najlepszych" value="10best" />
                            <Picker.Item label="10 najgorszych" valu="10worst" />
                            <Picker.Item label="Średni poziom motywacji" value="motivationLevel" />
                            <Picker.Item label="Średni poziom dyspozycji" value="dispositionLevel" />
                        </Picker>
                    </View>
                    <TouchableOpacity style={[styles.buttonContainer, styles.loginButton]} onPress={() => {this.clickEventListener()}}>
                        <Text style={styles.buttonText}>Generuj wykres</Text>
                    </TouchableOpacity>
                </View>
            </View>
        );

    }
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:"#ffffff",
        marginBottom: 20
    },
    headerContent:{
        padding:0,
        alignItems: 'center',
    },
    header:{
        backgroundColor: "#ffffff",
    },
    body: {
        flex: 1,
        alignItems: 'center',
        padding:30,
    },
    bodyContent:{
        flexDirection: 'row',
        flexWrap: 'wrap'
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
    loginButton: {
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

    name:{
        fontSize:18,
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop:30,
        color:"white",
        fontWeight:'bold'
    },
    name1:{
        fontSize:25,
        color:"#ff5a66",
        fontWeight:'600',
        marginBottom: 5
    },
    email:{
        fontSize:12,
        color:"#ff5a66",
        fontWeight:'600',
    }
});

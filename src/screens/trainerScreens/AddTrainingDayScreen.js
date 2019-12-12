import React, {Component} from 'react';
import {Picker, StyleSheet, Text, TouchableOpacity, View, Alert} from 'react-native';
import DatePicker from 'react-native-datepicker'
import SplashScreen from "../SplashScreen";
import LineChartComponent from "../../components/balance/LineChartComponent";
import BarChartComponent from "../../components/balance/BarChartComponent";
import PieChartComponent from "../../components/balance/PieChartComponent";


let resultData = [];
export default class AddTrainingDayScreen extends Component {

    constructor(props) {
        super(props);
        this.state = {
            loading: false,
            settings: true,
            chartType: "",
            selected: "",
            dateFrom:"",
            dateTo:"",
            discipline: '100m run'
        };
        this.setLoadingFalse = this.setLoadingFalse.bind(this);
        this.setSettingsTrue = this.setSettingsTrue.bind(this);
    }

    getBest10(data) {
        return data.sort((a, b) => {
            if (parseFloat(a.value) > parseFloat( b.value)) return 1;
            else return -1;
        }).slice(0,5).sort((a, b) => {
            if (new Date(a.resultDate) > new Date(b.resultDate)) return 1;
            else return -1;
        });
    }

    getWorst10(data) {
        return data.sort((a, b) => {
            if (parseFloat(a.value) < parseFloat( b.value)) return 1;
            else return -1;
        }).slice(0,5).sort((a, b) => {
            if (new Date(a.resultDate) > new Date(b.resultDate)) return 1;
            else return -1;
        });
    }


    clickEventListener = () => {
        resultData = testData.sort((a, b) => {
            if (new Date(a.resultDate) > new Date(b.resultDate)) return 1;
            else return -1;
        });

        if(!this.state.charType){
            Alert.alert('Wybierz rodzaj wykresu!');
            return null;
        }
        if(!this.state.selected) {
            Alert.alert('Wybierz rodzaj danych!');
            return null;
        }

        if(this.state.dateTo){
            resultData = resultData.filter((el) => {
                return new Date(el.resultDate) < new Date(this.state.dateTo);
            });

            if(this.state.dateFrom){
                resultData = resultData.filter((el) => {
                    return new Date(el.resultDate) > new Date(this.state.dateFrom);
                });
            }
        }
        else {
            if (this.state.dateFrom) {
                resultData = resultData.filter((el) => {
                    return new Date(el.resultDate) > new Date(this.state.dateFrom);
                });
            }
        }

        if (this.state.selected === '10best'){
            resultData = this.getBest10(resultData);
        }

        else if (this.state.selected === '10worst'){
            resultData = this.getWorst10(resultData);
        }

        else if (this.state.selected === '10last'){
            resultData = resultData.sort((a, b) => {
                if (new Date(a.resultDate) > new Date(b.resultDate)) return 1;
                else return -1;
            }).splice(0,10);
        }
        else if (this.state.selected === 'averageMotivation'){
            let motivationData =[];
            for(let i= 0; i < 5; i++){
                motivationData[i] = {
                    name: `Poziom ${i}`,
                    population: resultData.filter((el) => el.motivationLevel === i).length,
                    color: colors[i].color,
                    legendFontColor: colors[i].color,
                    legendFontSize: 15
                }
            }
            resultData = motivationData.filter(el => el.population > 0);
        }
        else if (this.state.selected === 'averageDisposition'){
            let dispositionData =[];
            for(let i= 0; i < 5; i++){
                dispositionData[i] = {
                    name: `Poziom ${i}`,
                    population: resultData.filter((el) => el.dispositionLevel === i).length,
                    color: colors[i].color,
                    legendFontColor: colors[i].color,
                    legendFontSize: 15
                }
            }
            console.log(dispositionData);
            resultData = dispositionData.filter(el => el.population > 0);
        }
        console.log(resultData);
        this.setState({settings: false});
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
                            <Picker.Item label={"Wszystkie wyniki"} value={"all"} />
                            <Picker.Item label={"10 ostatnich wyników"} value={"10last"} />
                            <Picker.Item label="5 najlepszych wyników" value="10best" />
                            <Picker.Item label="5 najgorszych wyników" value="10worst" />
                            <Picker.Item label="Średni poziom motywacji" value="averageMotivation" />
                            <Picker.Item label="Średni poziom dyspozycji" value="averageDisposition" />
                        </Picker>
                    </View>
                    <TouchableOpacity style={[styles.buttonContainer, styles.button]} onPress={() => {this.clickEventListener()}}>
                        <Text style={styles.buttonText}>Generuj wykres</Text>
                    </TouchableOpacity>
                </View>
            </View>
        );

        if(this.state.charType === 'line') return (
            <LineChartComponent setLoadingFalse = {this.setLoadingFalse} setSettingsTrue = {this.setSettingsTrue} data={resultData}/>
        );
        if(this.state.charType === 'bar') return (
            <BarChartComponent setLoadingFalse = {this.setLoadingFalse} setSettingsTrue = {this.setSettingsTrue} data={resultData}/>
        );
        if(this.state.charType === 'pie' && this.state.selected === 'averageDisposition') return (
            <PieChartComponent name = 'Średni poziom dyspozycji' setLoadingFalse = {this.setLoadingFalse} setSettingsTrue = {this.setSettingsTrue} data={resultData}/>
        );
        if(this.state.charType === 'pie' && this.state.selected === 'averageMotivation') return (
            <PieChartComponent  name = 'Średni poziom motywacji' setLoadingFalse = {this.setLoadingFalse} setSettingsTrue = {this.setSettingsTrue} data={resultData}/>
        )


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
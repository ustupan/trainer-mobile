import React, {Component} from 'react';
import {Picker, StyleSheet, Text, TouchableOpacity, View, Alert} from 'react-native';
import DatePicker from 'react-native-datepicker'
import SplashScreen from "../SplashScreen";
import LineChartComponent from "../../components/balance/LineChartComponent";
import BarChartComponent from "../../components/balance/BarChartComponent";



const testData = [
    {"id":"1","discipline":"100m run","description":"lorem ipsum","value":"10.1", "unit": "s", "motivationLevel": 5, "resultDate": "2019-06-21", "dispositionLevel": 4 },
    {"id":"2","discipline":"100m run","description":"lorem ipsum","value":"9.1", "unit": "s", "motivationLevel": 4, "resultDate": "2019-06-21", "dispositionLevel": 5 },
    {"id":"3","discipline":"100m run","description":"lorem ipsum","value":"11.8", "unit": "s", "motivationLevel": 5, "resultDate": "2019-07-06", "dispositionLevel": 4 },
    {"id":"4","discipline":"100m run","description":"lorem ipsum","value":"11.1", "unit": "s", "motivationLevel": 4, "resultDate": "2019-08-11", "dispositionLevel": 2 },
    {"id":"5","discipline":"100m run","description":"lorem ipsum","value":"12.5", "unit": "s", "motivationLevel": 3, "resultDate": "2019-09-20", "dispositionLevel": 3 },
    {"id":"6","discipline":"100m run","description":"lorem ipsum","value":"12.4", "unit": "s", "motivationLevel": 2, "resultDate": "2019-10-27", "dispositionLevel": 3 },
    {"id":"7","discipline":"100m run","description":"lorem ipsum","value":"10.2", "unit": "s", "motivationLevel": 3, "resultDate": "2019-10-29", "dispositionLevel": 3 },
    {"id":"8","discipline":"100m run","description":"lorem ipsum","value":"9.7", "unit": "s", "motivationLevel": 2, "resultDate": "2019-11-10", "dispositionLevel": 2 },
    {"id":"9","discipline":"100m run","description":"lorem ipsum","value":"9.2", "unit": "s", "motivationLevel": 4, "resultDate": "2019-11-19","dispositionLevel": 5 },
    {"id":"10","discipline":"100m run","description":"lorem ipsum","value":"10.1", "unit": "s", "motivationLevel": 1, "resultDate": "2019-11-29", "dispositionLevel": 2 },
    {"id":"111","discipline":"100m run","description":"lorem ipsum","value":"9.5", "unit": "s", "motivationLevel": 5, "resultDate": "2019-12-1", "dispositionLevel": 4 },
];

let costam = [];
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
            dateTo:"",
            barData: [],
            lineData: [],
            pieDataMotivation: [],
            pieDataDisposition: [],
            discipline: '100m run'
        };
        this.setLoadingFalse = this.setLoadingFalse.bind(this);
        this.setSettingsTrue = this.setSettingsTrue.bind(this);
    }

    getBest10(data) {
        return data.sort((a, b) => {
            if (parseFloat(a.value) > parseFloat( b.value)) return 1;
            else return -1;
        }).slice(0,5);
    }

    getWorst10(data) {
        return data.sort((a, b) => {
            if (parseFloat(a.value) < parseFloat( b.value)) return 1;
            else return -1;
        }).slice(0,5);
    }


    clickEventListener = () => {
        costam = testData;

        if(!this.state.charType){
            Alert.alert('Wybierz rodzaj wykresu!');
            return null;
        }
        if(!this.state.selected) {
            Alert.alert('Wybierz rodzaj danych!');
            return null;
        }

        if(this.state.dateTo){
            costam = costam.filter((el) => {
                console.log(el.resultDate,new Date(el.resultDate) < new Date(this.state.dateTo), this.state.dateTo);
                return new Date(el.resultDate) < new Date(this.state.dateTo);
            });
            this.setState({loading:true});
            this.setState({chartData: this.state.data.filter((el) => {
                    return new Date(el.resultDate) < new Date(this.state.dateTo);
                })}, () => {
                this.setState({loading:false});
            });
            if(this.state.dateFrom){
                costam = costam.filter((el) => {
                    return new Date(el.resultDate) > new Date(this.state.dateFrom);
                });
                this.setState({loading:true});
                this.setState({chartData: this.state.data.filter((el) => {
                        return new Date(el.resultDate) > new Date(this.state.dateTo);
                    })}, () => {
                    this.setState({loading:false});
                });
            }
        }
        else {
            if(this.state.dateFrom) {
                console.log("dasdasd");
                costam = costam.filter((el) => {
                    return new Date(el.resultDate) > new Date(this.state.dateFrom);
                });
                this.setState({loading:true});
                this.setState({
                    chartData: this.state.data.filter((el) => {
                        return new Date(el.resultDate) > new Date(this.state.dateFrom);
                    }, () => {
                        this.setState({loading:false});
                    })
                });
            }
        }

        if (this.state.selected === '10best'){
            costam = this.getBest10(costam);
            this.setState({loading:true});
            this.setState({
                    chartData: this.getBest10(this.state.chartData)
                }, () => {
                    this.setState({loading:false});
                }
            )
        }
        else if (this.state.selected === '10worst'){
            costam = this.getWorst10(costam);
            this.setState({loading:true});
            this.setState({
                chartData: this.getWorst10(this.state.chartData)
            }, () => {
                this.setState({loading:false});

            })
        }
        else {
            this.setState({loading:true});
            this.setState({
                chartData: this.state.chartData
            }, () => {
                this.setState({loading:false});

            })
        }

        // this.state.pieDataMotivation = this.state.chartData.map((el, i)=>{
        //    return (
        //        {
        //            name: el.motivationLevel.toString(),
        //            motivation: ,
        //            color: colors[i],
        //            legendFontColor: "#7F7F7F",
        //            legendFontSize: 15
        //        }
        //    )
        // });

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
                            <Picker.Item label="5 najlepszych" value="10best" />
                            <Picker.Item label="5 najgorszych" value="10worst" />
                        </Picker>
                    </View>
                    <TouchableOpacity style={[styles.buttonContainer, styles.button]} onPress={() => {this.clickEventListener()}}>
                        <Text style={styles.buttonText}>Generuj wykres</Text>
                    </TouchableOpacity>
                </View>
            </View>
        );

        if(this.state.charType === 'line') return (
            <LineChartComponent setLoadingFalse = {this.setLoadingFalse} setSettingsTrue = {this.setSettingsTrue} data={costam}/>
        );
        if(this.state.charType === 'bar') return (
            <BarChartComponent setLoadingFalse = {this.setLoadingFalse} setSettingsTrue = {this.setSettingsTrue} data={costam}/>
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
import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
    TextInput,
    Button,
    TouchableHighlight,
    Alert,
    Image,
    ListView,
    TouchableOpacity,
    FlatList
} from 'react-native';
import {Ionicons} from "@expo/vector-icons";
import DatePicker from "react-native-datepicker";

export default class AthleteResultListScreen extends Component {

    static navigationOptions = ({ navigation }) => {
        const { routeName } = navigation.state;
        return {
            title: routeName,
            headerLeft: (
                <Ionicons
                    style={{ paddingLeft: 10 }}
                    onPress={() => navigation.openDrawer()}
                    name="md-menu"
                    size = {30}
                />
            ),
        };
    };

    constructor(props) {
        console.log(props);
        super(props);
        this.state = {
            trainingDays: [],
            dateFrom:"",
            dateTo:"",
            data: [
                {id: "1", day:1, month: 'Sep'},
                {id: "2", day:2, month: 'Aug'},
                {id: "3", day:1, month: 'Dec'},
                {id: "4", day:12, month: 'Jul'},
                {id: "5", day:3, month: 'Oct'},
                {id: "6", day:2, month: 'Aug'},
                {id: "7", day:1, month: 'Dec'},
                {id: "8", day:12, month: 'Jul'},
                {id: "9", day:3, month: 'Oct'},
                {id: "10", day:2, month: 'Aug'},
                {id: "11", day:1, month: 'Dec'},
                {id: "12", day:12, month: 'Jul'},
                {id: "13", day:3, month: 'Oct'},
                {id: "14", day:2, month: 'Aug'},
                {id: "15", day:1, month: 'Dec'},
                {id: "16", day:12, month: 'Jul'},
                {id: "17", day:3, month: 'Oct'},
                {id: "18", day:2, month: 'Aug'},
                {id: "19", day:1, month: 'Dec'},
                {id: "20", day:12, month: 'Jul'},
                {id: "21", day:3, month: 'Oct'},
            ],
        };
    }

    eventClickListener = (viewId) => {
        this.props.navigation.navigate('EditResultSwitch');
    };

    addTrainingDayListiner = () => {
        this.props.navigation.navigate('AddResultSwitch');
    };
    goToBalanceListiner = () => {
        this.props.navigation.navigate('BalanceSwitch');
    };

    render() {
        return (
            <View style={styles.container}>
                <View style={styles.body}>
                    <Text style={{padding:5, fontSize: 18}}>Okres rezultatów</Text>
                    <View style={styles.bodyContent}>
                        <Text style={{marginTop: 10, fontSize:16}}>Od</Text>
                        <DatePicker
                            style={{width: 150}}
                            date={this.state.dateFrom}
                            mode="date"
                            placeholder="wybierz datę"
                            format="YYYY-MM-DD"
                            minDate="2019-05-01"
                            maxDate="2030-06-01"
                            confirmBtnText="Potwierdź"
                            cancelBtnText="Anuluj"
                            locale={"pl"}
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
                            placeholder="wybierz datę"
                            format="YYYY-MM-DD"
                            minDate="2019-05-01"
                            maxDate="2030-06-01"
                            confirmBtnText="Potwierdź"
                            cancelBtnText="Anuluj"
                            locale={"pl"}
                            showIcon={false}
                            customStyles={{
                                dateInput: {
                                    marginLeft: 10
                                }
                            }}
                            onDateChange={(date) => {this.setState({dateTo: date})}}
                        />
                    </View>
                </View>
                <FlatList
                    style={styles.eventList}
                    data = {this.state.data}
                    keyExtractor={(item) => {
                        return item.id;
                    }}
                    renderItem = {({item}) => {
                        return (
                            <View>
                                <TouchableOpacity onPress={() => this.eventClickListener("row")}>
                                    <View style={styles.eventBox}>
                                        <View style={[styles.eventContent, {borderColor: `#ff5a66`}]}>
                                            <Text  style={styles.eventTime}>20-01-2018</Text>
                                            <Text  style={styles.userName}>Bieg na 100m</Text>
                                            <Text  style={styles.description}>9.1s</Text>
                                        </View>
                                    </View>
                                </TouchableOpacity>
                            </View>
                        )}}/>

                <View style={{position: 'absolute', right: 10, bottom: 16,backgroundColor:"#ff5a66",width: 56, height: 56, borderRadius: 56/ 2,alignItems:'center'}}>
                    <TouchableOpacity onPress={() => this.goToBalanceListiner()}>
                        <Ionicons style = {{color: "#fff", }}
                                  name='md-stats'
                                  size={50} />
                    </TouchableOpacity>
                </View>

            </View>
        );
    }
}

const styles = StyleSheet.create({
    container:{
        backgroundColor: "#ffffff",
        flex:1
    },
    eventList:{
    },
    footer:{
        backgroundColor: 'green',
        flex: 1,
        justifyContent: 'flex-end',
        alignItems: 'center',
        zIndex: 999,
    },
    eventBox: {
        padding:10,
        marginBottom:5,
        flexDirection: 'row',
    },
    eventDate:{
        width:60,
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
    },
    bodyContent:{
        flexDirection: 'row',
        flexWrap: 'wrap',
        alignItems: 'center',
    },
    body: {
        alignItems: 'center',
    },
    eventDay:{
        fontSize:50,
        color: "#ff5a66",
        fontWeight: "600",
    },
    eventMonth:{
        fontSize:16,
        color: "#ff5a66",
        fontWeight: "600",
    },
    eventContent: {
        shadowColor: '#00000021',
        shadowOffset: {
            width: 0,
            height: 6,
        },
        shadowOpacity: 0.37,
        shadowRadius: 7.49,
        elevation: 12,
        flex:1,
        flexDirection: 'column',
        alignItems: 'flex-start',
        marginLeft:10,
        backgroundColor: '#FFFFFF',
        padding:10,
        borderLeftWidth:6,
    },
    description:{
        fontSize:18,
        color: "#646464",
    },
    eventTime:{
        fontSize:20,
        color:"#151515",
    },
    userName:{
        fontSize:18,
        color:"#151515",
    },
});
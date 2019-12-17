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
import deviceStorage from "../../api/deviceStorage";
import athleteService from "../../api/services/athleteService";
import SplashScreen from "../SplashScreen";

export default class ResultListScreen extends Component {

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
        super(props);
        this.state = {
            dateFrom:"",
            dateTo:"",
            resultList: [],
            jwt: ""
        };
        this.loadJwt = deviceStorage.loadJwt.bind(this);
        this.getMyResults = athleteService.getMyResults.bind(this);
        this.loadJwt().then( () => {
            this.setState({loading: true});
            this.getMyResults = athleteService.getMyResults.bind(this);
            this.getMyResults(this.state.jwt);
        });
    }

    componentDidMount() {
        const { navigation } = this.props;
        this.focusListener = navigation.addListener('didFocus', () => {
            if(this.state.jwt !== "") {
                this.state.loading = true;
                this.getMyResults(this.state.jwt);
            }
        });
    }

    eventClickListener = (item) => {
        this.props.navigation.navigate('EditResultSwitch',);
    };

    addTrainingDayListiner = (item) => {
        this.props.navigation.navigate('AddResultSwitch');
    };
    goToBalanceListiner = () => {
        this.props.navigation.navigate('BalanceSwitch');
    };

    render() {
        if(this.state.loading) return (
            <SplashScreen/>
        );
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
                    data = {this.state.resultList.sort((a,b) => {
                        return new Date(a.resultDate) - new Date(b.resultDate);
                    }).filter((el) => {
                        if (this.state.dateTo !== "" && this.state.dateFrom) {
                            return new Date(el.resultDate) < new Date(this.state.dateTo) && new Date(el.resultDate) > new Date(this.state.dateFrom)
                        }
                        else if (this.state.dateTo !== "") return new Date(el.resultDate) < new Date(this.state.dateTo);
                        else if (this.state.dateFrom !== "") return new Date(el.resultDate) > new Date(this.state.dateFrom);
                        else return true
                    })}
                    keyExtractor={(item) => {
                        return item.id.toString();
                    }}
                    renderItem = {({item}) => {
                        return (
                            <View>
                                <TouchableOpacity onPress={() => this.eventClickListener(item)}>
                                    <View style={styles.eventBox}>
                                        <View style={[styles.eventContent, {borderColor: `#ff5a66`}]}>
                                            <Text  style={styles.eventTime}>{item.resultDate}</Text>
                                            <Text  style={styles.userName}>{item.discipline}</Text>
                                            <Text  style={styles.description}>{`${item.value}${item.unit}`}</Text>
                                        </View>
                                    </View>
                                </TouchableOpacity>
                            </View>
                        )}}/>
                <View style={{position: 'absolute', right: 10, bottom: 5}}>
                    <TouchableOpacity onPress={() => this.addTrainingDayListiner()}>
                        <Ionicons style = {{color: "#ff5a66"}}
                                  name='md-add-circle'
                                  size={70} />
                    </TouchableOpacity>
                </View>
                <View style={{position: 'absolute', right: 70, bottom: 16,backgroundColor:"#ff5a66",width: 56, height: 56, borderRadius: 56/ 2,alignItems:'center'}}>
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
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
import deviceStorage from "../../api/deviceStorage";
import trainerService from "../../api/services/trainerService";
import SplashScreen from "../SplashScreen";


const monthNames = ["Styczenia", "Lutego", "Marca", "Kwietnia", "Maja", "Czerwca",
    "Lipica", "Sierpnia", "Września", "Października", "Listopada", "Grudnia"
];

export default class TrainingPlanScreen extends Component {

    constructor(props) {
        super(props);
        this.state = {
            loading:true,
            trainingDays: [],
            calendar: {},
        };
        this.loadJwt = deviceStorage.loadJwt.bind(this);
        this.loadJwt().then( () => {
            this.setState({loading: true});
            this.getCalendarByAthleteId = trainerService.getCalendarByAthleteId.bind(this);
        });
        this.updateScreen = this.updateScreen.bind(this);
    }

    componentWillMount(){
        this._subscribe = this.props.navigation.addListener('didFocus', () => {
            this.updateScreen();
            //Put your Data loading function here instead of my this.LoadData()
        });}

    updateScreen() {
        this.state.loading = true;
        this.getCalendarByAthleteId(this.state.jwt, this.props.navigation.state.params.athleteId);
    }

    eventClickListener = (item) => {
       this.props.navigation.navigate('EditTrainingDaySwitch', {trainingDay: item});
    };

    addTrainingDayListiner = () => {
        this.props.navigation.navigate('AddTrainingDaySwitch', {calendar: this.state.calendar});
    };

    render() {
        if(this.state.loading) return (
            <SplashScreen/>
        );

        if(Object.keys(this.state.calendar).length === 0) return (
            <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
                <Text style={{fontSize:25, fontWeight:'bold',  color:"#ff5a66", marginTop: 30}}>Brak kalendarza</Text>
            </View>
        );
        return (
            <View style={styles.container}>
                <FlatList
                    style={styles.eventList}
                    data = {this.state.calendar.trainingDays.map((trainingDay) => {
                        return {
                            "id": trainingDay.id.toString(),
                            "day": new Date(trainingDay.trainingDate).getDate(),
                            "month":  monthNames[new Date(trainingDay.trainingDate).getMonth()],
                            "year": new Date(trainingDay.trainingDate).getFullYear(),
                            "title": trainingDay.title,
                            "description": trainingDay.description,
                            "calendarId": trainingDay.calendarId,
                            "trainingDate": trainingDay.trainingDate,
                            "note": trainingDay.note,
                            "motivationLevel": trainingDay.motivationLevel,
                            "dispositionLevel":trainingDay.dispositionLevel,
                        }
                    }).sort((a,b) => {
                        return new Date(a.trainingDate) - new Date(b.trainingDate);
                    })}
                    keyExtractor={(item) => {
                        return item.id;
                    }}
                    renderItem = {({item}) => {
                        return (
                            <View>
                                <TouchableOpacity onPress={() => this.eventClickListener(item)}>
                                    <View style={styles.eventBox}>
                                        <View style={styles.eventDate}>
                                            <Text  style={styles.eventDay}>{item.day}</Text>
                                            <Text  style={styles.eventMonth}>{item.month}</Text>
                                            <Text  style={styles.eventYear}>{item.year}</Text>
                                        </View>
                                        <View style={[styles.eventContent, {borderColor: `#ff5a66`}]}>
                                            <Text  style={styles.eventTime}>{item.title}</Text>
                                            <Text  style={styles.description}>{item.description}</Text>
                                        </View>
                                    </View>
                                </TouchableOpacity>
                            </View>
                        )}}/>
                <View style={{position: 'absolute', right: 10, bottom: 0}}>
                    <TouchableOpacity onPress={() => this.addTrainingDayListiner()}>
                        <Ionicons style = {{color: "#ff5a66"}}
                                  name='md-add-circle'
                                  size={70} />
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
        width:90,
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
    },
    eventDay:{
        fontSize:50,
        color: "#ff5a66",
        fontWeight: "600",
    },
    eventMonth:{
        fontSize:13,
        color: "#ff5a66",
        fontWeight: "600",
    },
    eventYear:{
        fontSize:12,
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
        height:100,
        flexDirection: 'column',
        alignItems: 'flex-start',
        marginLeft:10,
        backgroundColor: '#FFFFFF',
        padding:10,
        borderLeftWidth:6,
    },
    description:{
        fontSize:15,
        color: "#646464",
    },
    eventTime:{
        fontSize:18,
        color:"#151515",
    },
    userName:{
        fontSize:16,
        color:"#151515",
    },
});
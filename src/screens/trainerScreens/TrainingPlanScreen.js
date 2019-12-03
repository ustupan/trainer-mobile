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

export default class TrainingPlanScreen extends Component {

    constructor(props) {
        console.log(props);
        super(props);
        this.state = {
            trainingDays: [],
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
        Alert.alert("alert", "event clicked");

    };

    render() {
        return (
            <View style={styles.container}>
                <Text>
                    asdasd
                </Text>
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
                                        <View style={styles.eventDate}>
                                            <Text  style={styles.eventDay}>{item.day}</Text>
                                            <Text  style={styles.eventMonth}>{item.month}</Text>
                                        </View>
                                        <View style={styles.eventContent}>
                                            <Text  style={styles.eventTime}>10:00 am - 10:45 am</Text>
                                            <Text  style={styles.userName}>John Doe</Text>
                                            <Text  style={styles.description}>Lorem ipsum dolor sit amet, elit consectetur</Text>
                                        </View>
                                    </View>
                                </TouchableOpacity>
                            </View>
                        )}}/>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container:{
        backgroundColor: "#DCDCDC",
    },
    contentList:{
        flex:1,
    },
    eventList:{
        marginTop:20,
    },
    eventBox: {
        padding:10,
        marginTop:5,
        marginBottom:5,
        flexDirection: 'row',
    },
    eventDate:{
        flexDirection: 'column',
    },
    eventDay:{
        fontSize:50,
        color: "#0099FF",
        fontWeight: "600",
    },
    eventMonth:{
        fontSize:16,
        color: "#0099FF",
        fontWeight: "600",
    },
    eventContent: {
        flex:1,
        flexDirection: 'column',
        alignItems: 'flex-start',
        marginLeft:10,
        backgroundColor: '#FFFFFF',
        padding:10,
        borderRadius:10
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
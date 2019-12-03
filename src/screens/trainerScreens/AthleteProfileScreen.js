import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
    Image,
    FlatList,
    TouchableOpacity,
    Alert
} from 'react-native';
import deviceStorage from "../../api/deviceStorage";
import trainerService from "../../api/services/trainerService";
import {Ionicons} from "@expo/vector-icons";

export default class AthleteProfileScreen extends Component {

    constructor(props) {
        super(props);
        this.state = {
            modalVisible:false,
            userSelected:[],
            data: [
                {id:"1", value: "trainingPlan", name: "Plan treningowy", icon:"ios-calendar"},
                {id:"2", value:"balance", name: "Rezultaty sportowca", icon:"md-trending-up"},
            ],
            athlete: this.props.navigation.state.params.athlete,
        };
    }

    clickEventListener = (item) => {
        Alert.alert('Message', 'Item clicked. '+item.name);
        this.props.navigation.navigate('TrainingPlanSwitch');
    };

    render() {
        return (
            <View style={styles.container}>
                <View style={styles.header}>
                    <View style={styles.headerContent}>
                        <Image style={styles.avatar}
                               source={{uri: 'https://bootdey.com/img/Content/avatar/avatar1.png'}}/>

                        <Text style={styles.name1}>
                            {this.state.athlete.userName}
                        </Text>
                        <Text style={styles.email}>{this.state.athlete.email}</Text>
                    </View>
                </View>
                <FlatList
                    style={styles.contentList}
                    columnWrapperStyle={styles.listContainer}
                    data={this.state.data}
                    keyExtractor= {(item) => {
                        return item.id;
                    }}
                    renderItem={({item}) => {
                        return (
                            <TouchableOpacity style={styles.card} onPress={() => {this.clickEventListener(item)}}>
                                <Ionicons style = {{color: "#ff5a66", padding: 10}}
                                          name={item.icon}
                                          size={60} />
                                <View>
                                    <Text style={styles.name}>{item.name}</Text>
                                </View>
                            </TouchableOpacity>
                        )}}/>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        marginTop:20,
        marginBottom: 100,
        backgroundColor:"#ffffff"
    },
    headerContent:{
        padding:30,
        alignItems: 'center',
    },
    header:{
        backgroundColor: "#ffffff",
    },
    avatar: {
        width: 130,
        height: 130,
        borderRadius: 63,
        borderWidth: 4,
        borderColor: "#ff5a6f",
        marginBottom:10,
    },
    contentList:{
        flex:1,
    },
    card:{
        shadowColor: '#00000021',
        shadowOffset: {
            width: 0,
            height: 6,
        },
        shadowOpacity: 1.37,
        shadowRadius: 7.49,
        elevation: 12,

        marginLeft: 20,
        marginRight: 20,
        marginTop:20,
        backgroundColor:"white",
        padding: 10,
        flexDirection:'row',
        borderRadius:10,
    },

    name:{
        fontSize:18,
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop:30,
        color:"#ff5a66",
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

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
import {Ionicons} from "@expo/vector-icons";

export default class CalendarListScreen extends Component {

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
            modalVisible:true,
            data: [
                {id:"1", value: "trainingPlan", name: "Trening siłowy", icon:"md-grid"},
                {id:"2", value:"balance", name: "Trening techniki", icon:"md-grid"},
                {id:"5", value:"balance", name: "Trening mentalny", icon:"md-grid"},
                {id:"6", value:"balance", name: "Trening dodatkowy", icon:"md-grid"},
            ],
        };
    }

    clickEventListener = (item) => {
        if(item.name === 'Rezultaty sportowca') this.props.navigation.navigate('BalanceSwitch');
        else this.props.navigation.navigate('TrainingPlanSwitch');
    };

    render() {
        return (
            <View style={styles.container}>
                <View style={styles.header}>
                    <View style={styles.headerContent}>
                        <Text style={styles.email}>Lista planów treningowych</Text>
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
        backgroundColor:"#ff5a6f"
    },
    headerContent:{
        padding:30,
        alignItems: 'center',
    },
    header:{
        backgroundColor:"#ff5a6f"
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
        fontSize:24,
        color:"#fff",
        fontWeight:'700',
    }
});

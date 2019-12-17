import React from "react";
import Users from "../components/lists/UserList.component";
import ShowAthletesContainer from "../containers/trainer/ShowAthletesContainer";
import { Ionicons } from '@expo/vector-icons'
import {Header} from "native-base";
import {
    StyleSheet,
    Text,
    View,
    TouchableOpacity,
    Image,
    Alert,
    ScrollView,
    FlatList,
    Button,
} from 'react-native';

export default class Dashboard extends React.Component {

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

    render() {
        return (
            <View style={styles.container}>
                <View style={styles.header}>
                    <View style={styles.headerContent}>
                        <Image
                            style={styles.drawerImage}
                            source={require('../../assets/drawer-icons/logo.png')} />
                            <Text style={styles.textInfo}>
                                Aplikacja mobilna
                            </Text>

                            <Text style={styles.textInfo}>
                                umożliwiająca zarządzanie
                            </Text>
                            <Text style={styles.textInfo}>
                                procesem treningu sportowców
                            </Text>
                    </View>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    header:{
        backgroundColor: "#ffffff",
        alignItems: "center"
    },
    headerContent:{
        padding:30,
        alignItems: 'center',
    },
    avatar: {
        width: 130,
        height: 130,
        borderRadius: 63,
        borderWidth: 4,
        borderColor: "white",
        marginBottom:10,
    },
    name:{
        fontSize:22,
        paddingTop: 20,
        width: 300,
        color:"#ff5a66",
        fontWeight:'600',
    },
    bodyContent: {
        flex: 1,
        alignItems: 'center',
        padding:30,
    },
    textInfo:{
        fontSize:20,
        marginTop:5,
        fontWeight:'600',
        color: "#ff5a66",
    },
    drawerImage: {
        height: 250,
        width: 250,
        borderRadius: 125,
        marginBottom: 50
    }
});
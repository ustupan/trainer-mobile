import React from "react";
import { StyleSheet, Text, TextInput, View, Image } from "react-native";
import Users from "../components/lists/UserList.component";
import ShowAthletesContainer from "../containers/trainer/ShowAthletesContainer";
import { Ionicons } from '@expo/vector-icons'
import {Header} from "native-base";


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
        return(
            <View>
                <Text>
                    Dashboard
                </Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    icon: {
        width: 24,
        height: 24,
    },
});
import React from "react";
import {View, Text, Image, StyleSheet } from "react-native";
import {Ionicons} from "@expo/vector-icons";
import ShowTrainersContainer from "../../containers/athlete/ShowTrainersContainer";

export default class TrainerList extends React.Component {

    static navigationOptions = ({ navigation }) => {
        const { routeName } = navigation.state;
        return {
            title: 'Trenerzy',
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
            <ShowTrainersContainer navigation={this.props.navigation}/>
        )
    }
}

const styles = StyleSheet.create({
    icon: {
        width: 24,
        height: 24,
    },
});
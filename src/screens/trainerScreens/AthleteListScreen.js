import React from "react";
import {View, Text, Image, StyleSheet } from "react-native";
import ShowAthletesContainer from "../../containers/trainer/ShowAthletesContainer";
import {Ionicons} from "@expo/vector-icons";

export default class AthleteList extends React.Component {

    static navigationOptions = ({ navigation }) => {
        const { routeName } = navigation.state;
        return {
            title: 'Sportowcy',
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
            <ShowAthletesContainer navigation={this.props.navigation}/>
        )
    }
}

const styles = StyleSheet.create({
    icon: {
        width: 24,
        height: 24,
    },
});
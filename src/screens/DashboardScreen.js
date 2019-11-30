import React from "react";
import { StyleSheet, Text, TextInput, View } from "react-native";
import Users from "../components/UserList.component";
import ShowAthletesContainer from "../containers/ShowAthletesContainer";

export default class Dashboard extends React.Component {
    render() {
        return(
                <ShowAthletesContainer/>
        )
    }
}
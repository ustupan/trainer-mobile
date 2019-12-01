import React from "react";
import {View, Text, Image } from "react-native";
import ShowAthletesContainer from "../../containers/trainer/ShowAthletesContainer";

export default class AthleteList extends React.Component {

    render() {
        return(
            <ShowAthletesContainer navigation={this.props.navigation}/>
        )
    }
}
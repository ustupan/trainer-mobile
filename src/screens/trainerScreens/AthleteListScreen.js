import React from "react";
import ShowAthletesContainer from "../../containers/trainer/ShowAthletesContainer";

export default class AthleteList extends React.Component {
    render() {
        return(
            <ShowAthletesContainer navigation={this.props.navigation}/>
        )
    }
}
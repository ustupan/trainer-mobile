import React from 'react';
import UserList from '../../components/lists/UserList.component';
import trainerService from "../../api/services/trainerService";
import SplashScreen from "../../screens/SplashScreen";
import deviceStorage from "../../api/deviceStorage";
import {Alert} from 'react-native';
import athleteService from "../../api/services/athleteService";

export default class ShowTrainersContainer extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            loading: true,
            trainersList: [],
            jwt: ''
        };
        this.loadJwt = deviceStorage.loadJwt.bind(this);
        this.loadJwt().then( () => {
            this.setState({loading: true});
            this.getAthleteTrainers =athleteService.getAthleteTrainers.bind(this);
            this.getAthleteTrainers(this.state.jwt);
        });
    }

    render() {
        if(this.state.loading) return (
            <SplashScreen/>
        );
        else {
            return (<UserList data={this.state.trainersList} />)
        }
    }

}
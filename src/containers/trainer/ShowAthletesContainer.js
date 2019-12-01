import React from 'react';
import UserList from '../../components/lists/UserList.component';
import trainerService from "../../api/services/trainerService";
import SplashScreen from "../../screens/SplashScreen";
import deviceStorage from "../../api/deviceStorage";
import {Alert} from 'react-native';

export default class ShowAthletesContainer extends React.Component {


    constructor(props) {
        super(props);
        this.state = {
            loading: true,
            athleteList: [],
            jwt: ''
        };
        this.loadJwt = deviceStorage.loadJwt.bind(this);
        this.loadJwt().then( () => {
            this.setState({loading: true});
            this.getTrainerAthletes = trainerService.getTrainerAthletes.bind(this);
            this.getTrainerAthletes(this.state.jwt);
        });

    }

    getAthleteById = (id) => {
        let athlete = this.state.athleteList.filter((athlete) => {
            return athlete.id.toString() === id.toString();
        });
        return athlete[0];
    };

    athleteClickEventListener = (id) => {
        let athlete = this.getAthleteById(id);
        this.props.navigation.navigate('TrainerAthleteProfile');
    };

    render() {
        if(this.state.loading) return (
            <SplashScreen/>
        );
        else {
           return (<UserList data={this.state.athleteList} onUserClick={this.athleteClickEventListener.bind(this)}/>)
        }
    }

}
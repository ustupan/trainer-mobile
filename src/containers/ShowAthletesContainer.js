import React from 'react';
import UserList from '../components/UserList.component';
import trainerService from "../api/trainer";
import SplashScreen from "../screens/SplashScreen";
import deviceStorage from "../api/deviceStorage";


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
            this.getTrainerAthletes = trainerService.getTrainerAthletes.bind(this);
            this.getTrainerAthletes(this.state.jwt);
        });

    }

    componentDidMount(){

    };

    render() {

        if(this.state.loading) return (
            <SplashScreen/>
        );
        else {
           return (<UserList/>)
        }
    }

}
import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';
import {AthleteContainer, ProfileContainer, TrainerContainer} from "./AppNavigator";
import SplashScreen from "./src/screens/SplashScreen";
import deviceStorage from "./src/api/deviceStorage";

export default class App extends React.Component{

  constructor(props) {
    super(props);
    this.state = {
      jwt: '',
      loading: true,
      roles: '',
    };

    this.loadJwt = deviceStorage.loadJwt.bind(this);
    this.loadJwt();


  }

  render() {

    if (this.state.loading) {
      return <SplashScreen/>
    }
    else if (!this.state.jwt){
      return ( <ProfileContainer/>)
    }
    else if (this.state.roles.filter((role) => role.includes('ATHLETE')).length > 0){
      return ( <AthleteContainer/>)
    }
    else {
      console.log("A",this.state.roles);
      return ( <TrainerContainer/>)
    }
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

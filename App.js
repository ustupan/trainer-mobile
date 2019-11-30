import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';
import {AppContainer, ProfileContainer} from "./AppNavigator";
import SplashScreen from "./src/screens/SplashScreen";
import deviceStorage from "./src/api/deviceStorage";

export default class App extends React.Component{

  constructor() {
    super();
    this.state = {
      jwt: '',
      loading: true
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
    else {
      return ( <ProfileContainer/>)
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

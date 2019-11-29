import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';
import {AppContainer} from "./AppNavigator";

export default class App extends React.Component{
  render() {
    return (
        <AppContainer/>
    )
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

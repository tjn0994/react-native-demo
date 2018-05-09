import React, { Component } from 'react';
import {AppRegistry, StyleSheet, Text, View} from 'react-native';
import {StackNavigator,} from 'react-navigation';
import Login from './components/Login';
import Register from './components/Register';
import Welcome from './components/Welcome';

export default class App extends Component {
  render() {
    return <RootStack/>;
  }
}

const RootStack = StackNavigator(
  {
    login: {screen: Login},
    register: {screen: Register},
    welcome: {screen: Welcome}
  },
  {
    initialRouteName: 'login'
  }
);

AppRegistry.registerComponent('App', () => App)

// https://reactjs.org/blog/2018/03/27/update-on-async-rendering.html

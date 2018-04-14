import React, { Component } from 'react';
import {AppRegistry, StyleSheet, Text, View} from 'react-native';
import {StackNavigator,} from 'react-navigation';
import RedScreen from './components/RedScreen';
import YellowScreen from './components/YellowScreen';

export default class App extends Component {
  render() {
    return <RootStack/>;
  }
}

const RootStack = StackNavigator(
  {
    Red: {screen: RedScreen},
    Yellow: {screen: YellowScreen},
  },
  {
    initialRouteName: 'Yellow'
  }
);

AppRegistry.registerComponent('App', () => App)

// https://reactjs.org/blog/2018/03/27/update-on-async-rendering.html

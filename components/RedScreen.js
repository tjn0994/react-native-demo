import React from 'react';
import {AppRegistry, StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import {StackNavigator,} from 'react-navigation';

class RedScreen extends React.Component {
  static navigationOptions = {header: null}

  render() {
    const {navigate} = this.props.navigation;
    return(
      <View style={{backgroundColor:'red', flex:1}}>
        <TouchableOpacity onPress={() => navigate('Yellow')}>
          <Text style={{color:'yellow', marginTop: 50}}>Go to yellow screen</Text>
        </TouchableOpacity>
      </View>
    )
  }
}

export default RedScreen

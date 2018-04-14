import React from 'react';
import {AppRegistry, StyleSheet, Text, View, TouchableOpacity, FlatList} from 'react-native';
import {StackNavigator,} from 'react-navigation';

var DATA = [
  {key: "Vitamin A", age: "25"},
  {key: "Vitamin B", age: "23"},
  {key: "Vitamin C", age: "20"},
  {key: "Vitamin D", age: "18"},
];

class YellowScreen extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      data: DATA
    };
  }

  row_data(property) {
    return(
      <View>
        <Text>{property.key}</Text>
        <Text>{property.age}</Text>
      </View>
    )
  }

  static navigationOptions = {header: null}

  render() {
    const {navigate} = this.props.navigation;
    return(
      <View style={{backgroundColor:'yellow', flex:1}}>
        <TouchableOpacity onPress={() => navigate('Red')}>
          <Text style={{color:'red', marginTop: 50}}>Go to red screen</Text>
        </TouchableOpacity>
        <FlatList
          data = {this.state.data}
          renderItem = {({item}) => this.row_data(item)}
        />
      </View>
    )
  }
}

export default YellowScreen

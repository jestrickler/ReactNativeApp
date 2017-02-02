import React, {Component} from 'react';
import {Text, View} from 'react-native';

class Greeting extends Component {
  render() {
    return (
      <Text>Hello {this.props.name}!</Text>
    );
  }
}

export default class PropView extends Component {
  render() {
    return (
      <View style={{alignItems: 'center'}}>
        <Greeting name='Mathew'/>
        <Greeting name='Mark'/>
        <Greeting name='Luke'/>
        <Greeting name='John'/>
      </View>
    );
  }
}

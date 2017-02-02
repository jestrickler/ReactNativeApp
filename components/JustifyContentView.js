import React, {Component} from 'react';
import {View} from 'react-native';

export default class JustifyContentView extends Component {
  render() {
    return (
      // 'flexDirection': 'column', 'row'.
      // 'justifyContent' to 'center', 'space-between'.
      <View style={{
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
      }}>
        <View style={{width: 50, height: 50, backgroundColor: 'powderblue'}}/>
        <View style={{width: 50, height: 50, backgroundColor: 'skyblue'}}/>
        <View style={{width: 50, height: 50, backgroundColor: 'steelblue'}}/>
      </View>
    );
  }
};
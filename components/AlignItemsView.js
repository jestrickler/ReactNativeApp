import React, {Component} from 'react';
import {View} from 'react-native';

export default class AlignItemsView extends Component {
  render() {
    return (
      // 'alignItems': 'center', 'flex-start'
      // 'justifyContent': 'center', 'flex-end'.
      // 'flexDirection': 'column', 'row'.
      <View style={{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'flex-start',
        flexDirection: 'row',
      }}>
        <View style={{width: 50, height: 50, backgroundColor: 'powderblue'}}/>
        <View style={{width: 50, height: 50, backgroundColor: 'skyblue'}}/>
        <View style={{width: 50, height: 50, backgroundColor: 'steelblue'}}/>
      </View>
    );
  }
};
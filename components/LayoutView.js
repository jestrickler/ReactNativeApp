import React, {Component} from 'react';
import {
  StyleSheet,
  View
} from 'react-native';

export default class LayoutView extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.halfHeight}/>
        <View style={styles.quarterHeight}/>
        <View style={[styles.quarterHeight, {backgroundColor: '#CCC'}]}/>
      </View>
    );
  }
};

var styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column'
  },
  halfHeight: {
    flex: .5,
    backgroundColor: '#FF3366'
  },
  quarterHeight: {
    flex: .25,
    backgroundColor: '#000'
  }
});
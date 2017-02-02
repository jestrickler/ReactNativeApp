/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, {Component} from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';

import ImageView from './components/ImageView'
import Login from './components/login/Login'
import TextInputView from './components/TextInputView'

export default class ReactNativeApp extends Component {
  render() {
    return (
      <Login/>
    );
  }
}

AppRegistry.registerComponent('ReactNativeApp', () => ReactNativeApp);

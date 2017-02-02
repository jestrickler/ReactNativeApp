import React, {Component} from 'react';
import {ScrollView, Image, Text} from 'react-native'

export default class ScrollIconView extends Component {
  render() {
    return (
      <ScrollView>
        <Text style={{fontSize: 40}}>Scroll me plz</Text>
        <Image source={require('../img/favicon.png')}/>
        <Image source={require('../img/favicon.png')}/>
        <Image source={require('../img/favicon.png')}/>
        <Image source={require('../img/favicon.png')}/>
        <Image source={require('../img/favicon.png')}/>
        <Text style={{fontSize: 40}}>If you like</Text>
        <Image source={require('../img/favicon.png')}/>
        <Image source={require('../img/favicon.png')}/>
        <Image source={require('../img/favicon.png')}/>
        <Image source={require('../img/favicon.png')}/>
        <Image source={require('../img/favicon.png')}/>
        <Text style={{fontSize: 40}}>Scrolling down</Text>
        <Image source={require('../img/favicon.png')}/>
        <Image source={require('../img/favicon.png')}/>
        <Image source={require('../img/favicon.png')}/>
        <Image source={require('../img/favicon.png')}/>
        <Image source={require('../img/favicon.png')}/>
        <Text style={{fontSize: 40}}>What's the best</Text>
        <Image source={require('../img/favicon.png')}/>
        <Image source={require('../img/favicon.png')}/>
        <Image source={require('../img/favicon.png')}/>
        <Image source={require('../img/favicon.png')}/>
        <Image source={require('../img/favicon.png')}/>
        <Text style={{fontSize: 40}}>Framework around?</Text>
        <Image source={require('../img/favicon.png')}/>
        <Image source={require('../img/favicon.png')}/>
        <Image source={require('../img/favicon.png')}/>
        <Image source={require('../img/favicon.png')}/>
        <Image source={require('../img/favicon.png')}/>
        <Text style={{fontSize: 40}}>React Native</Text>
      </ScrollView>
    );
  }
}
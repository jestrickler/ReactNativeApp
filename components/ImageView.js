import React, {Component} from 'react';
import {
  Image,
  StyleSheet,
  View
} from 'react-native';

export default class ImageView extends Component {
  render() {
    let pic = {
      uri: 'https://upload.wikimedia.org/wikipedia/commons/d/de/Bananavarieties.jpg'
    };
    return (
      <View style={styles.imageContainer}>
        <Image style={styles.image} source={require('./login/images/background.png')} resizeMode='contain' />
      </View>
      //<Image source={require('./login/login_bg.png')} style={{width: 193, height: 110}} />
      //<Image source={pic} style={{width: 193, height: 110}}/>
    );
  }
}

var styles = StyleSheet.create({
  imageContainer: {
    flex: 1,
    alignItems: 'center'
  },
  image: {
    flex: 1
  }
});

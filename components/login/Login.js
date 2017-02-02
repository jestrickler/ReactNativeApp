import React, {Component} from 'react';
import {
  Dimensions,
  StyleSheet,
  View,
  Text,
  TextInput,
  Image
} from 'react-native';

export default class Login extends Component {

  constructor() {
    super();
    this.state = {
      username: '',
      password: ''
    };
  }

  render() {
    return (
      <View style={styles.container}>
        <Image style={styles.bg} source={require('./images/background.png')}/>
        <View style={styles.header}>
          <Image style={styles.mark} source={require('./images/mark.png')}/>
        </View>
        <View style={styles.inputs}>
          <View style={styles.inputContainer}>
            <Image style={styles.inputUsername} source={require('./images/person.png')}/>
            <TextInput
              style={[styles.input, styles.whiteFont]}
              placeholder="Username"
              placeholderTextColor="#FFF"
              value={this.state.username}
              underlineColorAndroid="transparent"
            />
          </View>
          <View style={styles.inputContainer}>
            <Image style={styles.inputPassword} source={require('./images/lock.png')}/>
            <TextInput
              password={true}
              style={[styles.input, styles.whiteFont]}
              placeholder="Password"
              placeholderTextColor="#FFF"
              value={this.state.password}
              underlineColorAndroid="transparent"
            />
          </View>
          <View style={styles.forgotContainer}>
            <Text style={styles.greyFont}>Forgot Password</Text>
          </View>
        </View>
        <View style={styles.signin}>
          <Text style={styles.whiteFont}>Sign In</Text>
        </View>
        <View style={styles.signup}>
          <Text style={styles.greyFont}>Don't have an account?<Text style={styles.whiteFont}> Sign Up</Text></Text>
        </View>
      </View>
    );
  }
}

var windowSize = Dimensions.get('window');
var styles = StyleSheet.create({
  container: {
    backgroundColor: 'transparent',
    flexDirection: 'column',
    flex: 1,
  },
  bg: {
    position: 'absolute',
    left: 0,
    top: 0,
    width: windowSize.width,
    height: windowSize.height
  },

  header: {
    backgroundColor: 'transparent',
    justifyContent: 'center',
    alignItems: 'center',
    flex: 5,
  },
  inputs: {
    flex: 2
  },
  signin: {
    backgroundColor: 'rgba(0,0,0,.4)',
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 10,
    flex: 1
  },
  signup: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1
  },

  mark: {
    width: 150,
    height: 150
  },

  inputContainer: {
    borderWidth: 1,
    borderBottomColor: '#CCC',
    borderColor: 'transparent',
    marginBottom: 10,
    paddingBottom: 5,
    flexDirection:'row'
  },
  inputUsername: {
    marginLeft: 20,
    width: 20,
    height: 20,
  },
  inputPassword: {
    marginLeft: 20,
    width: 20,
    height: 22,
  },
  input: {
    marginLeft: 15,
    paddingTop: 0,
    paddingBottom: 0,
    flex: 1
  },
  forgotContainer: {
    marginRight: 15,
    alignItems: 'flex-end',
  },
  greyFont: {
    color: '#D8D8D8'
  },
  whiteFont: {
    color: 'rgba(255, 255, 255, 1)',
  }
});

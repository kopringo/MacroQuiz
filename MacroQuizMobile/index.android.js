/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Image,
  Button,
  TextInput, Alert
} from 'react-native';

// mquiz.tools37.com

export default class MacroQuizMobile extends Component {
	
	onPressLearnMore() {
		Alert.alert('on Press!');
		}
	
  render() { 
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          Welcome to Macro Quiz...!!!
        </Text>
          <Image source={{uri: 'https://facebook.github.io/react/img/logo_og.png'}} style={{width: 400, height: 400}} />
          <TextInput
          style={{height: 40, width:400}}
          placeholder="What is it?" />
        	  
        	  <Button
        	  onPress={this.onPressLearnMore}
        	  title="Check"
        	  color="#841584"
        	  accessibilityLabel="Learn more about this purple button"
        	/>
       </View>
    );
  }
  
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

AppRegistry.registerComponent('MacroQuizMobile', () => MacroQuizMobile);

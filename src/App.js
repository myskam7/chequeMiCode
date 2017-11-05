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
  View
} from 'react-native';
import { Snap } from './components/layout'


 class App extends Component {
  render(){
    return (
      <Snap />
    );
  }
}

export default App
AppRegistry.registerComponent('App', () => App);


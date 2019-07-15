import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';

import Home from './screen/Home' ; 
import Login from './screen/Login';
import Register from './screen/Register';
import Place from './screen/Place';
import Scan from './screen/Scan';

import { createStackNavigator, createAppContainer } from 'react-navigation';

const Router = createStackNavigator({
  Login : Login,
   Home : Home ,
   Register : Register,
   Place : Place, 
   Scan : Scan
  
}, {headerMode: 'none'});
const Root = createAppContainer(Router);
export default class App extends  Component {
  render() {
    return (
      <Root/>
    );
  }
}



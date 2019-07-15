import React, { Component } from 'react';
import { View, Text } from 'react-native';
import Camera from '../components/camera';

export default class Scan extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <Camera/>
    );
  }
}

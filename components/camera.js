import React, { Component } from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';
import { RNCamera } from 'react-native-camera';
export default class Camera extends Component {
    state = {
        barcodes: [],
      }
      barcodeRecognized = ({ barcodes }) => this.setState({ barcodes });
      renderBarcodes = () => (
        <View>
          {this.state.barcodes.map(this.renderBarcode)}
        </View>
      );
      renderBarcode = ({ bounds, data }) => (
        <React.Fragment key={data + bounds.origin.x}>
          <View
            style={{
              borderWidth: 2,
              borderRadius: 10,
              position: 'absolute',
              borderColor: '#F00',
              justifyContent: 'center',
              backgroundColor: 'rgba(255, 255, 255, 0.9)',
              padding: 10,
              ...bounds.size,
              left: bounds.origin.x,
              top: bounds.origin.y,
            }}
          >
            <Text style={{
              color: '#F00',
              flex: 1,
              position: 'absolute',
              textAlign: 'center',
              backgroundColor: 'transparent',
            }}>{data}</Text>
          </View>
        </React.Fragment>
      );
      
    
      render() {
        return (
          <View style={styles.container}>
            <Text style={styles.welcome}>Scan Qr code to check your mission</Text>
        
            <RNCamera
             ref={ref => {
               this.camera = ref;
             }}
             style={{
               flex: 1,
               width: '100%',
             }}
             onGoogleVisionBarcodesDetected={this.barcodeRecognized}
           >
           {this.renderBarcodes()}
           </RNCamera>
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
      color: "#DF103E",
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
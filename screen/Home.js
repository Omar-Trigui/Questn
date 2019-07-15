import React, { Component } from 'react';

import {
  TextInput,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  KeyboardAvoidingView
} from "react-native";
import { FlatGrid, SectionGrid } from 'react-native-super-grid';
const items = [
  { name: 'Sfax', code: '#1abc9c' }, 
  { name: 'Tunis', code: '#3498db' }, 
  { name: 'Sousse', code: '#34495e' }, 
  { name: 'Sidi Bouzid', code: '#27ae60' },
  { name: 'Hammamet', code: '#8e44ad' }, 
  { name: 'Benzart', code: '#f1c40f' }, 
  { name: 'Nabeul', code: '#e74c3c' }, 
  { name: 'Kef', code: '#95a5a6' }, 
  { name: 'Baja', code: '#d35400' }, 
  { name: 'jerba', code: '#bdc3c7' }, 
];
export default class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }
  

  

  render() {
    return (

     
      <FlatGrid
        itemDimension={130}
        items={items}
        style={styles.gridView}
        // staticDimension={300}
        // fixed
        // spacing={20}
        renderItem={({ item, index }) => (
          <View style={[styles.itemContainer, { backgroundColor: item.code }]} >
            <Text style={styles.itemName} onPress={() => this.props.navigation.navigate('Place')} >{item.name}</Text>
           
          </View>
        )}
      />
  
    );
  }
}

const styles = StyleSheet.create({
  gridView: {
    marginTop: 20,
    flex: 1,
  },
  itemContainer: {
    justifyContent: "center"
    ,alignItems: "center",
    borderRadius: 5,
    padding: 10,
    height: 150,
  },
  itemName: {
    fontSize: 20,
    color: '#fff',
    fontWeight: '300',
   
  },
  itemCode: {
    fontWeight: '600',
    fontSize: 12,
    color: '#fff',
  },
});
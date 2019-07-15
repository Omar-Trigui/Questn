import React, { Component } from 'react';
import {
  TextInput,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,

  Picker
} from "react-native";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
  listenOrientationChange as loc,
  removeOrientationListener as rol
} from "react-native-responsive-screen";
import DatePicker from 'react-native-datepicker'
export default class Register extends Component {
  componentDidMount() {
    loc(this);
  }

  componentWillUnMount() {
    rol();
  }
  state = {
    names: ["male","female"]
  };

  render() {
    return (
      <View style={{
        flex: 1,
        flexDirection: "column",
        alignItems: "stretch",
        backgroundColor: "#F4F4F4"
      }}>
            <TextInput
            
            // Adding hint in Text Input using Place holder.
            placeholder='First Name'
            // Making the Under line Transparent.
            underlineColorAndroid='transparent'
            // Calling the custom TextInputStyleClass.
            style={styles.TextInputStyleClass}
          />
           <TextInput
            
            // Adding hint in Text Input using Place holder.
            placeholder='Last Name'
            // Making the Under line Transparent.
            underlineColorAndroid='transparent'
            // Calling the custom TextInputStyleClass.
            style={styles.TextInputStyleClass}
          />
           <TextInput
            
            // Adding hint in Text Input using Place holder.
            placeholder='Email'
            // Making the Under line Transparent.
            underlineColorAndroid='transparent'
            // Calling the custom TextInputStyleClass.
            style={styles.TextInputStyleClass}
          />
         <TextInput
            // Adding hint in Text Input using Place holder.
            placeholder='Password'
            // Making the Under line Transparent.
            underlineColorAndroid='transparent'
            // Calling the custom TextInputStyleClass.
            secureTextEntry={true}
            style={styles.TextInputStyleClass}
          />
        <DatePicker
        style={{width: '93%',marginTop: 20}}
        date={this.state.date}
        mode="date"
        placeholder="select date"
        format="YYYY-MM-DD"
        minDate="1995-05-01"
        maxDate="2016-06-01"
        confirmBtnText="Confirm"
        cancelBtnText="Cancel"
        customStyles={{
          dateIcon: {
            position: 'absolute',
            left: 0,
            top: 4,
            marginLeft: 1000,
          },
          dateInput: {
            shadowColor: "#000",
            shadowOffset: { width: 0, height: 5 },
            shadowOpacity: 1,
            shadowRadius: 2,
            elevation: 3,
            textAlign: "center",
            marginTop: 30,
            marginLeft: 30,
            height: 50,
            width: wp("85%"),
            borderBottomWidth: 0,
            borderWidth: 5,
            borderColor: "#FFFFFF",
            borderRadius: 20,
            backgroundColor: "#FFFFFF"
          }
          // ... You can check the source to find the other keys.
        }}
        onDateChange={(date) => {this.setState({date: date})}}
      />
         <Picker style={styles.Picker}>
          <Picker.Item label="Male" value="Male" />
          <Picker.Item label="Female" value="Female" />
        </Picker>

        <TouchableOpacity
            style={styles.SubmitButtonStyle}
            activeOpacity={0.5}
            onPress={this.ButtonClickCheckFunction}>
            <Text style={styles.TextStyle}  onPress={() => this.props.navigation.navigate('Login')}> Register </Text>
          </TouchableOpacity>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  SubmitButtonStyle: {
    marginTop: 50,
    paddingTop: 15,
    paddingBottom: 15,
    marginLeft: 30,
    marginRight: 30,
    backgroundColor: "#c4d436",
    borderRadius: 30,
    borderWidth: 1,
    borderColor: "#fff"
  },
  text: {
    justifyContent: "center",
    alignItems: "center"
  },
  textPassword: {
    paddingTop: 10,
    paddingLeft: "60%"
  },
  TextStyle: {
    color: "#fff",
    textAlign: "center",
    fontSize: 16,
    fontWeight: "bold"
  },
  Picker:{
    borderRadius: 20,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 5 },
    shadowOpacity: 1,
    shadowRadius: 2,
    elevation: 3,
    textAlign: "center",
    marginTop: 50,
    marginLeft: 30,
    height: 50,
    width: wp("85%"),
    borderBottomWidth: 0,
    borderWidth: 5,
    borderColor: "#FFFFFF",
    backgroundColor: "#FFFFFF"
    
  },
  TextInputStyleClass: {
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 5 },
    shadowOpacity: 1,
    shadowRadius: 2,
    elevation: 3,
    textAlign: "center",
    marginTop: 30,
    marginLeft: 30,
    height: 50,
    width: wp("85%"),
    borderBottomWidth: 0,
    borderWidth: 5,
    borderColor: "#FFFFFF",
    borderRadius: 20,
    backgroundColor: "#FFFFFF"
  },
  Logo: {
    width: 110,
    height: 110,
    borderRadius: 100,
    backgroundColor: "white"
  },
  stretch: {
    flex: 1,
    marginLeft: 30,
    width: "50%",
    height: "50%",
    resizeMode: "contain"
  }
});
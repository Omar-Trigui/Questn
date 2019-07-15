import React, { Component } from "react";
import {
  TextInput,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  KeyboardAvoidingView
} from "react-native";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
  listenOrientationChange as loc,
  removeOrientationListener as rol
} from "react-native-responsive-screen";

export default class Login extends Component {
  componentDidMount() {
    loc(this);
  }

  componentWillUnMount() {
    rol();
  }
  render() {
    return (
      <View
        style={{
          flex: 1,
          flexDirection: "column",
          alignItems: "stretch",
          backgroundColor: "#F4F4F4"
        }}>
        <View
          style={{
            flex: 0.35,
            backgroundColor: "#c4d436",
            borderBottomLeftRadius: 80,
            alignItems: "center",
            justifyContent: "center"
          }}>
          <View style={styles.Logo}>
            <Image
              style={styles.stretch}
              source={require("../assets/logo.png")}
            />
          </View>
        </View>
        <View style={{ flex: 0.65 }}>
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
          <Text style={styles.textPassword}>Forget Password ?</Text>

          <TouchableOpacity
            style={styles.SubmitButtonStyle}
            activeOpacity={0.5}
            onPress={this.ButtonClickCheckFunction}>
            <Text style={styles.TextStyle}  onPress={() => this.props.navigation.navigate('Home')}> Login </Text>
          </TouchableOpacity>

          <Text style={{ paddingLeft: "25%", marginTop: "22%" }} onPress={() => this.props.navigation.navigate('Register')}>
            Don't have an account ?
            <Text style={{ color: "#c4d436" }}>{""} Register</Text>
          </Text>
        </View>
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
    marginLeft: 10,
    width: "80%",
    height: "8%",
    resizeMode: "contain"
  }
});

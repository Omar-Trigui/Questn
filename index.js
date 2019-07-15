/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
// import {createStackNavigator} from 'react-navigation';
// import Home from './screen/Home' ; 
// import Login from './screen/Login';
// import Register from './screen/Register';
// import {LoginScreen , RegisterScreen , HomeScreen} from './ScreenName' ;

// const App = createStackNavigator({
//     LoginScreen :{
//         screen : Login , 
//         navigationOptions : {
//             headerTitle : "Login"
//         },
//     },
//     RegisterScreen :{
//         screen : Register , 
//         navigationOptions : {
//             headerTitle : "Register"
//         },
//     },
//     HomeScreen :{
//         screen : Home , 
//         navigationOptions : {
//             headerTitle : "Home"
//         },
//     }
// });


AppRegistry.registerComponent(appName, () => App);

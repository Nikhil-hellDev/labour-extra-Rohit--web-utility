import React from 'react';
import { View, Text ,Button,StyleSheet, Dimensions } from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { Appbar } from 'react-native-paper';
import RegisterScreen from "./assets/Register";
import { getStatusBarHeight } from 'react-native-status-bar-height';
import LoginScreen from "./assets/login";
import * as Font from 'expo-font';
import catScreen from "./assets/category";
import homepageScreen from "./assets/homepage";
import SubCatScreen from "./assets/subcat";
import welcomeScreen from "./assets/welcome";
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { ScrollView } from 'react-native-gesture-handler';
import ProfileScreen from "./assets/profile";
import {Container} from 'native-base';
import fetchScreen from './assets/fetching';
//import firebase from 'firebase';
import NavigationDrawerStructure from './assets/check'
import registeragScreen from './assets/registerag';
//import checkScreen from './assets/check';
//import Articles from './assets/Artical';




export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { isLoading: true }
  }
  async componentDidMount() {
    await Font.loadAsync({
      'Roboto': require('native-base/Fonts/Roboto.ttf'),
      'Roboto_medium': require('native-base/Fonts/Roboto_medium.ttf'),
    })
     this.setState({ isLoading: false, });
  }
  render() {
      let {height, width} = Dimensions.get('window');
      console.log(height);
      console.log(width);
    if (this.state.isLoading) {
      return (
        <Container>
          <Text style={{ fontSize: 50, textAlign: 'center' }}>SPLASH SCREEN</Text>
        </Container>
      )
    }
    return (
      <Container>
            <AppContainer/>
      </Container>
    )
  }
}
const AppNavigator = createStackNavigator(
  {
    welcome: {
      screen: welcomeScreen,
    },
    login:LoginScreen,
    homepage: createStackNavigator({

      screen:homepageScreen,
      category: createStackNavigator({
         screen:catScreen ,
         profile:ProfileScreen ,
      
         subcat:createStackNavigator({
            screen:SubCatScreen,   
         },
            {
              header:false,
              headerMode: 'none',
              navigationOptions: {
                headerVisible: false,
              },
              },
          ),
         
        },
          {
          header:false,
          headerMode: 'none',
          navigationOptions: {
            headerVisible: false,
          },
          },
      ),
    }
      ,{
        header:false,
        headerMode: 'none',
        navigationOptions: {
          headerVisible: false,
        },
        },
      ),
    Register: createStackNavigator({
      screen:RegisterScreen
    },
      {
        header:false,
        headerMode: 'none',
        navigationOptions: {
          headerVisible: false,
        },
        },
      ),
      /*orderscreen:{
        screen:OrderDetailsScreen,
      },
      order:{
        screen:OrderScreen,
      }*/
      
  },
  {
  header:false,
  headerMode: 'none',
  navigationOptions: {
    headerVisible: false,
  },
 
  },
);
/*
const AppNavigator = createStackNavigator(
	{ 
		welcome:welcomeScreen,
	  Register:RegisterScreen,
	  login:LoginScreen,
	  homepage:homepageScreen,
	  profile:ProfileScreen,
    category:catScreen,
    subcat:SubCatScreen,
    check:NavigationDrawerStructure,
fetch:fetchScreen,
	},
	{
		initialRouteName:'welcome',
	}
  );
  */
	const AppContainer = createAppContainer(AppNavigator);

const styles = StyleSheet.create(
{
	container:
	{
		flex:1,
		backgroundColor:'#fff',
	}
});

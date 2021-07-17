
<Button   style={{marginTop:hp('10%') }}
title="Login Here"
onPress={()=>this.props.navigation.navigate('login')}
		/>
		<Button style={{marginTop:hp('10%') }}
title="Register Here"
onPress={()=>this.props.navigation.navigate('Register')}
		/>


        
    async test() {
        await fetch('http://192.168.137.1:3000/admin/checkadminlogin', {
          method: 'POST', // Here you're saying that you want to make a POST request. Could be any method, like a GET, for example.
          headers: '', // You can specify your requisition headers here. That line is optional.
          body: { // Here's the fun part. Put your data here.
            "uname": this.state.uname,
            "pass": this.state.pass
          }
        })
        .then(response => response.json()) 
        .then(serverResponse => console.warn(serverResponse))
      }
      state = {
          uname: '',
          pass:''
        };
  

        

        <View style={styles.container}>
              
<Text>HI this is the home page screen</Text>
       <Button mode="contained" onPress={() => this.props.navigation.navigate('category')}>
    Press me
  </Button>
</View>





 ////firebase =>>
 {
  "project_info": {
    "project_number": "515790733577",
    "firebase_url": "https://labourmanagement-8b62a.firebaseio.com",
    "project_id": "labourmanagement-8b62a",
    "storage_bucket": "labourmanagement-8b62a.appspot.com"
  },
  "client": [
    {
      "client_info": {
        "mobilesdk_app_id": "1:515790733577:android:e79a74f65b17005c2e53d8",
        "android_client_info": {
          "package_name": "com.FRS.UTILITY"
        }
      },
      "oauth_client": [
        {
          "client_id": "515790733577-jvp4mipiacntkc4dck7lpcmqm2ias51p.apps.googleusercontent.com",
          "client_type": 3
        }
      ],
      "api_key": [
        {
          "current_key": "AIzaSyCwvHGYFLhJDvMSf7SJUkOBmLQlDqD4AUU"
        }
      ],
      "services": {
        "appinvite_service": {
          "other_platform_oauth_client": [
            {
              "client_id": "515790733577-jvp4mipiacntkc4dck7lpcmqm2ias51p.apps.googleusercontent.com",
              "client_type": 3
            }
          ]
        }
      }
    }
  ],
 "configuration_version": "1"





 ///login page => 
 fetch('http://192.168.137.1:3000/admin/checkadminlogin')
 .then(res => res.json())
 .then(res => {
     this.setState({adminId: res })
     this.setState({adminPassword: res })
 })
 .catch((error) => {
     console.log(error);
 });
console.log(this.state.adminId);
console.log(this.state.adminPassword);
}
Next() {
this.props.navigation.navigate('homepage');
}



//onPress={() => this.props.navigation.navigate('homepage')}//{ this. componentDidMount.bind(this) }


// To Configure react native app with cloud of Google Firebase database !
var config = {
  apiKey: "AIzaSyBgkOPBcTa-rNxIgd7jMu_0pWH6-f1Nhd8",
  authDomain: "labourmanagement-8b62a.firebaseapp.com",
  databaseURL: "https://labourmanagement-8b62a.firebaseio.com",
  projectId: "labourmanagement-8b62a",
  storageBucket: "",
  messagingSenderId: "515790733577"

};
firebase.initializeApp(config);

firebase.database().ref('userregister/7').set(
{
  name:this.state.userName,
  age:this.state.userAge,
  gender:this.state.userGender,
  email:this.state.userEmail,
  phoneno:this.state.userPhoneNo,
  address:this.state.userAddress,
  psssword:this.state.UserPassword,
})






import React from 'react';
import { View, Text ,Button,StyleSheet, Dimensions } from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { Appbar } from 'react-native-paper';
import RegisterScreen from "./assets/Register";
import { getStatusBarHeight } from 'react-native-status-bar-height';
import LoginUser from "./assets/login";
import * as Font from 'expo-font';
import catScreen from "./assets/category";
import homepageScreen from "./assets/homepage";
import SubCatScreen from "./assets/subcat";
 import welcomeScreen from "./assets/welcome";
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { ScrollView } from 'react-native-gesture-handler';
import ProfileScreen from "./assets/profile";
import {Container} from 'native-base';
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
		welcome:welcomeScreen,
	  Register:RegisterScreen,
	  login:LoginUser,
	  homepage:homepageScreen,
	  profile:ProfileScreen,
    category:catScreen,
    subcat:SubCatScreen,
    registerag:registeragScreen,
    check:NavigationDrawerStructure,
	},
	{
		initialRouteName:'welcome',
	}
  );
  
	const AppContainer = createAppContainer(AppNavigator);

const styles = StyleSheet.create(
{
	container:
	{
		flex:1,
		backgroundColor:'#fff',
	}
});


/*    
function Category(){
  const classes = useStyles();
  console.log(setCategory);
  const [getCategory,setCategory]=useState('')
  const [getMessage,setMessage]=useState('')
} */


  /*
 handleSubmit=async()=>{
// let body={categoryname:getCategory,icon:getIcon}
// console.log(body)
var formData=new FormData()
formData.append('username',getCategory) 
/*formData.append('categoryname',getCategory) 
formData.append('categoryname',getCategory) 
formData.append('categoryname',getCategory) 
formData.append('categoryname',getCategory) 
formData.append('categoryname',getCategory) 
formData.append('categoryname',getCategory) 

var config={headers:{'content-type':'multipart/form-data'}}
var result= await postData('admin/checksignup',formData,config)

if(result.result)
{ //alert("Record Submitted")
 setMessage('Record Submitted')
 console.log('sucessfull');
}
else{
// alert('Fail to Submit Record')
setMessage('Fail to Submit Record')
console.log('unsucessfull');

}
}     
*/


    /* const URL = 'https://labourmanagement-8b62a.firebaseio.com/userregister.json'
     
      axios ({
           method:"post",
           url:URL,
          data:this.state
       }).then( response => console.log(response.data))
*/

//import React from 'react';
//import { View, Text ,Button,StyleSheet, Dimensions } from 'react-native';
//import { createAppContainer } from 'react-navigation';
//import * as Fonpm 
//nt from 'expo-font';
//import MyScreen from './MyScreen'
//import { createStackNavigator } from 'react-navigation-stack';
//import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

//import { getStatusBarHeight } from 'react-native-status-bar-height';
/*
class HomeScreen extends React.Component
{
	static navigationOptions = {
		title :'Home',
	};
render()
{
	return(
<View style={styles.container}>
<Text>Home Screen</Text>
<Button
title="Login Here"
onPress={()=>this.props.navigation.navigate('About')}
		/>
		<Button
title="Register Here"
onPress={()=>this.props.navigation.navigate('About')}
		/>
		</View>);
}
}

class AboutScreen extends React.Component
{
	static navigationOptions = {
		title :'About',
	};
render()
{
	return(
<View style={styles.container}>
<Text>About Screen</Text>
<Button
title="go to home"
onPress={()=>this.props.navigation.navigate('Home')}
		/>
		</View>);
}
}

const AppNavigator = createStackNavigator(
{
	Home: HomeScreen,
	About: AboutScreen,
},
{
	initialRouteName:'Home',
defaultNavigationOption:
{
	headerStyle:{
		backgroundColor:'#f4511e',
	},
headerTintColor:'#fff',
headerTintStyle:{
	fontWeight:'bold',
},
},
}
);

const AppContainer = createAppContainer(AppNavigator);
export default class App extends React.Component
{
	render()
	{
		return <AppContainer/>;
	}
}
const styles = StyleSheet.create(
{
	container:
	{
		flex:1,
		backgroundColor:'#fff',
		justifyContent:"center",
		alignItems:"center",
	}
});
*/
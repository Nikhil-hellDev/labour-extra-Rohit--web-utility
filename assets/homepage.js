import React from 'react';
import { View, Text ,StyleSheet ,Image} from 'react-native'; 
import {Button , TextInput } from 'react-native-paper';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { createDrawerNavigator } from 'react-navigation-drawer';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

class MyhomepageScreen extends React.Component
{
	static navigationOptions = {
		drawerLabel:'Home page',
    };
    render()
    { 
        return(
        <View style={styles.container}>
              
        <Image style={{marginTop:hp('10%')  }} source={require('./home.jpg')}  style={styles.image1} />
        <Image style={{marginTop:hp('5%')  }} source={require('./company.jpg')} style={styles.image1} />
        <Image style={{marginTop:hp('10%')  }} source={require('./download.jpg')} style={styles.image1} />
        <Image style={{marginTop:hp('5%')  }} source={require('./Utility.jpg')} style={styles.image1} />
        <Button transparent onPress={() => this.props.navigation.navigate('profile')}>
                      <Image source={require('./company.jpg')} style={{height:hp('8%'),width: wp('14%'),borderRadius:50}} />
                  </Button>
               <Button mode="contained" onPress={() => this.props.navigation.navigate('notifications')}>
            Press me
          </Button>
        </View>       
        );
    }
}

class myNotificationScreen extends React.Component
{
    static navigationOptions = {
		drawerLabel:'notifications',
    };
    render()
    {
        return(
            <View>
                <Text>Hi this is notification page</Text> 
            <Button
            onPress={()=> this.props.navigation.navigate.goBack('Home')}
            title="go back home"
            />
            </View>
        );
    }  
}
const MyDrawerNavigator = createDrawerNavigator({
    Home:{screen:MyhomepageScreen,
    },
    notifications:{screen:myNotificationScreen,},
});

const stackcontainer = createStackNavigator(
    {
        defaulthome:MyDrawerNavigator
    },

)
const AppContainer = createAppContainer(stackcontainer);

export default class homepageScreen extends React.Component{
    render()
    {
        return<AppContainer/>
    }
}
const styles = StyleSheet.create(
    {
        container:
        {
            flex:1,
            backgroundColor:'#fff',
        
        },
        image1: {
            height:hp('12%'),
            width: wp('20%'),
             alignSelf:"center",
          },
    });
    
import React from 'react';
import { View, Text ,StyleSheet,Button,Image } from 'react-native'; 
import { TextInput } from 'react-native-paper';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

export default class welcomeScreen extends React.Component
{	  
	static navigationOptions = {
        title :'welcome ',
        alignSelf:"center",
    };
render()
{
	return(
<View style={{width:wp('100%'), alignSelf:"center" ,marginTop:hp('10%')}}>
<Image style={{marginTop:hp('10%')  }} source={require('./Utility.jpg')} style={styles.image1} />

<Text style={{alignSelf:"center" , marginTop:hp('10%')}}>If you are already then Login </Text>
<Button style={{marginTop:hp('5%'),
      width:wp('60%'),
      marginBottom: hp('5%'),
    }}
          title="LOGIN"
          onPress={()=>this.props.navigation.navigate('login')}
        />		

<Text style={{marginTop:hp('6%') , alignSelf:"center" }}>If you are not register then register </Text>
<Button
          title="REGISTER"
          onPress={()=>this.props.navigation.navigate('Register')}
        />
		</View>);
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
            height:hp('30%'),
            width: wp('90%'),
             alignSelf:"center",
          },
    });
    
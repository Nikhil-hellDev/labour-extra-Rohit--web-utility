import React from 'react';
import { View, Text ,StyleSheet, AsyncStorage, Alert } from 'react-native'; 
import {Button , TextInput,Appbar } from 'react-native-paper';
import { Content, Form } from 'native-base';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { ScrollView } from 'react-native-gesture-handler';
import axios from 'axios';
//import { NavigationContext } from 'react-navigation';
import firebase from 'firebase';
import { postData } from './FetchServices';

export default class LoginScreen extends React.Component
{
    static navigationOptions = {
		title :'Login',
    };
    constructor(props)
    {super(props);
    this.state = {
        adminId: '',
        adminPassword:''
      };

         }    
          async next() {
            console.log("call",this.state)
          let body={
             'adminId':this.state.adminId,
             'adminPassword':this.state.adminPassword
          }
          console.log(body)
          let result=await postData('admin/checkadminlogin',body)
          console.log(result)
           if(result === true){
           //Alert.alert('valid UID/Password')
           this.props.navigation.navigate('Register')     
           }
           else{
             Alert.alert('Invalid UID/Password')
           }
         }
      render()
    {
        return(
            <View style={styles.container}>
            <Content>
<ScrollView style={{width:wp('90%'), alignSelf:"center"}}>
<Text style={{alignSelf:'center', marginTop:hp('5%'), color:'blue', fontSize:hp('8%'),borderBottomWidth:0, borderBottomColor:'#fbb615'}}>LOGIN</Text>
<Form style={{marginTop:hp('8%')}}>

<TextInput
        label='User Name'
       value={this.state.adminId}
        onChangeText={(adminId) => this.setState({ adminId })}
      />
      <TextInput style={{marginTop:hp('3%')}}
        label='Password'
        value={this.state.adminPassword}
        onChangeText={(adminPassword) => this.setState({ adminPassword })}
      />
      <Button  style={{marginTop:hp('3%')}} mode="contained"  onPress={ ()=>this.next() }>
    Login
  </Button>
  </Form>
  </ScrollView>
  </Content>
</View>
        )
    }
}
const styles = StyleSheet.create(
    {
        container:
        {
            flex:1,
            backgroundColor:'#fff',
         
        }
    });
    
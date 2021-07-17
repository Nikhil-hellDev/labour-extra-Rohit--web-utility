import React from 'react';
import { View, Text ,StyleSheet } from 'react-native'; 
import {Button , TextInput } from 'react-native-paper';
import { Content, Form ,Container ,Item ,Label,Header,Left,Body,Title, Icon} from 'native-base';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { ScrollView } from 'react-native-gesture-handler';
import { getStatusBarHeight } from 'react-native-status-bar-height';
import firebase from 'firebase';
import axios from 'axios';
import {postData} from './FetchServices'
import homepageScreen from './homepage';

    
export default class RegisterScreen extends React.Component
{
	//static navigationOptions = {
		//title :'Register',
    //};
    constructor(props) {
      super(props);
  
      this.state = {
        userName: '',
        userAge:'',
        userGender:'',
        userEmail:'',
        userPhoneNo:'',
        userAddress:'',
        UserPassword:'',
        cpass:''
     
      }
    }
  
    async next() {
      console.log("call",this.state)
    let body={
       'userName':this.state.userName,
       'userAge':this.state.userAge,
       'userGender':this.state.userGender,
       'userEmail':this.state.userEmail,
       'userPhoneNo':this.state.userPhoneNo,
       'userAddress':this.state.userAddress,
       'UserPassword':this.state.UserPassword
    }
    console.log(body)
    let result=await postData('admin/checksignup',body)
    console.log(result)
     if(result){
      Alert.alert('data submited successfully')
      // this.props.navigation.navigate('login')     
     }
     else{
       Alert.alert('data not submited ')
     }  
  }
  render()
    {
        return(
          <Container style={styles.Container1}>
          <Header style={{backgroundColor:'#00B1E1'}}>
       <Left>
                  /<Button transparent onPress={() => this.props.navigation.navigate('Home')}>
                  </Button>
                </Left>
                <Body>
                 <Title>Labour Management</Title>
                </Body>
              </Header>
<View style={styles.container}>
<Content>
<ScrollView style={{width:wp('90%'), alignSelf:"center"}}>
<Text style={{alignSelf:'center', marginTop:hp('1%'), color:'blue', fontSize:hp('8%'),borderBottomWidth:0, borderBottomColor:'#fbb615'}}>REGISTER</Text>
<Form action="register">
<TextInput
        label='User Name'
        value={this.state.userName} 
        onChangeText={text => this.setState({ userName:text })}
      />
      <TextInput
        label='Age'
        value={this.state.userAge}
        onChangeText={text => this.setState({ userAge:text })}
      />
      <TextInput
        label='Gender'
        value={this.state.userGender}
        onChangeText={text => this.setState({ userGender:text })}
      />

      <TextInput
        label='Gmail Id'
        value={this.state.userEmail}
        onChangeText={text => this.setState({ userEmail:text })}
      />
      <TextInput
        label='Phone no.'
       value={this.state.userPhoneNo}
        onChangeText={text => this.setState({userPhoneNo:text })}
      />
      <TextInput
        label='Address'
       value={this.state.userAddress}
        onChangeText={text => this.setState({ userAddress:text })}
      />
      <TextInput
        label='Password'
        value={this.state.UserPassword}
        onChangeText={text => this.setState({ UserPassword:text })}
      />
      <TextInput
        label='Confirm Password'
        value={this.state.cpass}
        onChangeText={text => this.setState({ cpass:text })}
      />
      </Form>
      <Button style={{marginTop:hp('2%')}} mode="contained"   onPress={ ()=>this.next() }> 
         Register</Button>
  </ScrollView>
  </Content>
</View>
</Container>
        )

    }
}
const styles = StyleSheet.create(
  {
    Container1:{
      flex:1,
      paddingTop: getStatusBarHeight(),
      height: 54 + getStatusBarHeight()
    },
      container:
      {
          flex:1,
          backgroundColor:'#fff',
      }
  });
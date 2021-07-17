import React from 'react';
import {StyleSheet,Text, Image,View, ScrollView} from 'react-native';
import {Card, CardItem, Body ,Header, Left, Button, Icon ,Title} from 'native-base';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

 export default class ProfileScreen extends React.Component{
    static navigationOptions = {
        title: 'Profile',
        headerStyle: { backgroundColor: '#00B1E1' },
        headerTitleStyle: { 
            color: 'white',
            alignSelf:"center",
        }
    };
     render(){
         return(
            <View style={styles.Container1}>
                
                <ScrollView>
                    <View style={{alignSelf:'center'}}>
                        <Image source={require('./CO.png')} style={{height:hp('20%'),width: wp('90%'),borderRadius:10, marginTop:hp('10%')}} />
                    </View>

                    <View style={{marginTop:hp('5%') , width: wp('90%') ,height:hp('50%') , alignSelf:"center"  }}>
                         <Card>
                            <CardItem style={{height:hp('8%')}}>
                                <Text>ID</Text>
                            </CardItem>
                        </Card>
                        <Card>
                            <CardItem style={{height:hp('8%')}}>
                                <Text>Name</Text>
                            </CardItem>
                        </Card>
                        <Card>
                            <CardItem style={{height:hp('8%')}}>
                                <Text>Email</Text>
                            </CardItem>
                        </Card>
                        <Card>
                            <CardItem style={{height:hp('8%')}}> 
                                <Text>Phone</Text>
                            </CardItem>
                        </Card>
                        <Card>
                            <CardItem style={{height:hp('8%')}}>
                                <Text>Address</Text>
                            </CardItem>
                        </Card>
                    </View>
                </ScrollView>
            </View>
         )
     }
 }

 const styles= StyleSheet.create({
    Container1:{
      flex:1,
    },
  });
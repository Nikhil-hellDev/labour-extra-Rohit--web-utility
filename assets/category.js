import React from 'react';
import {StyleSheet,Text, Image} from 'react-native';
import { getStatusBarHeight } from 'react-native-status-bar-height';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import {Container ,Card, CardItem, Body ,Header, Left, Button, Icon ,Title, Right, Separator} from 'native-base';
import { ScrollView } from 'react-native-gesture-handler';


export default class CatScreen extends React.Component {
  static navigationOptions = {
    title: 'UTILITY',
    headerStyle: { backgroundColor: '#00B1E1' },
    headerTitleStyle: { 
        color: 'white',
    },
  paddingTop: getStatusBarHeight(),
  height: 54 + getStatusBarHeight(),
  }
  render() {
    return (
        <Container style={styles.Container1}>
              <Header style={{backgroundColor:'#00B1E1'}}>

                <Body>
                  <Title>Categories</Title>
                </Body>
                <Right>
                  <Button transparent onPress={() => this.props.navigation.navigate('profile')}>
                      <Image source={require('./Utility.jpg')} style={{height:hp('8%'),width: wp('14%'),borderRadius:50}} />
                  </Button>
                </Right>
              </Header>

              <ScrollView style={{alignContent:'center'}}>
                
                <Card style={styles.card1} >
                    <CardItem button onPress={() => this.props.navigation.navigate('subcat')}>
                      <Image source={require('./Utility.jpg')} style={styles.ImageInCard} />
                    </CardItem>
                </Card>

                <Card style={styles.card1} >
                    <CardItem button onPress={() => this.props.navigation.navigate('subcat')}>
                      <Image source={require('./Utility.jpg')} style={styles.ImageInCard} />
                    </CardItem>
                </Card>

                <Card style={styles.card1} >
                    <CardItem button onPress={() => this.props.navigation.navigate('subcat')}>
                      <Image source={require('./Utility.jpg')} style={styles.ImageInCard} />
                    </CardItem>
                </Card>

                <Card style={styles.card1} >
                    <CardItem button onPress={() => this.props.navigation.navigate('subcat')}>
                      <Image source={require('./Utility.jpg')} style={styles.ImageInCard} />
                    </CardItem>
                </Card>

              </ScrollView>

        </Container>
    );
  }
}
const styles= StyleSheet.create({
  Container1:{
    flex:1,
    paddingTop: getStatusBarHeight(),
    height: 54 + getStatusBarHeight()
  },
  input1:{
    borderWidth:2,
    borderColor:'#fbb615',
  },
  card1:{
    borderRadius:15,
    marginTop:hp('3%'),
    marginBottom:('3%'),
    width:wp('90%'),
    alignSelf:'center',
  },
  ImageInCard:{
    height:hp('15%'),
    width: null,
    flex:1,
  }
});
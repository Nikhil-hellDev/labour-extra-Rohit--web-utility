import React from 'react';
import {StyleSheet,Text, Image,View} from 'react-native';
import { getStatusBarHeight } from 'react-native-status-bar-height';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import {Container ,Card, CardItem, Body ,Header, Left,Button, Icon ,Title, Right} from 'native-base';
import { ScrollView } from 'react-native-gesture-handler';

export default class SubCatScreen extends React.Component {
  constructor() {
    super();
    this.state = {
      count: 0,
      countm:0,
      countn:0
    };
  }

  incCount() {
    this.setState({
      count:this.state.count+1,
    })
  }
      incCountm() {
        this.setState({
      countm:this.state.countm+1,
    })
  }
      incCountn() {
        this.setState({
      countn:this.state.countn+1
    })
  }
  
  decCount() {
    this.setState({
      count: this.state.count - 1,
    });
  };
      decCountm() {
        this.setState({
      countm: this.state.countm - 1,
    });
  };
      decCountn() {
        this.setState({     
      countn: this.state.countn - 1,
    });
  };


  render() {
    let { count,countm,countn } =this.state;
    if(count<0 || countm<0 || countn<0)
    {
      alert('Labour Can not be below Zero');
        this.setState({
          count: this.state.count * 0 ,
          countm: this.state.countm * 0 ,
          countn: this.state.countn * 0 ,
        });
        console.disableYellowBox = true;
    }
    return (
        <Container style={styles.Container1}>
              
              <ScrollView style={{alignContent:'center',alignSelf:'center'}}>
                
                <Card style={styles.card1} >
                    <CardItem button >
                        <Text style={styles.text1} >TV</Text>
                    </CardItem>

                    <CardItem style={{height:hp('4%')}}>

                        <Button style={{height:hp('4%'), backgroundColor:'lightgreen',marginRight:wp('1%')}} onPress={ () => this.incCount()}>
                            <Icon style={{height:hp('4%')}} name="ios-add"  />
                        </Button>

                        <Text  style={{fontSize:hp('4%')}}>{count}</Text>

                        <Button style={{height:hp('4%'), backgroundColor:'red',marginLeft:wp('1%')}} 
                            onPress={ () => this.decCount()}>
                            <Icon style={{height:hp('4%')}} name="ios-remove"  />
                        </Button>
                    </CardItem>
                </Card>
                <View>
                        <Button full info style={styles.button} onPress={() => this.props.navigation.navigate('orderscreen')}>
                          <Text style={{ color:'white'}}>PLACE ORDER</Text>
                        </Button>
                      </View>
             
                      <Card style={styles.card1} >
                    <CardItem button >
                        <Text style={styles.text1} >TV</Text>
                    </CardItem>

                    <CardItem style={{height:hp('4%')}}>

                        <Button style={{height:hp('4%'), backgroundColor:'lightgreen',marginRight:wp('1%')}} onPress={ () => this.incCountm()}>
                            <Icon style={{height:hp('4%')}} name="ios-add"  />
                        </Button>

                        <Text  style={{fontSize:hp('4%')}}>{countm}</Text>

                        <Button style={{height:hp('4%'), backgroundColor:'red',marginLeft:wp('1%')}} 
                            onPress={ () => this.decCountm()}>
                            <Icon style={{height:hp('4%')}} name="ios-remove"  />
                        </Button>
                    </CardItem>
                </Card>
                <View>
                        <Button full info style={styles.button} onPress={() => this.props.navigation.navigate('check')}>
                          <Text style={{ color:'white'}}>PLACE ORDER</Text>
                        </Button>
                      </View>
             
                      <Card style={styles.card1} >
                    <CardItem button >
                        <Text style={styles.text1} >TV</Text>
                    </CardItem>

                    <CardItem style={{height:hp('4%')}}>

                        <Button style={{height:hp('4%'), backgroundColor:'lightgreen',marginRight:wp('1%')}} onPress={ () => this.incCountn()}>
                            <Icon style={{height:hp('4%')}} name="ios-add"  />
                        </Button>

                        <Text  style={{fontSize:hp('4%')}}>{countn}</Text>

                        <Button style={{height:hp('4%'), backgroundColor:'red',marginLeft:wp('1%')}} 
                            onPress={ () => this.decCountn()}>
                            <Icon style={{height:hp('4%')}} name="ios-remove"  />
                        </Button>
                    </CardItem>
                </Card>
                <View>
                        <Button full info style={styles.button} onPress={() => this.props.navigation.navigate('orderscreen')}>
                          <Text style={{ color:'white'}}>PLACE ORDER</Text>
                        </Button>
                      </View>  
             

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
  card1:{
    borderRadius:7,
    marginTop:hp('3%'),
    marginBottom:('3%'),
    width:wp('80%'),
    alignSelf:'center',                    
    alignItems:'center',
  },
  text1:{
    fontSize:hp('5%'),
    fontWeight:'400',
    color:'#fbb615'
  },
  button:{
    marginTop:hp('3%')
  }
});
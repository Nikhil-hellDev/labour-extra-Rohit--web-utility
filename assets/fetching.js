import React from 'react';
import { View, Text ,Button,StyleSheet, Dimensions ,ActivityIndicator} from 'react-native';
export default class fetchScreen extends React.Component{
  constructor(props) {
    super(props);

    this.state = {
    isLoading:true,
      dataSource:null,
    }
}
componentDidMount() {
  return fetch('https://facebook.github.io/react-native/movies.json')
  .then((response) => response.json)
.then((responseJson) =>{
  this.setState(
    {
      dataSource:responseJson.movies,
    })
  })
    .catch((error) =>
    {
      console.log(error)
    });

}

render()
{
  if(this.state.isLoading)
  {
    return(
      <view style={StyleSheet.container}>
<ActivityIndicator/>
  </view>
    )

  }
  else{
    let movies = this.state.dataSource.map((vol,key)=>{
      return<view key={key} style={styles.item}>
        <Text>{Val.title}</Text>
        </view>
    });
    return(
      <view  style={StyleSheet.container}>
  {movies}
        </view>
    )
  }
  return(
<view style={StyleSheet.container}>
 <Text>hi nikhil</Text>
  </view>
  );
}
}
const styles = StyleSheet.create(
  {
    container:
    {
      flex:1,
      backgroundColor:'#fff',
    },
    item:
    {
      flex:1,
      alignSelf:'stretch',
      margin:10,
    }
  });
  
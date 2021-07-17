import React,{ Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { connect } from 'react-redux';
import { getArticles } from './action';
import { bindActionCreators } from 'redux';

class Articles extends Component {


    componentDidMount(){
        this.props.getArticles()
    }


    render(){
        return(
            <Text>articles</Text>
        )
    }
} 

function mapStateToProps(state){
    console.log(state)
    return {
        articles:state.articles
    }
}

function mapDispatchToProps(dispatch){
    return bindActionCreators({getArticles},dispatch);
}

export default connect(mapStateToProps,mapDispatchToProps)(Articles)
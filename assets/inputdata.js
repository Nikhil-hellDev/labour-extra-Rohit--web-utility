import React,{ Component } from 'react';
import { StyleSheet, Text, View, TextInput, Button } from 'react-native';
//import axios from 'axios';
import { connect } from 'react-redux';
//import { addPost, getPosts, getPost, updatePost, deletePost , registerUser} from '../Store/actions';
import { registerUser } from './actions';
import { bindActionCreators } from 'redux';

class InputData extends Component {
    
    state = {
        title:'',
        body:''
    }

    handleTitleInput = (title) => {
        this.setState({title})
    }

    handleBodyInput = (body) => {
        this.setState({body})
    }

    adduser = () =>
    {
this.props.registerUser(this.state)
    }
/*
    addPost = () =>{
        this.props.addPost(this.state)
        // const URL = `https://projectthree-76fd8.firebaseio.com/posts.json`

        // axios({
        //     method:"POST",
        //     url:URL,
        //     data:this.state
        // }).then( response => console.log(response.data))
    }

    componentDidMount(){
        this.props.getPosts();
        this.props.getPost('-L7_XVV0tvT_p04Ka4q8');
        this.props.updatePost('-L7_XVV0tvT_p04Ka4q8')
        this.props.deletePost('-L7_d3fh2QSBpcQhv1KI')
        // "-L7_d3fh2QSBpcQhv1KI"
    }
*/

    render(){
        return(
            <View style={styles.formContainer}>

                <View style={styles.inputWrapper}>
                    <Text>Title:</Text>
                    <TextInput
                        value={this.state.name}
                        style={styles.input}
                        onChangeText={this.handleTitleInput}
                        underlineColorAndroid="transparent"
                    />
                </View>

                <View style={styles.inputWrapper}>
                    <Text>Body:</Text>
                    <TextInput
                        value={this.state.body}
                        style={styles.input}
                        onChangeText={this.handleBodyInput}
                        underlineColorAndroid="transparent"
                    />
                </View>

                <Button
                    title="Add post"
                    onPress={this.addPost}
                />

            </View>
        )
    }
}

const styles = StyleSheet.create({
    formContainer:{
        flex:1,
        marginTop: 30,
        width:'100%',
        alignItems: 'center',
        justifyContent: 'flex-start'
    },
    inputWrapper:{
        width:'80%'
    },
    input:{
        padding:5,
        borderWidth: 1,
        borderColor: 'lightgrey',
        marginBottom:5
    }
});

function mapStateToProps(state){
    console.log(state)
    return {
        articles:state.articles
    }
}

function mapDispatchToProps(dispatch){
    return bindActionCreators({registerUser},dispatch)
}

export default connect(mapStateToProps,mapDispatchToProps)(InputData);
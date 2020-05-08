import React,{Component} from 'react'
import {View,Text, AsyncStorage} from 'react-native'
import {connect} from 'react-redux'
import * as actions from '../actions'

class AuthScreen extends Component{
    componentDidMount(){
        this.props.facebookLogin()
        this.onAuthComplete(this.props)
        AsyncStorage.removeItem('fb_token')
        
    }

    componentDidUpdate(prevProps){
        if(this.props.token!==prevProps.token){
            this.onAuthComplete(this.props)
        }
    }

    onAuthComplete(props){
        if(props.token){
            this.props.navigation.navigate('map')
        }
    }

    render(){
        return (
            <View>
                
            </View>
        )
    }
}

const mapStateToProps=({auth})=>{
    return {token:auth.token}
}

export default connect(mapStateToProps,actions)(AuthScreen)
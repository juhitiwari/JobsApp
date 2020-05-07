import _ from 'lodash'
import React,{Component} from 'react'
import {View,Text,ScrollView, AsyncStorage, ActivityIndicator} from 'react-native'
import Slides from '../components/Slides'
import { AppLoading } from 'expo'

const SLIDE_DATA=[
    {text:'Welcome to JobApp',color:'#03a9f4'},
    {text:'Use this to get a job',color:'#009688'},
    {text:'Set your location, then swipe away',color:'#03a9f4'}
]



class WelcomeScreen extends Component{

    state={token:null}

    async componentDidMount(){
        let token=await AsyncStorage.getItem('fb_token')
        if(token){
            this.setState({token})
            this.props.navigation.navigate('map')
           
        }
        else{
            this.setState({token:false})
        }
    }

    onSlidesComplete(){

        this.props.navigation.navigate('auth')

    }

    render(){
        if ((this.state.token === null) && Platform.OS === 'ios') {
            return <AppLoading />;
          } else if ((this.state.token === null) && Platform.OS === 'android') {
            return <ActivityIndicator
              size='large'
              style={styles}
            />;
          }
        return (
            <Slides data={SLIDE_DATA} onComplete={this.onSlidesComplete.bind(this)} />
        )
    }
}
const styles = {
    flex: 1,
    justifyContent: 'center',
    alignItems:'center'
  }

export default WelcomeScreen
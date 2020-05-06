import React,{Component} from 'react'
import {View,Text,Platform} from 'react-native'
import { createStackNavigator } from 'react-navigation-stack';
import { Button } from 'react-native-elements';
import { color } from 'react-native-reanimated';


class ReviewScreen extends Component{

    static navigationOptions =({navigate,navigation})=> ({
        title: 'Review Jobs',
        headerRight:()=>
           
                <Button 
                title="Settings" 
                onPress={()=>{navigation.navigate('setting')}}
                type="clear"
                titleStyle={{color:"rgba(0,122,255,1)"}}
                />
            
        
      })

    render(){
        return (
            <View>
                <Text>
                    ReviewScreen
                </Text>
            </View>
        )
    }
}

export default ReviewScreen
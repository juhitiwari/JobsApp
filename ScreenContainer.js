import { createBottomTabNavigator } from 'react-navigation-tabs';
import AuthScreen from './screens/AuthScreen'
import WelcomeScreen from './screens/WelcomeScreen'
import {  createAppContainer } from 'react-navigation';
import MapScreen from './screens/MapScreen';
import DeckScreen from './screens/DeckScreen';
import { createStackNavigator } from 'react-navigation-stack';
import ReviewScreen from './screens/ReviewScreen';
import SettingsScreen from './screens/SettingsScreen';
import React,{Component} from 'react'
import { Icon } from 'react-native-elements';


const MainNavigator=createBottomTabNavigator({
    welcome:{screen:WelcomeScreen},
    auth:{screen:AuthScreen},
    main:{
       screen: createBottomTabNavigator({
            map:{screen:MapScreen},
            deck:{screen:DeckScreen},
            review:{
                navigationOptions:{
title:'Review Jobs',
tabBarIcon:({tintColor})=>{
    return (<Icon name="favorite" size={30} color={tintColor} />);

}
                },
                
                screen:createStackNavigator({
                    review:{screen:ReviewScreen},
                    setting:{screen:SettingsScreen}
                })
            }
        },{
            tabBarOptions:{
                labelStyle:{fontSize:12}
            }
        })
    }

  },{
      lazy:true,
      defaultNavigationOptions:{
          tabBarVisible:false
      }

  })

  const Container =createAppContainer(MainNavigator)
  export default Container
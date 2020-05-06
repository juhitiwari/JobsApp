import { createBottomTabNavigator } from 'react-navigation-tabs';
import AuthScreen from './screens/AuthScreen'
import WelcomeScreen from './screens/WelcomeScreen'
import {  createAppContainer } from 'react-navigation';
import MapScreen from './screens/MapScreen';
import DeckScreen from './screens/DeckScreen';
import { createStackNavigator } from 'react-navigation-stack';
import ReviewScreen from './screens/ReviewScreen';
import SettingsScreen from './screens/SettingsScreen';


const MainNavigator=createBottomTabNavigator({
    welcome:{screen:WelcomeScreen},
    auth:{screen:AuthScreen},
    main:{
       screen: createBottomTabNavigator({
            map:{screen:MapScreen},
            deck:{screen:DeckScreen},
            review:{
                screen:createStackNavigator({
                    review:{screen:ReviewScreen,defaultNavigationOptions:{title:'Review Jobs'}},
                    setting:{screen:SettingsScreen}
                })
            }
        })
    }

  })

  const Container =createAppContainer(MainNavigator)
  export default Container
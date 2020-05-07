import React,{Component} from 'react'
import {View,Text, BackHandler, Alert} from 'react-native'
import { withNavigationFocus } from 'react-navigation';


class MapScreen extends Component{


  
   handleBackButton = () => {
       Alert.alert(
           'Exit App',
           'Exiting the application?', [{
               text: 'Cancel',
               onPress: () => console.log('Cancel Pressed'),
               style: 'cancel'
           }, {
               text: 'OK',
               onPress: () => BackHandler.exitApp()
           }, ], {
               cancelable: false
           }
        )
        return true;
      } 
      componentDidMount() {
        BackHandler.addEventListener('hardwareBackPress', this.handleBackButton);
      }
      
      componentWillUnmount() {
        BackHandler.removeEventListener('hardwareBackPress', this.handleBackButton);
      }

    render(){
        return (
            <View>
                <Text>
                    MapScreen
                </Text>
            </View>
        )
    }
}

export default withNavigationFocus(MapScreen)
import React,{Component} from 'react'
import {View,Text, BackHandler, Alert} from 'react-native'
import { withNavigationFocus } from 'react-navigation';
import MapView from 'react-native-maps';
import * as actions from '../actions'
import {Button, Icon} from 'react-native-elements'
import {connect} from 'react-redux'



class MapScreen extends Component{

    static navigationOptions={
        title:'Map',
        tabBarIcon: ({ tintColor }) => {
            return <Icon name='my-location' size={30} color={tintColor} />
          },
          

    }

  
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

      state={
          region:{
              longitude:-122,
              latitude:37,
              longitudeDelta:0.04,
              latitudeDelta:0.09
          }
      }
      onRegionChangeComplete=(region)=>{
          this.setState({region})
      }
      onButtonPress=()=>{
          this.props.fetchJobs(this.state.region,()=>{
              this.props.navigation.navigate('deck')
          })
      }

    render(){
        return (
            <View style={{flex:1}}>
                <MapView style={{flex:1}}
                region={this.state.region}
                onRegionChangeComplete={this.onRegionChangeComplete}/>
            <View style={styles.buttonContainer}>
                <Button
                raised
                title="Search this area"
                backgroundColor="#009688"
                icon={{name:'search'}}
                onPress={this.onButtonPress}/>
            </View>
            </View>
        )
    }
}

const styles={
    buttonContainer:{
        position:'absolute',
        bottom:20,
        left:10,
        right:10
    }
}

export default connect(null,actions)(withNavigationFocus(MapScreen))
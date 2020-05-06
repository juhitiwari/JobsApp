import React from 'react';
import {registerRootComponent} from 'expo'
import { StyleSheet, Text, View } from 'react-native';
import Container from './ScreenContainer'

class App extends React.Component {
  render(){
   
  return (
    <View style={styles.container}>
      <Container/>
     
    </View>
  );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    
    justifyContent: 'center',
  },
});


export default registerRootComponent(App)

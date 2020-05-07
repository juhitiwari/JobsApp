import React from 'react';
import {registerRootComponent} from 'expo'
import { StyleSheet, Text, View } from 'react-native';
import Container from './ScreenContainer'
import {Provider} from 'react-redux'
import store from './store'

class App extends React.Component {
  render(){
   
  return (
    <Provider store={store}>
    <View style={styles.container}>
      <Container/>
     
    </View>
    </Provider>
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

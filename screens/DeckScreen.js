import React,{Component} from 'react'
import {View,Platform,Linker} from 'react-native'
import {connect} from 'react-redux'
import Swipe from '../components/Swipe'
import { Card,Text,Button,Icon } from 'react-native-elements'
import MapView from 'react-native-maps'
import * as actions from '../actions';


class DeckScreen extends Component{

    static navigationOptions={
        title:'Jobs',
        tabBarIcon: ({ tintColor }) => {
            return <Icon name='description' size={30} color={tintColor} />
          },
          

    }
    renderCard(job) {
        const initialRegion = {
        longitude:  -122,
        latitude: 37,
        latitudeDelta: 0.045,
        longitudeDelta: 0.02
        }
        
        return (
        <Card title={job.title} style={{height:500}}>
        <View style={{height:300}}>
        <MapView
        scrollEnabled={false}
        style={{flex:1}}
        cacheEnabled={Platform.OS === 'android' ? true : false}
        initialRegion={initialRegion}
        >
        </MapView>
        </View>
        <View style={styles.detailWrapper}>
        <Text>Posted By: {job.company}</Text>
        <Text>Posted At: {job.created_at}</Text>
        </View> 
        <Text>
            Location: {job.location}
           
        </Text>
        <Text>
        Type: {job.type}
        </Text>
        <Text>
            Visit the company at: {job.company_url}
        </Text>
        </Card>
        );
        }

        renderNoMoreCards = () => {
            return (
              <Card title="No More Jobs">
                <Button
                  title="Back To Map"
                  large
                  icon={{ name: 'my-location' }}
                  backgroundColor="#03A9F4"
                  onPress={() => this.props.navigation.navigate('map')}
                />
              </Card>
            );
          }
          render() {
            return (
              <View style={{ marginTop: 20 }}>
               <Swipe
          data={this.props.jobs}
          renderCard={this.renderCard}
          renderNoMoreCards={this.renderNoMoreCards}
          
          keyProp="jobkey"
          onSwipeRight={job=>this.props.likeJob(job)}

        />
              </View>
            );
          }
        }

function mapStateToProps({jobs}){
    return {jobs:jobs.results}
}
const styles = {
    detailWrapper: {
      
      justifyContent: 'space-around',
      marginBottom: 10,
      marginTop:10
    }
  };

export default connect(mapStateToProps,actions)(DeckScreen)
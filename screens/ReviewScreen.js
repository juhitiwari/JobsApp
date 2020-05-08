import React,{Component} from 'react'
import {View,Text,Platform,Linking} from 'react-native'
import { createStackNavigator } from 'react-navigation-stack';
import { Button, Card,Icon } from 'react-native-elements';
import { ScrollView } from 'react-native-gesture-handler';
import {connect} from 'react-redux'
import MapView from 'react-native-maps';


class ReviewScreen extends Component{

    static navigationOptions =({navigate,navigation})=> ({
        
        title: 'Review Jobs',
        tabBarIcon : ({tintColor}) => {
            return <Icon name='envira' size={25} color={tintColor} type='font-awesome'/>
          },
        headerRight:()=>
           
                <Button 
                title="Settings" 
                onPress={()=>{navigation.navigate('setting')}}
                type="clear"
                titleStyle={{color:"rgba(0,122,255,1)"}}
                />
        
            
        
      })

    renderLikedJobs(){

        const initialRegion = {
            longitude:  -122,
            latitude: 37,
            latitudeDelta: 0.045,
            longitudeDelta: 0.02
            }
        return this.props.likeJob.map(job=>{
            return(
                <Card title={job.title} key={job.id}>
                   <View style={{height:200}}>
        <MapView
        scrollEnabled={false}
        style={{flex:1}}
        cacheEnabled={Platform.OS === 'android' ? true : false}
        initialRegion={initialRegion}
        >
        </MapView>
      
                    
                        <View style={styles.detailWrapper}>
                            <Text style={styles.italics}>
                                {job.company}
                            </Text>
            <Text style={styles.italics}> {job.created_at}</Text>
                        </View>
                        <Button title="Apply Now!"
                        backgroundColor="#03A9FA"
                        onPress={()=>Linking.openURL(job.url)}/>

                    </View>
                   
                </Card>
            )
        })
    }

    render(){
        return (
            <ScrollView>
               {this.renderLikedJobs()}
            </ScrollView>
        )
    }
}

const styles={
    detailWrapper:{
        marginBottom:10,
        flexDirection:'row',
        justifyContent:'space-around'
    },
    italics:{
        fontStyle:'italic'
    }
}

function mapStateToProps(state){
    return {likeJob:state.likeJob}
}

export default connect(mapStateToProps)(ReviewScreen)
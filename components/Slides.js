import React,{Component} from 'react'
import {View,Text,ScrollView,Dimensions} from 'react-native'
import {Button} from 'react-native-elements'

const SCREEN_WIDTH=Dimensions.get('window').width

class Slides extends Component{
    renderLastSlide(slide,index){
        if(index===this.props.data.length-1){
            return (
                <Button   buttonStyle={styles.buttonStyle}
                containerStyle={styles.containerViewStyle}
                title="Onwards!"
                raised
                onPress={this.props.onComplete}/>
            )
        }
    }
    renderSlides(){
        return this.props.data.map((slide,index)=>{
            return (
            <View key={slide.text} style={[styles.slide,{backgroundColor:slide.color}]}>
                <Text style={styles.slideText}>{slide.text}</Text>
                {this.renderLastSlide(slide,index)}
            </View>
            )
        })
    }
    render(){
        return (
            <ScrollView horizontal style={{flex:1}} pagingEnabled>
            {this.renderSlides()}
         </ScrollView>
        )
    }
}

const styles={
    slideText:{
        fontSize:30,
        color:'white'
    },
    slide:{
        flex:1,
        justifyContent:'center',
        alignItems:'center',
        width:SCREEN_WIDTH,
        padding:20
    },
    buttonStyle: {
        backgroundColor: "#0288D1"
      },
      containerViewStyle: {
        marginTop: 15
      }
}

export default Slides
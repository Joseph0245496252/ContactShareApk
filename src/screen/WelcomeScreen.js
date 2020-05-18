import React, { Component } from 'react'
import { Text, View, StyleSheet, Image, TouchableOpacity} from 'react-native'

export default class WelcomeScreen extends Component {
    constructor(props){
        super(props)
    }
  render() {
      const {navigation} = this.props
    return (
      <View style={styles.conatiner}>
        <View style={styles.imageContainer}>
            <Image source={require('../../assets/codetrain.png')} style={styles.image} />
        </View>
        <View style={styles.contact}>
            <Text style={styles.contactText}>Ampersand</Text>
            <Text>CONTACT SHARE</Text>
            
            
        </View>
        <TouchableOpacity style={styles.getstart} onPress={()=>{navigation.navigate('GetInTouch')}}>
            <Text style={styles.getstartText}> GET STARTED</Text>
        </TouchableOpacity>
      </View>
    )
  }
}
 const styles = StyleSheet.create({
     conatiner:{
      
         alignItems: "center",
        backgroundColor: "#ffdd"
     },
     imageContainer:{
            marginTop: 90
     },
     image:{
         width: 200,
         height: 50
        
     },
     contact:{
         marginTop: 100,
     },
     contactText:{
         fontSize: 20,
        
     },
     getstart:{
            marginTop: 200,
            marginBottom: 100,
           
            
     },
     getstartText:{
         fontSize: 20,
         borderBottomWidth: 1,
         borderBottomColor: "red",
         

        
       
         
     },
 })
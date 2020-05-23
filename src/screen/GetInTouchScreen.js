import React, { Component } from 'react'
import { Text, View, StyleSheet, Image,  TouchableOpacity } from 'react-native'


export default class GetInTouchScreen extends Component {
  render() {
    const {navigation} = this.props
    return (
      <View style={styles.conatiner}>
           <Image source={require('../../assets/screen2.jpg')} style={styles.image} />
          <View style={styles.textContainer}>
                <Text style={styles.text1} >GET IN TOUCH WITH THE PEOPLE OF AMPERSAND</Text>
                <Text style={styles.text2}>Sign or Register with our Codetrain email</Text>
          </View>
          <View style={styles.access}>
              <TouchableOpacity  onPress={()=>{navigation.navigate('Register')}}>
                    <Text style={styles.register}>REGISTER</Text>
              </TouchableOpacity>
                
                <TouchableOpacity  onPress={()=>{navigation.navigate('Login')}}>
                    <Text style={styles.login}>SIGN IN</Text>
              </TouchableOpacity>
                
          </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
 conatiner:{
     backgroundColor:  "#ffdd",
     height: 840
 },
 image:{
     marginBottom:100,
     width: 470,
     height: 420
 },
 text1:{
     fontWeight:"bold",
     fontSize:25,
     marginBottom:10,
     marginLeft:45,
     alignItems: "center"
 },
 text2:{
     color:"#aaaaaa"
 },
 textContainer:{
     alignItems:"center",
     justifyContent:"center"
 },
 access:{
     marginTop:150,
     flexDirection:"row",
     justifyContent:"space-around"
 },
 register:{
     fontSize:18,
     borderBottomWidth:1,
     borderBottomColor:"red",
     paddingBottom:5
    
 },
 login:{
     fontSize:18,
     borderBottomWidth:1,
     borderBottomColor:"red",
     paddingBottom:5
 },
})

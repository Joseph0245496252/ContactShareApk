import React, { Component } from 'react'
import { Text, View, StyleSheet, TextInput, TouchableOpacity, Image, ScrollView} from 'react-native'

export default class LoginScreen extends Component {
    render() {
        return (
            <ScrollView style={styles.container}>
                    <Image source={require('../../assets/screen3.jpg')} style={styles.profile} />
                    <View style={styles.mainContent}>
                <View style={styles.inputContainer}>
                    <Text style={styles.inputLabel}> Email</Text>
                    <TextInput placeholder="contact@codetraingh.com" placeholderTextColor="#aaaaaa"
                     style={styles.input} textAlign="right" />
                </View>
                <View style={styles.passwordContainer}>
                    <Text style={styles.inputLabel}>Password</Text>
                    <TextInput placeholder="********" placeholderTextColor="#aaaaaa" style={styles.input}
                        secureTextEntry={true} textAlign="right" />
                </View>

                <TouchableOpacity style={styles.ButtonContainer}>
                    <Text style={styles.ButtonText}>SIGN IN</Text>
                </TouchableOpacity>

                <View style={styles.forgotContainer}>
                    <Text style={styles.forgotText}>Forgot? </Text>
                    <TouchableOpacity>
                    <Text style={styles.reset}>Reset Password</Text>
                    </TouchableOpacity>
                    
                </View>
                </View>
            </ScrollView>

        )
    }
}

const styles = StyleSheet.create({
        container:{
           backgroundColor: "#ffdd",
        },
        mainContent:{
            marginHorizontal: 20
        },
        profile:{
            width: 470,
            height: 300
        },
        inputContainer:{
            flexDirection: "row",
            justifyContent: "space-between",
            borderBottomWidth: 0.5,
            borderBottomColor: "#aaaaaa",
            paddingBottom: 20,
            marginTop: 40
        },
        passwordContainer:{
            flexDirection: "row",
            justifyContent: "space-between",
            paddingBottom: 5,
            marginTop: 10
        },
        inputLabel:{
            fontSize: 15,
            fontWeight: "bold",
            color: "gray"
        },
        ButtonContainer:{
            backgroundColor: "red",
            justifyContent: "center",
            alignItems: "center",
            height: 50,
            borderRadius: 5,
            marginTop: 50
        },
        ButtonText:{
            color: "white",
            fontWeight: "bold",
            fontSize: 20
        },
        forgotContainer:{
            flexDirection: "row",
            marginTop: 40,
            
        },
        forgotText:{
            marginRight: 10,
            fontSize: 15
            
        },
        reset:{
            borderBottomColor: "red",
            borderBottomWidth: 1,
            paddingBottom: 5,
            fontSize: 15
            
        }
})
import React, { Component } from 'react'
import { Text, View, StyleSheet, Image, ScrollView, TouchableOpacity, TextInput } from 'react-native'
import{Feather} from '@expo/vector-icons'
import { red } from 'color-name';


export default class RegisterScreen extends Component {
    render() {
        return (
            <ScrollView style={styles.container}>
                <TouchableOpacity style={styles.image}>
                     <Feather name="user" size={50}  />
                     <Text>ADD PROFILE PHOTO</Text>
                </TouchableOpacity>
               
                <View style={styles.mainContent}>
                    <View style={styles.authContainer}>
                        <Text style={styles.authLabel}> Full Name</Text>
                        <TextInput placeholder="Joseph Asante" placeholderTextColor="#aaaaaa"
                            style={styles.input} textAlign="right" />
                    </View>
                    <View style={styles.authContainer}>
                        <Text style={styles.authLabel}> Email</Text>
                        <TextInput placeholder="joseph@example.com"  placeholderTextColor="#aaaaaa"
                            style={styles.input} textAlign="right" />
                    </View>
                    <View style={styles.authContainer}>
                        <Text style={styles.authLabel}> Phone Number</Text>
                        <TextInput placeholder="(+233) 245496252" placeholderTextColor="#aaaaaa"
                            style={styles.input} textAlign="right" />
                    </View>
                    <View style={styles.authContainer}>
                        <Text style={styles.authLabel}> Role</Text>
                        <TextInput placeholder="contact@ampersant.com" placeholderTextColor="#aaaaaa"
                            style={styles.input} textAlign="right" />
                    </View>
                    <View style={styles.authContainer}>
                        <Text style={styles.authLabel}> Twitter</Text>
                        <TextInput placeholder="@JosephReppy" placeholderTextColor="#aaaaaa"
                            style={styles.input} textAlign="right" />
                    </View>
                    <View style={styles.authContainer}>
                        <Text style={styles.authLabel}> LinkedIn</Text>
                        <TextInput placeholder="/Joseph" placeholderTextColor="#aaaaaa"
                            style={styles.input} textAlign="right" />
                    </View>


                    <TouchableOpacity style={styles.ButtonContainer}>
                        <Text style={styles.ButtonText}>REGISTER</Text>
                    </TouchableOpacity>
                </View>
            </ScrollView>

        )
    }
}

const styles = StyleSheet.create({
    container: {
        marginBottom: 80
    },
    mainContent: {
        marginHorizontal: 20,
        
    },
    image: {
        color: "red",
        height: 130,
        
        justifyContent:"center",
        alignItems:"center"
        
    },
    authContainer: {
        flexDirection: "row",
        justifyContent: "space-between",
        borderBottomWidth: 0.3,
        borderBottomColor: "#aaaaaa",
        paddingBottom: 20,
        marginTop: 10
    },
    authPwdContainer: {
        flexDirection: "row",
        justifyContent: "space-between",
        paddingBottom: 5,
        marginTop: 10
    },
    authLabel: {
        fontSize: 15,
        fontWeight: "bold",
        color: "gray"
    },
    ButtonContainer: {
        backgroundColor: "red",
        justifyContent: "center",
        alignItems: "center",
        height: 50,
        borderRadius: 5,
        marginTop: 20
    },
    ButtonText: {
        color: "white",
        fontWeight: "bold",
        fontSize: 20
    },

})

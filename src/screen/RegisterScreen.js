import React, { Component } from 'react'
import { Text, View, StyleSheet, TextInput, TouchableOpacity, ScrollView } from 'react-native'
import{Feather} from '@expo/vector-icons'
// import { red } from 'color-name';


export default class RegisterScreen extends Component {
    render() {
        return (
            <ScrollView style={styles.container}>
                <TouchableOpacity style={styles.profile}>
                     <Feather name="user"size={50}  />
                     <Text>ADD PROFILE PICTURE</Text>
                </TouchableOpacity>
               
                <View style={styles.mainContent}>
                    <View style={styles.inputContainer}>
                        <Text style={styles.inputLabel}> Full Name</Text>
                        <TextInput placeholder="Joseph Asante" placeholderTextColor="#aaaaaa"
                            style={styles.input} textAlign="right" />
                    </View>
                    <View style={styles.inputContainer}>
                        <Text style={styles.inputLabel}> Email</Text>
                        <TextInput placeholder="joseph@example.com"  placeholderTextColor="#aaaaaa"
                            style={styles.input} textAlign="right" />
                    </View>
                    <View style={styles.inputContainer}>
                        <Text style={styles.inputLabel}> Phone Number</Text>
                        <TextInput placeholder="(+233) 245496252" placeholderTextColor="#aaaaaa"
                            style={styles.input} textAlign="right" />
                    </View>
                    <View style={styles.inputContainer}>
                        <Text style={styles.inputLabel}>Role</Text>
                        <TextInput placeholder="contact@ampersant.com" placeholderTextColor="#aaaaaa"
                            style={styles.input} textAlign="right" />
                    </View>
                    <View style={styles.inputContainer}>
                        <Text style={styles.inputLabel}> Twitter</Text>
                        <TextInput placeholder="@JosephReppy" placeholderTextColor="#aaaaaa"
                            style={styles.input} textAlign="right" />
                    </View>
                    <View style={styles.inputContainer}>
                        <Text style={styles.inputLabel}> LinkedIn</Text>
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
        marginHorizontal: 20
        
    },
    profile: {
        justifyContent:"center",
        alignItems:"center",
        height: 130
        
    },
    inputContainer: {
        flexDirection: "row",
        borderBottomColor: "#aaaaaa",
        justifyContent: "space-between",
        borderBottomWidth: 1,
        paddingBottom: 20,
        marginTop: 10
    },
    authPwdContainer: {
        flexDirection: "row",
        justifyContent: "space-between",
        marginTop: 10
    },
    inputLabel: {
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

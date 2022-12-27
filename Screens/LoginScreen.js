
import React, { useState } from 'react';
import { View, TextInput, StyleSheet } from "react-native";
import ButtonOne from '../components/ButtonOne'
import {LoginFunction} from '../components/LoginFunction';


export function LoginScreen({navigation}){
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");


    return(
        <View style={styles.container}>
            <View style={styles.inputView}>
          <TextInput
            style={styles.TextInput}
            placeholder="Email"
            placeholderTextColor="grey"
            onChangeText={(value) => setEmail(value)}
          />
        </View>
    
        <View style={styles.inputView}>
          <TextInput
            style={styles.TextInput}
            placeholder="Password"
            placeholderTextColor="grey"
            secureTextEntry={true}
            onChangeText={(value) => setPassword(value)}
          />
        </View>
            <ButtonOne title="test" clicked={ ()=>LoginFunction(email, password  , navigation)} ></ButtonOne>
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
        alignItems: "center",
        justifyContent: "center",
      },
    TextInput: {
        height: 50,
        flex: 1,
        padding: 10,
      },

    inputView: {
        backgroundColor: "#DDDDDD",
        borderRadius: 30,
        width: "65%",
        height: 45,
        marginBottom: 20,
     
        alignItems: "flex-start",
      },

});
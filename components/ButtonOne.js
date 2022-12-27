import React from 'react';
import {
  StyleSheet,
  Text,
  Button
} from "react-native";



import RNBounceable from "@freakycoder/react-native-bounceable";


const  ButtonOne = ({ clicked, title }) => (

    <RNBounceable style={styles.Btn} onPress={ clicked}>
        <Text style={styles.Txt}>{title}</Text>
    </RNBounceable>
);
export default ButtonOne

const styles = StyleSheet.create({
    Txt: {
        color:"white"
    },


    Btn: {
        width: "80%",
        borderRadius: 25,
        height: 50,
        alignItems: "center",
        justifyContent: "center",
        marginTop: 40,
        backgroundColor: "green",
    },

});
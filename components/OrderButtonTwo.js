import React, { useState} from 'react';
import {
  StyleSheet,
  Text,
} from "react-native";



import RNBounceable from "@freakycoder/react-native-bounceable";



const OrderButtonTwo = ({ date, status, table, clicked }) => (

    

<RNBounceable style={styles.container} onPress={ clicked}>
        <Text style={{color:"green", paddingLeft:5, alignSelf:"center", flex:0.4}}>{date}</Text>
        <Text style={{ alignSelf:"center", flex:0.1}}>{table}</Text>
        <Text style={{color:"green", alignSelf:"center", flex:0.5}}>{status}</Text>
      </RNBounceable>
);
export default OrderButtonTwo

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#DDDDDD',
      paddingHorizontal: 5,
      paddingBottom: 5,
      borderRadius: 30,
      marginBottom: "5%",
      height:30,
      flexDirection: "row",
  
    }
  });
  
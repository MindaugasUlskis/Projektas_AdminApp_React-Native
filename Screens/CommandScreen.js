import { View, Text, ScrollView, StyleSheet } from "react-native";
import React, { useState, useEffect } from 'react';
import firestore from '@react-native-firebase/firestore';
import { useRoute, } from '@react-navigation/native';
import OrderButtonTwo from "../components/OrderButtonTwo";

export function CommandScreen({navigation}){

    const [order, setOrder] = useState([])
    const route = useRoute();
    const clickHandler = (navigation, item) => {
        navigation.navigate('OrderManagementScreen', {
            orderID:item.id
        })}
    

    function fetchData() {
        useEffect(() => {orderData = []
            const sub = firestore().collection("Order").orderBy('Date', 'desc').onSnapshot((docs) => {
                docs.forEach((doc) => {
                    if(doc.data().RestaurantID == route.params.restaurantID){
                        orderData.push({
                            RestaurantID: doc.data().RestaurantID,
                            Date: doc.data().Date,
                            id: doc.id,
                            Status: doc.data().Status,
                            Table: doc.data().Table
                        })
                    }
                    
                })
                setOrder(orderData);
    
            });
        
            return () => sub()
        }, [order]);
        
    }

    fetchData()
    console.log(order)

    return(
        <View>
               <ScrollView style={{minHeight:"100%"}}>
    
    {order.map(item =>
      <OrderButtonTwo date={item.Date} status = {item.Status}  table={item.Table} clicked={ ()=>clickHandler(navigation, item)}/>
    )}

  </ScrollView>
                
        </View>
    )
}

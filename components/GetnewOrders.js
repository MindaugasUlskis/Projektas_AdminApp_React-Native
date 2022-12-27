import React, { useState, useEffect } from 'react';

import firestore from '@react-native-firebase/firestore';

const GetNewOrders = () => {
    const [order, setOrder] = useState([])


    function fetchData() {


        orderData = []
        firestore().collection("Order").onSnapshot((docs) => {
            docs.forEach((doc) => {
                orderData.push({
                    RestaurantID: doc.data().RestaurantID,
                    Date: doc.data().Date,
                    id: doc.id
                })
            })
            setOrder(orderData);

        });



    }

    useEffect(() => { fetchData() }, [])
    console.log(order)
    
    return order 

}
export default GetNewOrders



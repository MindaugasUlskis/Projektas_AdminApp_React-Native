import { useState, useEffect } from 'react';
import { Button, View, Text, StyleSheet, ScrollView, ActivityIndicator } from 'react-native';
import { useRoute, } from '@react-navigation/native';
import firestore from '@react-native-firebase/firestore';
import ButtonOne from '../components/ButtonOne';
import { ChangeDataFunction } from '../components/ChangeDataFunction';





export function OrderManagementScreen({ navigation }, props) {


  const [order, setOrder] = useState("")
  const [productdata, setProductData] = useState([])
  const [tableId, setTableId] = useState("11")



  const route = useRoute();



  function newdata() {
    useEffect(() => {
      const subscriber = firestore()
        .collection('Order')
        .doc(route.params.orderID)
        .onSnapshot(documentSnapshot => {

          var data = {
            RestaurantID: documentSnapshot.data().RestaurantID,
            Status: documentSnapshot.data().Status,
            Table: documentSnapshot.data().Table,
            Products: JSON.stringify(documentSnapshot.data().Products),
            Price: documentSnapshot.data().Price,
            Date: documentSnapshot.data().Date,
          }
          setProductData (JSON.parse(JSON.stringify(documentSnapshot.data().Products)))
          setOrder(data)
          setTableId(data.Table)
          
        });
        
      return () => subscriber();
    }, []);
  }
  
  newdata()
  

  return (
    <View style={{ paddingTop: 20, flex: 1 }}>
      <ScrollView>




      <Text style={{ marginLeft: 22, fontSize: 18, }}>Order Status</Text>
      <View style={styles.container}>

        <Text style={{ marginLeft: 22, fontSize: 18, fontWeight: "bold", color: "green", }}>{order.Status}</Text>

      </View>
      <Text style={{ marginLeft: 22, fontSize: 18}}>Order has been craeted at: </Text>
      <View style={styles.container}>

        <Text style={{ marginLeft: 22, fontSize: 18, fontWeight: "bold", color: "green", }}>{order.Date}</Text>

      </View>
      <View> 
      {productdata.map(item =>
            <Text style = {{paddingLeft:45, paddingBottom:3}}>{item.Title}</Text>)}
            <View style={{alignItems:"center"}}>
      <ButtonOne title="Order is beeing made" clicked={()=> ChangeDataFunction(route.params.orderID, "Order is beeing made", tableId) } ></ButtonOne>
      <ButtonOne title="Cancel" clicked={()=> ChangeDataFunction(route.params.orderID, "Canceled", tableId) } ></ButtonOne>
      <ButtonOne title="Finished" clicked={()=> ChangeDataFunction(route.params.orderID, "Order is Finished", tableId) } ></ButtonOne>
      <View style={{paddingBottom:20}} ></View>
      </View>
  </View>
      



  </ScrollView>
    </View>

  );
}


const styles = StyleSheet.create({
  container: {
    flex: 0.15,
    backgroundColor: '#DDDDDD',
    marginTop: "7%",
    borderRadius: 40,
    width: "85%",
    alignSelf: "center",
    marginBottom: "6%",
    justifyContent: "center",
  },
  btnText: {
    fontSize: 22,
    fontWeight: "bold"
  },
  checkOutButton:
  {
    width: "90%",
    alignSelf: "center",
    alignItems: "center",
    height: "10%",
    backgroundColor: "green",
    borderRadius: 25,
    justifyContent: "center",
    marginBottom: "8%",
  },
  textView: {
    paddingVertical: 5,
    marginLeft: 22
  }
});
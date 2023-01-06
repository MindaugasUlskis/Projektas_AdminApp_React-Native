import React from 'react';
import firestore from '@react-native-firebase/firestore';

export const ChangeDataFunction = (doc, data, table) => {

  if(data =="Order is Finished" || data == "Canceled"){
    console.log(table)
    firestore().collection('Table').doc(table).update({
        Status:"Free"
    })
  }
    
firestore()
.collection('Order')
.doc(doc)
.update({
  Status:data
})
.then(() => {
  console.log('Order updated!');
});
}
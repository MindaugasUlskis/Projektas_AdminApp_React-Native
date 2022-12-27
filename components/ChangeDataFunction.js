import React from 'react';
import firestore from '@react-native-firebase/firestore';

export const ChangeDataFunction = (doc, data) => {
    
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
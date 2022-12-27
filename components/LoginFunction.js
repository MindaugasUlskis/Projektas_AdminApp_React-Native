import React from 'react';
import auth from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';

export const LoginFunction = (em, pas, navigation) => {
    firestore()
    .collection('RestaurantEmails')
    .get()
    .then(querySnapshot => {
      querySnapshot.forEach(documentSnapshot => {
        console.log(documentSnapshot.Email)
        if (documentSnapshot.data().Email == em) {
            var restaurantID = documentSnapshot.data().RestaurantID
            auth()
                .signInWithEmailAndPassword(em, pas)
                .then(() => {
                    console.log('User account created & signed in!');
                    navigation.navigate("CommandScreen", {
                        restaurantID:restaurantID
                    })
                })
                .catch(error => {
                    if (error.code === 'auth/email-already-in-use') {
                        console.log('That email address is already in use!');
                    }

                    if (error.code === 'auth/invalid-email') {
                        console.log('That email address is invalid!');
                    }

                    console.error(error);
                });
        }
        else console.error("Invalid Email for a Restaurnt Account")
      });
    });
}
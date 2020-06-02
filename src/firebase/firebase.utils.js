import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyBNA1FheVOKgcdk9V-qzNV7X6O9QylwjQk",
    authDomain: "ecommerce-db-da014.firebaseapp.com",
    databaseURL: "https://ecommerce-db-da014.firebaseio.com",
    projectId: "ecommerce-db-da014",
    storageBucket: "ecommerce-db-da014.appspot.com",
    messagingSenderId: "228597547738",
    appId: "1:228597547738:web:9b3f92eabd4fe863ef1be3",
    measurementId: "G-C7LMEDYTX7"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account'});
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
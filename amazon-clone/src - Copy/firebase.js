// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from "firebase";
const firebaseConfig = {
    apiKey: "AIzaSyB5QNyll_HV2Y-OsZYrcXcXnfSiy9WEnO0",
    authDomain: "clone-9089c.firebaseapp.com",
    databaseURL: "https://clone-9089c.firebaseio.com",
    projectId: "clone-9089c",
    storageBucket: "clone-9089c.appspot.com",
    messagingSenderId: "1099299150701",
    appId: "1:1099299150701:web:6f67a7bcfddddae7019864",
    measurementId: "G-N7RQNJK2NP"
  };

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
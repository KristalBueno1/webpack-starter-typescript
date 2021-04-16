
import firebase from "firebase/app"

import "firebase/firestore"

const firebaseConfig = {
    apiKey: "AIzaSyAYJEM6LSAN7HQAoF7OvBH5kBD6vJmNr50",
    authDomain: "sql-demos-ddab5.firebaseapp.com",
    projectId: "sql-demos-ddab5",
    storageBucket: "sql-demos-ddab5.appspot.com",
    messagingSenderId: "921086831130",
    appId: "1:921086831130:web:3b0839a04e4eab6b633fa3",
    measurementId: "G-5C77QX1TKX"
  };
  // Initialize Firebase
firebase.initializeApp(firebaseConfig);

console.log("firebase configurado");

export default firebase.firestore();
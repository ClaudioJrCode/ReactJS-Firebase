import firebase from "firebase/app";

import 'firebase/auth';
import 'firebase/database'

var firebaseConfig = {
    apiKey: "AIzaSyDOGeAj-aJxkHGrBwYRe4UlTS1h7-R8jdc",
    authDomain: "letmeask-95bc9.firebaseapp.com",
    databaseURL: "https://letmeask-95bc9-default-rtdb.firebaseio.com",
    projectId: "letmeask-95bc9",
    storageBucket: "letmeask-95bc9.appspot.com",
    messagingSenderId: "377414890454",
    appId: "1:377414890454:web:b58414d9a90cf72d3b6a77"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  export const auth = firebase.auth();
  export const database = firebase.database();
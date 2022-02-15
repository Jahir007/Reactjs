import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as firebase from 'firebase';



// Initialize Firebase
var config = {
    apiKey: "AIzaSyAva6xjM7AstaVI-HO3pMvURlNIqyac0bY",
    authDomain: "park-83d6f.firebaseapp.com",
    databaseURL: "https://park-83d6f-default-rtdb.firebaseio.com",
    projectId: "park-83d6f",
    storageBucket: "park-83d6f.appspot.com",
    messagingSenderId: "572756731021"
  };
  firebase.initializeApp(config);



ReactDOM.render(<App />,document.getElementById('root'));

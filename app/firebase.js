import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";

import { decode } from 'base-64';

if(typeof atob === 'undefined') {
  global.atob = decode;
}


const firebaseConfig = {

    apiKey: "AIzaSyC6vnOlOnWqtkHtaj5dr96ayC5_lm-7AdY",
  
    authDomain: "milestone-401923.firebaseapp.com",
  
    projectId: "milestone-401923",
  
    storageBucket: "milestone-401923.appspot.com",
  
    messagingSenderId: "585137337969",
  
    appId: "1:585137337969:web:3e49830585e9dcd2a5cdd0"
  
  };  
  // Initialize Firebase
const app = initializeApp(firebaseConfig);
const bucket = getStorage(app);
const auth = getAuth(app);

export {
    app,
    auth,
    bucket
}
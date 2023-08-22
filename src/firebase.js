import { initializeApp } from 'firebase/app';

const firebaseConfig = {
    apiKey: "AIzaSyA5MjpKviLD9_ebhFyD2phutpEbVqbIt2c",
    authDomain: "xpro-auth.firebaseapp.com",
    databaseURL: "https://xpro-auth-default-rtdb.firebaseio.com",
    projectId: "xpro-auth",
    storageBucket: "xpro-auth.appspot.com",
    messagingSenderId: "587639246052",
    appId: "1:587639246052:web:14c0d49318e473128130f1"
  };

const firebaseApp = initializeApp(firebaseConfig); 

export default firebaseApp;
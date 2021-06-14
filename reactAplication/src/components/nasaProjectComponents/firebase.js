
 import firebase from "firebase/app";
 import "firebase/auth";

  const firebaseConfig = {
    apiKey: "AIzaSyCAStJXK3J6lOefW_9aLr1sIDCX7MsDwo8",
    authDomain: "nasa-auth-firebase.firebaseapp.com",
    projectId: "nasa-auth-firebase",
    storageBucket: "nasa-auth-firebase.appspot.com",
    messagingSenderId: "552427551233",
    appId: "1:552427551233:web:a2b4d49b78a5750b47de00"
  };
 
  firebase.initializeApp(firebaseConfig);
 


 const auth = firebase.auth();

export { auth, firebase };


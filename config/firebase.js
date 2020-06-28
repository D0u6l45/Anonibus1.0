import firebase from "firebase";
import "firebase/auth";
import "firebase/firestore";
import "firebase/storage";



const firebaseConfig = {
    apiKey: "AIzaSyBvrDIPW9AAU0tGr5aUjPYXQS5TYNtzHfg",
    authDomain: "anoni-52994.firebaseapp.com",
    databaseURL: "https://anoni-52994.firebaseio.com",
    projectId: "anoni-52994",
    storageBucket: "anoni-52994.appspot.com",
    messagingSenderId: "1077849510142",
    appId: "1:1077849510142:web:c687edfbbc442f70db95af"
  };

  // Initialize Firebase
export default !firebase.apps.length  ? firebase.initializeApp(firebaseConfig): 'aaa';

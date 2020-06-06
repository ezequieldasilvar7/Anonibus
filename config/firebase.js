import firebase from 'firebase';
import "firebase/auth";
import "firebase/firestore";
import "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyCDj9DTtX1jyTjTXv9k2hLOYhoq8mKBDl0",
  authDomain: "anonibus2014103155.firebaseapp.com",
  databaseURL: "https://anonibus2014103155.firebaseio.com",
  projectId: "anonibus2014103155",
  storageBucket: "anonibus2014103155.appspot.com",
  messagingSenderId: "459841415323",
  appId: "1:459841415323:web:1cbd85bb327dfcb0cdbe3e"
};

export default !firebase.apps.length ? firebase.initializeApp(firebaseConfig) : firebase.app();
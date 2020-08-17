import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyCWVo9-KI_BRsgWf0LSG3BXO2-ev6jliKk",
    authDomain: "twitter-clone-faiyaj.firebaseapp.com",
    databaseURL: "https://twitter-clone-faiyaj.firebaseio.com",
    projectId: "twitter-clone-faiyaj",
    storageBucket: "twitter-clone-faiyaj.appspot.com",
    messagingSenderId: "465719549436",
    appId: "1:465719549436:web:ea57a84ba980484cd0a679",
    measurementId: "G-VFMJVGFVKN"
  };


const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
export default db;
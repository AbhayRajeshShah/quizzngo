import firebase from "firebase/app"
import firestore from "firebase/firestore"


const firebaseConfig = {apiKey: process.env.REACT_APP_FIREBASEAPIKEY,
authDomain: process.env.REACT_APP_FIREBASEAUTHDOMAIN,
projectId: process.env.REACT_APP_FIREBASEPROJECTID,
storageBucket: process.env.REACT_APP_FIREBASESOTRAGEBUCKET,
messagingSenderId: process.env.REACT_APP_FIREBASESENDERID,
appId: process.env.REACT_APP_FIREBASEAPPID
}

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();
db.collection("quizz");

export default db;
import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyBnP_osa_ljEIPk4c7w2zXPt4dGrBUmPR4",
  authDomain: "all-things-turkmen.firebaseapp.com",
  projectId: "all-things-turkmen",
  storageBucket: "all-things-turkmen.appspot.com",
  messagingSenderId: "743867518954",
  appId: "1:743867518954:web:9ec22689643d347b032c93",
  measurementId: "G-L5V8F2B3SM",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };

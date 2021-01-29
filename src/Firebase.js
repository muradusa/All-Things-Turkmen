import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyAamGor0aTWF73IEZ6mqZxVW87lUVNokp8",
  authDomain: "all-things-turkmen-4e22c.firebaseapp.com",
  projectId: "all-things-turkmen-4e22c",
  storageBucket: "all-things-turkmen-4e22c.appspot.com",
  messagingSenderId: "456836598037",
  appId: "1:456836598037:web:6a13177db41850d11ac11c",
  measurementId: "G-MGRWBBYLM4",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };

import firebase from "firebase";
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB-BhAdhBew08sdc0yFcTqAYX8t6ukWiEc",
  authDomain: "unsplash-clone-d0a83.firebaseapp.com",
  projectId: "unsplash-clone-d0a83",
  storageBucket: "unsplash-clone-d0a83.appspot.com",
  messagingSenderId: "752164981051",
  appId: "1:752164981051:web:f219a8b1a233ff16d40f1e",
  measurementId: "G-J2R28EWPP5"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;

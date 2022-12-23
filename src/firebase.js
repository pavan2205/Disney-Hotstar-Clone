import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyA5YYlm58IEl3OBbwGj2JLTpyBcuiGpicE",
  authDomain: "disney-hotstar-dc518.firebaseapp.com",
  projectId: "disney-hotstar-dc518",
  storageBucket: "disney-hotstar-dc518.appspot.com",
  messagingSenderId: "443287365037",
  appId: "1:443287365037:web:5de5c02fe54b082f41ed24",
  measurementId: "G-ZL8WEE9YBC",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
// const storage = firebase.storage();

export { auth, provider };
export default db;

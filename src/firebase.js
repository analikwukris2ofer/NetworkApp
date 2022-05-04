// import { initializeApp } from "firebase/app";
// import { getAuth } from "firebase/auth";
// import { getFirestore } from "firebase/firestore";
import firebase from "firebase";

const firebaseConfig = {
  apiKey: "***********************",
  authDomain: "*****************",
  projectId: "*****************",
  storageBucket: "************************",
  messagingSenderId: "*****************",
  appId: "*************************************",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
// const firebaseApp = initializeApp(firebaseConfig);
// const db = getFirestore(firebaseApp);
const db = firebaseApp.firestore();
const auth = firebase.auth();
// const auth = getAuth();
// const auth = firebase.auth();

export { db, auth };

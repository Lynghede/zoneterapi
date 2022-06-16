// Firebase App (the core Firebase SDK) is always required and must be listed first
// import * as firebase from "firebase/app";
import firebase from "firebase/compat/app";

// Add the Firebase products that you want to use
import "firebase/compat/firestore";

import { useState, useEffect } from "react";

const firebaseConfig = {
  apiKey: "AIzaSyCXyFekP2hk0RTKqiIYpHs9vlVNj3sZHdY",
  authDomain: "react-firebase-example-3761b.firebaseapp.com",
  databaseURL: "https://react-firebase-example-3761b.firebaseio.com",
  projectId: "react-firebase-example-3761b",
  storageBucket: "react-firebase-example-3761b.appspot.com",
  messagingSenderId: "975599794967",
  appId: "1:975599794967:web:f837da0c0057b296bd5552",
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
const database = firebase.firestore();

export function useCollection(path) {
  const [state, setState] = useState([]);
  useEffect(() => {
    return database.collection(path).onSnapshot((querySnapshot) => {
      const docs = [];
      querySnapshot.forEach((doc) => docs.push({ id: doc.id, ...doc.data() }));
      setState(docs);
    });
  }, [path]);
  return [
    state,
    {
      add(data) {
        return database.collection(path).add(data);
      },
      update(id, data) {
        return database.collection(path).doc(id).set(data);
      },
      delete(id) {
        return database.collection(path).doc(id).delete();
      },
    },
  ];
}

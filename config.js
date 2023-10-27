import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

export const firebaseConfig = {
  apiKey: "AIzaSyC314_GEYNJLiLIvc15TAy_PmygkpzAzH8",
  authDomain: "firstapp-abfb9.firebaseapp.com",
  projectId: "firstapp-abfb9",
  storageBucket: "firstapp-abfb9.appspot.com",
  messagingSenderId: "798922145411",
  appId: "1:798922145411:web:a40becfe12944432f425b6",
};

// if (!firebase.app.length) {
firebase.initializeApp(firebaseConfig);
// }

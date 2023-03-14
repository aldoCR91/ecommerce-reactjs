import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore/lite';

const firebaseConfig = {
  apiKey: "AIzaSyDzG46xfsPxH0vTiYB7Tq4OeUEIcbd85K8",
  authDomain: "storeapp-2d00a.firebaseapp.com",
  projectId: "storeapp-2d00a",
  storageBucket: "storeapp-2d00a.appspot.com",
  messagingSenderId: "455972002627",
  appId: "1:455972002627:web:3eb58a080dc9f1aa546df6"
};

export const FirebaseApp = initializeApp(firebaseConfig);
export const FirebaseAuth = getAuth(FirebaseApp);
export const FirebaseDB = getFirestore(FirebaseApp);
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth"
import { getFirestore } from "firebase/firestore/lite"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAA8zwm-fJvHIFv3_rsGRw3DLVecL01VK8",
    authDomain: "react-curso-journal-app-f7172.firebaseapp.com",
    projectId: "react-curso-journal-app-f7172",
    storageBucket: "react-curso-journal-app-f7172.appspot.com",
    messagingSenderId: "114993325976",
    appId: "1:114993325976:web:2c38ce0ee81f4d2d05eded"
};

// Initialize Firebase
export const FirebaseApp = initializeApp(firebaseConfig);
export const FirebaseAuth = getAuth(FirebaseApp);
export const FirebaseDB = getFirestore(FirebaseApp);

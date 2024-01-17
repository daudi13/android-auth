// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth} from "firebase/auth"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAryvi3cJNtTgHYtZUVxzWekJQ4ra1PCzw",
  authDomain: "auth-project-cc9a6.firebaseapp.com",
  projectId: "auth-project-cc9a6",
  storageBucket: "auth-project-cc9a6.appspot.com",
  messagingSenderId: "583364502811",
  appId: "1:583364502811:web:2a6737822bc0c4561d1fbe"
};

// Initialize Firebase
export const FIREBASE_APP = initializeApp(firebaseConfig);
export const FIREBASE_AUTH = getAuth(FIREBASE_APP); 
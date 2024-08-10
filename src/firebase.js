// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, signInWithPopup, sendPasswordResetEmail } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDfKHqZib1YTh-co_IB9KdPQc-ky4DfpZg",
  authDomain: "fir-login-auth-c474b.firebaseapp.com",
  projectId: "fir-login-auth-c474b",
  storageBucket: "fir-login-auth-c474b.appspot.com",
  messagingSenderId: "345240273101",
  appId: "1:345240273101:web:41f92f8c8100893ec6a984"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth();
const provider = new GoogleAuthProvider();

export { auth, provider, signInWithPopup, sendPasswordResetEmail };
export default app;
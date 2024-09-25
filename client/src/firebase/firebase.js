// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCHcQtnYMmxnLOEgbLA7kAVL21gN6Q0kZY",
  authDomain: "hackbattle2nd.firebaseapp.com",
  projectId: "hackbattle2nd",
  storageBucket: "hackbattle2nd.appspot.com",
  messagingSenderId: "1018393860090",
  appId: "1:1018393860090:web:2f2c8f4dbd27983c3cf643",
  measurementId: "G-89F83RT8CN"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);


export default auth;
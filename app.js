// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBjU6UA0BJSH7A0GoAkLdUh9mmoyow72pI",
  authDomain: "duanhltrade.firebaseapp.com",
  databaseURL: "https://duanhltrade-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "duanhltrade",
  storageBucket: "duanhltrade.firebasestorage.app",
  messagingSenderId: "1066085226785",
  appId: "1:1066085226785:web:498f44f51622821aef0660",
  measurementId: "G-T5LWWCXY56"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
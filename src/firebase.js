// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDJRMqB2dbGiXxc0fxqMPZkuAWDhucKD2c",
  authDomain: "global-estate-a0cdd.firebaseapp.com",
  projectId: "global-estate-a0cdd",
  storageBucket: "global-estate-a0cdd.appspot.com",
  messagingSenderId: "59617793224",
  appId: "1:59617793224:web:ba617a77025ccfc33fc1fd"
};

// Initialize Firebase
initializeApp(firebaseConfig);
export const db = getFirestore()

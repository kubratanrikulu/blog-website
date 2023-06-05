// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCpOkL2b9j_sP0VyOliylsdw39u2zz-GYU",
  authDomain: "react-blog-website-d1de8.firebaseapp.com",
  projectId: "react-blog-website-d1de8",
  storageBucket: "react-blog-website-d1de8.appspot.com",
  messagingSenderId: "678737635128",
  appId: "1:678737635128:web:c2c172089895029351c3cd",
  measurementId: "G-QY33M7LRNR"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

const db = getFirestore(app);
export default db;
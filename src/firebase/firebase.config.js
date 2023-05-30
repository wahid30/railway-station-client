// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA_loJj1ft5D8_UbNCoyznpVDycpS7Z0Xs",
  authDomain: "railway-station-client.firebaseapp.com",
  projectId: "railway-station-client",
  storageBucket: "railway-station-client.appspot.com",
  messagingSenderId: "391877797736",
  appId: "1:391877797736:web:d280ec71510d64249dd8dd",
  measurementId: "G-KSPW6QX7WT"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export default app;
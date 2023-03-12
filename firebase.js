 // Import the functions you need from the SDKs you need

 import { initializeApp } from "https://www.gstatic.com/firebasejs/9.17.2/firebase-app.js";

 import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.17.2/firebase-analytics.js";

 
import { getFirestore } from "firebase/firestore";

 // TODO: Add SDKs for Firebase products that you want to use

 // https://firebase.google.com/docs/web/setup#available-libraries


 // Your web app's Firebase configuration

 // For Firebase JS SDK v7.20.0 and later, measurementId is optional

 const firebaseConfig = {

   apiKey: "AIzaSyDKfO86CRLFA2JVM75Uy2Szms2LPAGQWMA",

   authDomain: "to-do-app-8161f.firebaseapp.com",

   projectId: "to-do-app-8161f",

   storageBucket: "to-do-app-8161f.appspot.com",

   messagingSenderId: "675037105643",

   appId: "1:675037105643:web:588866c9d28824a0c95dae",

   measurementId: "G-23FPF04T03"

 };


 // Initialize Firebase

 const app = initializeApp(firebaseConfig);

 const analytics = getAnalytics();

 const db = getFirestore();

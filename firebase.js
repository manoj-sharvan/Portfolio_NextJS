// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyABECTR5zPiwAiY83rGvF_Q6Ig7kgRXAJQ",
  authDomain: "portfolio-7de84.firebaseapp.com",
  projectId: "portfolio-7de84",
  storageBucket: "portfolio-7de84.appspot.com",
  messagingSenderId: "678099920433",
  appId: "1:678099920433:web:97f8b22fa8b2dacb97d710",
  measurementId: "G-0RLM754NP6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
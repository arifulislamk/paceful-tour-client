// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDD3wCN4iC-gIvAWZUwTXEjtXZ_EtcFG7s",
  authDomain: "peaceful-tour.firebaseapp.com",
  projectId: "peaceful-tour",
  storageBucket: "peaceful-tour.appspot.com",
  messagingSenderId: "958570581678",
  appId: "1:958570581678:web:d5fa1c7af60cccaf7d273f"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app ;
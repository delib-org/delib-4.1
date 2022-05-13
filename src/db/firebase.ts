import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// TODO: Replace the following with your app's Firebase project configuration
// See: https://firebase.google.com/docs/web/learn-more#config-object
const firebaseConfig = {
    apiKey: "AIzaSyAjyyjWM63PSjyRoDI-87MpRtfOFnOO0aA",
    authDomain: "delib21-aaeb0.firebaseapp.com",
    databaseURL: "https://delib21-aaeb0.firebaseio.com",
    projectId: "delib21-aaeb0",
    storageBucket: "delib21-aaeb0.appspot.com",
    messagingSenderId: "845650714645",
    appId: "1:845650714645:web:d5f440ae9aaedc150bae1c"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);


// Initialize Cloud Firestore and get a reference to the service
const DB = getFirestore(app);
export default DB;


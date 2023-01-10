// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDwW10gEhjDQXwch230TV4h24bX3cX2Ck4",
  authDomain: "phone-repair-ass-11.firebaseapp.com",
  projectId: "phone-repair-ass-11",
  storageBucket: "phone-repair-ass-11.appspot.com",
  messagingSenderId: "263888106713",
  appId: "1:263888106713:web:6e7215ac0882b045aebac8"
};
  // apiKey: process.env.REACT_APP_apiKey,
  // authDomain: process.env.REACT_APP_authDomain,
  // projectId: process.env.REACT_APP_projectId,
  // storageBucket: process.env.REACT_APP_storageBucket,
  // messagingSenderId: process.env.REACT_APP_messagingSenderId,
  // appId: process.env.REACT_APP_appId

console.log(process.env.to);
// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app
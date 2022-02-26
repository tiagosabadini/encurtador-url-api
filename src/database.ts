import { initializeApp } from "firebase/app"
import { getFirestore } from "firebase/firestore"
//utilizar dotenv

initializeApp({
  apiKey: "AIzaSyAmU3RYeip4QvlNtpuZZO2na6XoqHFCwcY",
  authDomain: "shorten-url-5870e.firebaseapp.com",
  projectId: "shorten-url-5870e",
  storageBucket: "shorten-url-5870e.appspot.com",
  messagingSenderId: "633129542641",
  appId: "1:633129542641:web:c901e795ab224a2e275a50"
});
const database = getFirestore();
export default database;

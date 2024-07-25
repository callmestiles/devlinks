// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import { getDatabase, ref, onValue, set } from "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyCJBCIGbKvuMQ_f_AYAEC9bImJjlH4yJ4A",
  authDomain: "devlinks-d9bfd.firebaseapp.com",
  databaseURL: "https://devlinks-d9bfd-default-rtdb.firebaseio.com",
  projectId: "devlinks-d9bfd",
  storageBucket: "devlinks-d9bfd.appspot.com",
  messagingSenderId: "740645658638",
  appId: "1:740645658638:web:e88fc2bb81081d59351c5f",
  measurementId: "G-MQVFNYEZK3"
};

const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
const db = getDatabase(app);

export default app;
export { db };

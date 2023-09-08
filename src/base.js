import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDdFoMMhEjURi8bD8xUXzmI0ZYJ4f91PeM",
  authDomain: "vandalay-4849a.firebaseapp.com",
  projectId: "vandalay-4849a",
  storageBucket: "vandalay-4849a.appspot.com",
  messagingSenderId: "277935657989",
  appId: "1:277935657989:web:d935cbc6a99537fde9386c"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
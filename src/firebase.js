import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyBYI7Sc1KB0hqc8dHCOn2tQaxrsdIei-nE",
  authDomain: "clone-e4bb8.firebaseapp.com",
  projectId: "clone-e4bb8",
  storageBucket: "clone-e4bb8.appspot.com",
  messagingSenderId: "27625123389",
  appId: "1:27625123389:web:4c68cfa55dea931c494454",
  measurementId: "G-DPNCRZJ8LK"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
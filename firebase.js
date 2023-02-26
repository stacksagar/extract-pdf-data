import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getDatabase } from "firebase/database";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB_TPKXiZI3wnxY4GGp2EHXr8AnSwIp9hs",
  authDomain: "extract-pdf-data-a0872.firebaseapp.com",
  projectId: "extract-pdf-data-a0872",
  storageBucket: "extract-pdf-data-a0872.appspot.com",
  messagingSenderId: "335394231061",
  appId: "1:335394231061:web:b4484dbe690ae034574f1c",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth();
const db = getDatabase();
export { app, auth, db };

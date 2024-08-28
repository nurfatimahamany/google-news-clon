import { initializeApp } from "firebase/app";
import {getAuth, GoogleAuthProvider} from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyDureKHm8iaknDBDUdd3bglY9dbAPnwHx8",
    authDomain: "clone-news-na.firebaseapp.com",
    projectId: "clone-news-na",
    storageBucket: "clone-news-na.appspot.com",
    messagingSenderId: "995377488707",
    appId: "1:995377488707:web:72ba25d12c96eb5700c5f6"
  };

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);

export const googleProvider = new GoogleAuthProvider();

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD4kQ6gOac6yrs0eWYPA7uDSAquyVyfuZY",
  authDomain: "shareprompt-aaec7.firebaseapp.com",
  projectId: "shareprompt-aaec7",
  storageBucket: "shareprompt-aaec7.appspot.com",
  messagingSenderId: "514013371315",
  appId: "1:514013371315:web:56ff3301031ebc7ad089c6",
  measurementId: "G-PNXM6DN63B",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const googleauthprovider = new GoogleAuthProvider();
export const db = getFirestore(app);
export const storage = getStorage(app);

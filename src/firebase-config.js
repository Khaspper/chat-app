import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCrQicusTCGtoE0qgnS0uLdEZnUTLGFKpc",
  authDomain: "chatapp-38419.firebaseapp.com",
  projectId: "chatapp-38419",
  storageBucket: "chatapp-38419.appspot.com",
  messagingSenderId: "710254674202",
  appId: "1:710254674202:web:be903574cd72ce89582ca3"
};

const app = initializeApp(firebaseConfig);

// This is how we get users to sign-in
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();
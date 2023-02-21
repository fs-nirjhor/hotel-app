import { initializeApp } from "firebase/app";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signInWithPopup, GoogleAuthProvider, FacebookAuthProvider, updateProfile } from "firebase/auth";
import firebaseConfig from "./firebaseConfig";

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const GoogleProvider = new GoogleAuthProvider();
const FacebookProvider = new FacebookAuthProvider();

createUserWithEmailAndPassword(auth, email, password)
updateProfile(auth.currentUser,{displayName:"FS Nirjhor"})

signInWithEmailAndPassword(auth, email, password)

signInWithPopup(auth, provider)




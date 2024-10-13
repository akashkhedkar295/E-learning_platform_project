// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth , GoogleAuthProvider } from 'firebase/auth'
import {getFirestore} from 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD1zdo3uVpo7G1PSw1qc2mzY0uw5S0EVTk",
  authDomain: "coder-com-b85e5.firebaseapp.com",
  projectId: "coder-com-b85e5",
  storageBucket: "coder-com-b85e5.appspot.com",
  messagingSenderId: "1022554201936",
  appId: "1:1022554201936:web:5fd3d431adc744e7061655"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth= getAuth(app);
export default app;
export const provider = new GoogleAuthProvider()
export const firestore = getFirestore(app);
// export const signInWithGoogle = () =>{
//   signInWithPopup(auth,provider)
//   .then((result) =>{
//     console.log(result);
//   })
//   .catch((error)=>{
//     console.log(error);
//   })
// }
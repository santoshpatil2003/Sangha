// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore  } from 'firebase/firestore';
import { getAuth } from 'firebase/auth'
import { getStorage } from "firebase/storage";
// import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDQtCR2XcIrlQF6diAeax1_2jWbaLgrsIQ",
  authDomain: "sangha-664f8.firebaseapp.com",
  projectId: "sangha-664f8",
  storageBucket: "sangha-664f8.appspot.com",
  messagingSenderId: "1027973531730",
  appId: "1:1027973531730:web:8d94ff253ed5705bb5778b",
  measurementId: "G-XL1JKGQ5FM"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const storage = getStorage(app);
// const analytics = getAnalytics(app);


// if(auth.currentUser.uid === null){
//   console.log("empty firestore");
// }else{
  
// }

// export const uid = auth.currentUser.uid;
export const auth = getAuth();
export const db =  getFirestore(app);
export {storage}

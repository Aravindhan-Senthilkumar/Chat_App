// Import the functions you need from the SDKs you need
import { initializeApp,getApps } from "firebase/app";
import { initializeAuth,getReactNativePersistence,getAuth } from "firebase/auth";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { getFirestore,collection } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCnwyV1YBLVufoKuBPPr81NKAhSryJtZUc",
  authDomain: "chatapp-5b1fd.firebaseapp.com",
  projectId: "chatapp-5b1fd",
  storageBucket: "chatapp-5b1fd.firebasestorage.app",
  messagingSenderId: "626619969424",
  appId: "1:626619969424:web:9e600908c305c5aa1a8d15"
};
let auth;
let app;

if(getApps().length===0){
  const app = initializeApp(firebaseConfig);
  auth = initializeAuth(app,{
    persistence: getReactNativePersistence(AsyncStorage)
  })
}else{
  auth=getAuth();
}
// Initialize Firebase

export default auth;
export const db = getFirestore(app);
export const userRef = collection(db,'users');
export const roomRef = collection(db,'rooms');
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from "firebase";
const firebaseConfig = {
    apiKey: "AIzaSyBC_25qAm7U_I_hCAwb0CBo2EAYQzkWs0A",
    authDomain: "whatsapp-clone-8cd3c.firebaseapp.com",
    projectId: "whatsapp-clone-8cd3c",
    storageBucket: "whatsapp-clone-8cd3c.appspot.com",
    messagingSenderId: "1059954463925",
    appId: "1:1059954463925:web:9f07f89614105192581afc",
    measurementId: "G-SMTN8RW0F2"
  };

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export {auth, provider};
export default db;

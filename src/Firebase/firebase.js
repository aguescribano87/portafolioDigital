import firebase from "firebase";

var firebaseConfig = {
    apiKey: "AIzaSyDqcH3IoLe689aa4fa-c_PRsbRaX_5uETk",
    authDomain: "agustin-escribano.firebaseapp.com",
    projectId: "agustin-escribano",
    storageBucket: "agustin-escribano.appspot.com",
    messagingSenderId: "171836809602",
    appId: "1:171836809602:web:6b8180c2453795280f2f9b"
  };

  const fb = firebase.initializeApp(firebaseConfig)

  export const dataBase = fb.firestore()
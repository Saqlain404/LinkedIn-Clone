import firebase from "firebase";


const firebaseConfig = {
    apiKey: "AIzaSyDN506H2aRzlyarcBDqnSf5RLva_2F5qCw",
    authDomain: "linkedin-clone-ccb98.firebaseapp.com",
    projectId: "linkedin-clone-ccb98",
    storageBucket: "linkedin-clone-ccb98.appspot.com",
    messagingSenderId: "445178747752",
    appId: "1:445178747752:web:56075b1689d64a7a5c94dd"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();

  const auth = firebase.auth();

  const provider = new firebase.auth.GoogleAuthProvider();

  const storage = firebase.storage();

  export {auth, provider, storage};
  export default db;
import firebase from 'firebase/app';
import 'firebase/auth';

//ADD YOUR FIREBASE APP SDK
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDZ2iDEF98ITu1pOTf1blLXE37FO6LIzsE",
  authDomain: "viewtube-9ad8e.firebaseapp.com",
  projectId: "viewtube-9ad8e",
  storageBucket: "viewtube-9ad8e.appspot.com",
  messagingSenderId: "382600146722",
  appId: "1:382600146722:web:6e067cb21897d4c67dbf7b"
  };

  firebase.initializeApp(firebaseConfig);

  export default firebase.auth();

import firebase from 'firebase'

const firebaseConfig = {
  apiKey: "AIzaSyC_KSOOwWwBLhWzg9KgovZ0BG1D9zWLtK8",
  authDomain: "snapchat-clone-769ab.firebaseapp.com",
  projectId: "snapchat-clone-769ab",
  storageBucket: "snapchat-clone-769ab.appspot.com",
  messagingSenderId: "1008382811910",
  appId: "1:1008382811910:web:8d2436d88bdee8209d0887",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const storage = firebase.storage();
const provider = new firebase.auth.GoogleAuthProvider();

export { db, auth, storage, provider };
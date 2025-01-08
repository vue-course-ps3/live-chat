import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'


const firebaseConfig = {
  apiKey: "AIzaSyAAkRFS76DIWr7mJxkuQeeQsc8t-kaa0B4",
  authDomain: "udemy-vue-firebase-sites-e859c.firebaseapp.com",
  projectId: "udemy-vue-firebase-sites-e859c",
  storageBucket: "udemy-vue-firebase-sites-e859c.firebasestorage.app",
  messagingSenderId: "31456600145",
  appId: "1:31456600145:web:e210d29c8f26f542bc1870"
};

// init Firebase
firebase.initializeApp(firebaseConfig)

// init Firestore
const projectFirestore = firebase.firestore()

// init Auth
const projectAuth = firebase.auth()

// timestamp
const timestamp = firebase.firestore.FieldValue.serverTimestamp

export { projectFirestore, projectAuth ,timestamp }

import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';
import 'firebase/storage';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyDwWZ5TWXkeh0t-64_aVbJEQOxPYPNhh5w',
  authDomain: 'samsclients-1c896.firebaseapp.com',
  databaseURL: 'https://samsclients-1c896.firebaseio.com',
  projectId: 'samsclients-1c896',
  storageBucket: 'samsclients-1c896.appspot.com',
  messagingSenderId: '130743940539',
  appId: '1:130743940539:web:dc6090af31166ddff0009e',
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

firebase.firestore();

export default firebase;

export const storage = firebase.storage();

import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';


const firebaseConfig = {
  apiKey: "AIzaSyA7ehi6yf8JgmB-3SwY0jG-i73q23VmP58",
  authDomain: "atostogos-cernauskas.firebaseapp.com",
  projectId: "atostogos-cernauskas",
  storageBucket: "atostogos-cernauskas.appspot.com",
  messagingSenderId: "368738347397",
  appId: "1:368738347397:web:b953199cfe0b5fd282fcec"
};
  
export const app = firebase.initializeApp(firebaseConfig);

export default firebase
import {initializeApp} from 'firebase/app'
import 'firebase/auth'
import  'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyBbCs1ei5aud0NIZ8OhPvwEWTguUmoUXRk",
  authDomain: "hh-music.firebaseapp.com",
  projectId: "hh-music",
  storageBucket: "hh-music.appspot.com",
  messagingSenderId: "736308527212",
  appId: "1:736308527212:web:774a14d204036efe3f5849",
  measurementId: "G-JP022M25CP"
};
export const Fire = initializeApp(firebaseConfig);

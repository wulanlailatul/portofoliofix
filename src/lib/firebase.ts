// lib/firebase.ts
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyChjZUb8WEnQoI118q9N9xc1JWrKDodUCo",
  authDomain: "wulan-portofolio.firebaseapp.com",
  projectId: "wulan-portofolio",
  storageBucket: "wulan-portofolio.firebasestorage.app",
  messagingSenderId: "919112462883",
  appId: "1:919112462883:web:9a336cf9c0363370f67796"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);

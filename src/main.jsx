import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCCru2BgLd50mwejHb4e-d9lJT3tN6QcE4",
  authDomain: "block-8b839.firebaseapp.com",
  projectId: "block-8b839",
  storageBucket: "block-8b839.appspot.com",
  messagingSenderId: "57395761281",
  appId: "1:57395761281:web:69c532e382c61b00787d80"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)

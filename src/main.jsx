import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAqIZ-o6UCANgv537GjSejWBtawqLplTXo",
  authDomain: "blockelectronicos.firebaseapp.com",
  projectId: "blockelectronicos",
  storageBucket: "blockelectronicos.appspot.com",
  messagingSenderId: "728762467192",
  appId: "1:728762467192:web:63cdbd594895baa0bb3e8d"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)

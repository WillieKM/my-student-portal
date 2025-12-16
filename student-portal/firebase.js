// firebase.js
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-app.js";
import { getAuth, onAuthStateChanged } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-auth.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-firestore.js";

// 🔴 YOUR REAL FIREBASE CONFIG (FIXED)
const firebaseConfig = {
  apiKey: "AIzaSyAz_Ld5YRBJJo1nxrU0wkmoSeUbPyYITxE",
  authDomain: "universityportal-prod.firebaseapp.com",
  projectId: "universityportal-prod",
  storageBucket: "universityportal-prod.appspot.com",
  messagingSenderId: "500607842510",
  appId: "1:500607842510:web:b614f87ffbabe9f3e5789f"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);

// 🔐 AUTH GUARD (used on portal pages)
export function requireAuth() {
  onAuthStateChanged(auth, (user) => {
    if (!user) {
      window.location.href = "../login.html";
    }
  });
}

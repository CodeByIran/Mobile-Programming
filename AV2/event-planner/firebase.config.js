import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCaQGeh7z41nz00ybSSU7SawwrS6V27NF4",
  authDomain: "react-app-event-planner.firebaseapp.com",
  projectId: "react-app-event-planner",
  storageBucket: "react-app-event-planner.firebasestorage.app",
  messagingSenderId: "905885008739",
  appId: "1:905885008739:web:255f9ad9a97f645f700956"
};

// Inicializa Firebase
const app = initializeApp(firebaseConfig);

// Exporta autenticação
export const auth = getAuth(app);
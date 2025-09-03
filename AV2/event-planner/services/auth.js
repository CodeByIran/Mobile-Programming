// services/auth.js
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebaseConfig"; // ajuste o caminho se necessário

// Cadastro
export async function register(email, password) {
  return await createUserWithEmailAndPassword(auth, email, password);
}

// Login
export async function login(email, password) {
  return await signInWithEmailAndPassword(auth, email, password);
}

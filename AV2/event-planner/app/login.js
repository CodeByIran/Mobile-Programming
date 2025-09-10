// import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
// import { useRouter } from 'expo-router';

// export default function Login() {
//   const router = useRouter();

//   return (
//     <View style={styles.container}>
//       <Text style={styles.title}>Login</Text>
//       <TextInput placeholder="Email" style={styles.input} />
//       <TextInput placeholder="Senha" style={styles.input} secureTextEntry />
      
//       <TouchableOpacity style={styles.button} onPress={() => router.replace('/')}>
//   <Text style={styles.buttonText}>Fazer Login</Text>
// </TouchableOpacity>

//       <TouchableOpacity onPress={() => router.push('/cadastro')}>
//         <Text style={styles.link}>Não tem conta? Cadastre-se</Text>
//       </TouchableOpacity>
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: { flex: 1, justifyContent: 'center', padding: 20 },
//   title: { fontSize: 28, marginBottom: 20, textAlign: 'center' },
//   input: { backgroundColor: '#eee', padding: 15, marginBottom: 15, borderRadius: 10 },
//   button: { backgroundColor: '#476482', padding: 15, borderRadius: 10, alignItems: 'center' },
//   buttonText: { color: '#fff', fontWeight: 'bold' },
//   link: { marginTop: 10, textAlign: 'center', color: '#476482' },
// });

import { useState, useEffect } from "react";
import { View, TouchableOpacity, Text, TextInput, Button, Alert, StyleSheet } from "react-native";
import { useRouter } from "expo-router";
import { auth } from "../firebaseConfig";
import { signInWithEmailAndPassword, onAuthStateChanged } from "firebase/auth";

export default function LoginScreen() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();

  // Se usuário já estiver logado, vai direto para Home
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) router.replace("/");
    });
    return () => unsubscribe();
  }, []);

  const handleLogin = async () => {
    try {
      await signInWithEmailAndPassword(auth, email, password);
      router.replace("/"); // redireciona para Home
    } catch (err) {
      Alert.alert("Erro", "Email ou senha incorretos");
      console.log(err);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Login</Text>
      <TextInput
        style={styles.input}
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
      />
      <TextInput
        style={styles.input}
        placeholder="Senha"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
      />
      <Button title="Entrar" onPress={handleLogin} />
      <Button title="Não tem conta? Cadastre-se" onPress={() => router.push("/cadastro")} />
    
      <TouchableOpacity onPress={() => router.push("/forgotPassword")}>
        <Text style={styles.link}>Esqueci minha senha</Text>
      </TouchableOpacity>

    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: "center", padding: 20 },
  title: { fontSize: 24, fontWeight: "bold", marginBottom: 20, textAlign: "center" },
  input: { borderWidth: 1, padding: 10, marginBottom: 15, borderRadius: 5 },
});

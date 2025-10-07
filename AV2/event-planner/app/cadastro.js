// import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
// import { useRouter } from 'expo-router';

// export default function Cadastro() {
//   const router = useRouter();

//   return (
//     <View style={styles.container}>
//       <Text style={styles.title}>Cadastro</Text>
//       <TextInput placeholder="Nome Completo" style={styles.input} />
//       <TextInput placeholder="Email" style={styles.input} />
//       <TextInput placeholder="Senha" secureTextEntry style={styles.input} />

//       <TouchableOpacity style={styles.button} onPress={() => router.push('/login')}>
//         <Text style={styles.buttonText}>Cadastrar</Text>
//       </TouchableOpacity>

//       <TouchableOpacity onPress={() => router.push('/login')}>
//       <Text style={styles.link}>Já tem conta? Faça login</Text>
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



// import { useState } from "react";
// import { View, Text, TextInput, Button, Alert, StyleSheet } from "react-native";
// import { useRouter } from "expo-router";
// import { auth } from "../firebaseConfig";
// import { createUserWithEmailAndPassword } from "firebase/auth";

// export default function CadastroScreen() {
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const router = useRouter();

//   async function handleRegister() {
//     if (password.length < 6) {
//       Alert.alert("Erro", "A senha deve ter pelo menos 6 caracteres");
//       return;
//     }

//     try {
//       await createUserWithEmailAndPassword(auth, email, password);
//       Alert.alert("Sucesso", "Cadastro realizado!");
//       router.push("/login"); // depois do cadastro, vai pra login
//     } catch (error) {
//       Alert.alert("Erro", error.message);
//     }
//   }

//   return (
//     <View style={styles.container}>
//       <Text style={styles.title}>Cadastro</Text>
//       <TextInput
//         style={styles.input}
//         placeholder="Email"
//         value={email}
//         onChangeText={setEmail}
//       />
//       <TextInput
//         style={styles.input}
//         placeholder="Senha"
//         value={password}
//         onChangeText={setPassword}
//         secureTextEntry
//       />
//       <Button title="Cadastrar" onPress={handleRegister} />
//       <Button title="Já tem conta? Ir para Login" onPress={() => router.push("/login")} />
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: { flex: 1, justifyContent: "center", padding: 20 },
//   title: { fontSize: 24, fontWeight: "bold", marginBottom: 20, textAlign: "center" },
//   input: { borderWidth: 1, padding: 10, marginBottom: 15, borderRadius: 5 },
// });

// comentado funcionando e abaixo é teste o do inicio desconsidere, meu codigo minhas regras minha bagunça
// só eu compreendo por agora do pq deixar comentado, curioso do meu github fique quieto


import { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, Alert, StyleSheet, ActivityIndicator } from "react-native";
import { useRouter } from "expo-router";
import { auth } from "../firebaseConfig";
import { createUserWithEmailAndPassword } from "firebase/auth";

export default function CadastroScreen() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  async function handleRegister() {
    if (password.length < 6) {
      Alert.alert("Erro", "A senha deve ter pelo menos 6 caracteres");
      return;
    }

    setLoading(true);
    try {
      await createUserWithEmailAndPassword(auth, email, password);
      Alert.alert("Sucesso", "Cadastro realizado!");
      router.push("/login");
    } catch (error) {
      Alert.alert("Erro", error.message);
    } finally {
      setLoading(false);
    }
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Cadastro</Text>
      <TextInput style={styles.input} placeholder="Email" value={email} onChangeText={setEmail} />
      <TextInput style={styles.input} placeholder="Senha" value={password} onChangeText={setPassword} secureTextEntry />

      <TouchableOpacity style={styles.button} onPress={handleRegister} disabled={loading}>
        {loading ? <ActivityIndicator color="#fff" /> : <Text style={styles.buttonText}>Cadastrar</Text>}
      </TouchableOpacity>

      <TouchableOpacity onPress={() => router.push("/login")}>
        <Text style={styles.link}>Já tem conta? Ir para Login</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: "center", padding: 20 },
  title: { fontSize: 24, fontWeight: "bold", marginBottom: 20, textAlign: "center" },
  input: { borderWidth: 1, padding: 10, marginBottom: 15, borderRadius: 5 },
  button: { backgroundColor: "#476482", padding: 15, borderRadius: 10, alignItems: "center" },
  buttonText: { color: "#fff", fontWeight: "bold" },
  link: { marginTop: 15, color: "#476482", textAlign: "center", fontWeight: "bold" },
});

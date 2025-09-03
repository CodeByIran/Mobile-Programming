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



import { useState } from "react";
import { View, Text, TextInput, Button, Alert, StyleSheet } from "react-native";
import { register } from "../services/auth";
import { useRouter } from "expo-router";

export default function CadastroScreen() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();

  async function handleRegister() {
    try {
      await register(email, password);
      Alert.alert("Sucesso", "Cadastro realizado!");
      router.push("/login"); // depois do cadastro, vai pra login
    } catch (error) {
      Alert.alert("Erro", error.message);
    }
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Cadastro</Text>
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
      <Button title="Cadastrar" onPress={handleRegister} />
      <Button title="Já tem conta? Ir para Login" onPress={() => router.push("/login")} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: "center", padding: 20 },
  title: { fontSize: 24, fontWeight: "bold", marginBottom: 20, textAlign: "center" },
  input: { borderWidth: 1, padding: 10, marginBottom: 15, borderRadius: 5 },
});

// import { useState } from "react";
// import { View, Text, TextInput, Button, Alert, StyleSheet } from "react-native";
// import { sendPasswordResetEmail } from "firebase/auth";
// import { auth } from "../firebaseConfig";
// import { useRouter } from "expo-router";

// export default function ForgotPassword() {
//   const [email, setEmail] = useState("");
//   const router = useRouter();

//   const handleReset = async () => {
//     if (!email) {
//       Alert.alert("Erro", "Digite seu email");
//       return;
//     }

//     try {
//       await sendPasswordResetEmail(auth, email);
//       Alert.alert("Sucesso", "Email de redefinição enviado!");
//       router.replace("/login");
//     } catch (err) {
//       Alert.alert("Erro", "Não foi possível enviar o email.");
//       console.log(err);
//     }
//   };

//   return (
//     <View style={styles.container}>
//       <Text style={styles.title}>Redefinir Senha</Text>
//       <TextInput
//         style={styles.input}
//         placeholder="Digite seu email"
//         value={email}
//         onChangeText={setEmail}
//       />
//       <Button title="Enviar" onPress={handleReset} />
//       <Button title="Voltar para Login" onPress={() => router.push("/login")} />
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: { flex: 1, justifyContent: "center", padding: 20 },
//   title: { fontSize: 24, fontWeight: "bold", marginBottom: 20, textAlign: "center" },
//   input: { borderWidth: 1, padding: 10, marginBottom: 15, borderRadius: 5 },
// });


import { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, Alert, ActivityIndicator } from "react-native";
import { sendPasswordResetEmail } from "firebase/auth";
import { auth } from "../firebaseConfig";
import { useRouter } from "expo-router";
// import styles from "../styles";

export default function ForgotPassword() {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const handleReset = async () => {
    if (!email) {
      Alert.alert("Erro", "Digite seu email");
      return;
    }

    setLoading(true);
    try {
      await sendPasswordResetEmail(auth, email);
      setLoading(false);
      Alert.alert("Sucesso", "Email de redefinição enviado!");
      router.replace("/login");
    } catch (err) {
      setLoading(false);
      Alert.alert("Erro", "Não foi possível enviar o email. Verifique se o endereço está correto.");
      console.log(err);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Redefinir Senha</Text>

      <TextInput
        style={styles.input}
        placeholder="Digite seu email"
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
      />

      <TouchableOpacity style={styles.button} onPress={handleReset} disabled={loading}>
        {loading ? <ActivityIndicator color="#fff" /> : <Text style={styles.buttonText}>Enviar</Text>}
      </TouchableOpacity>

      <TouchableOpacity onPress={() => router.push("/login")}>
        <Text style={styles.link}>Voltar para o Login</Text>
      </TouchableOpacity>
    </View>
  );
}

import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { useRouter } from 'expo-router';

export default function DetalhesEvento() {
  const router = useRouter();

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => router.back()} style={styles.voltar}>
        <Text style={styles.voltarTexto}>← Voltar</Text>
      </TouchableOpacity>

      <Text style={styles.title}>Detalhes do Evento</Text>

      <View style={styles.card}>
        <Text style={styles.item}><Text style={styles.bold}>Nome:</Text> Empreendedorismo</Text>
        <Text style={styles.item}><Text style={styles.bold}>Local:</Text> Clube Devil</Text>
        <Text style={styles.item}><Text style={styles.bold}>Data:</Text> 24/11/2024</Text>
        <Text style={styles.item}><Text style={styles.bold}>Orçamento:</Text> Indefinido</Text>
        <Text style={styles.item}><Text style={styles.bold}>Descrição:</Text> Evento voltado para jovens empreendedores.</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, backgroundColor: '#f9f9f9' },
  voltar: { marginBottom: 10 },
  voltarTexto: { fontSize: 16, color: '#476482' },
  title: { fontSize: 24, fontWeight: 'bold', marginBottom: 20 },
  card: {
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  item: { fontSize: 16, marginBottom: 10 },
  bold: { fontWeight: 'bold' },
});

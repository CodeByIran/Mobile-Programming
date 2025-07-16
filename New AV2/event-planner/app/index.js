import { View, Text, TextInput, Image, Button, ScrollView, StyleSheet } from 'react-native';
import { useRouter } from 'expo-router';

export default function Home() {
  const router = useRouter();

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.header}>
        <View style={styles.avatar} />
        <Text style={styles.userText}>Olá, Usuário!</Text>
      </View>

      <View style={styles.searchContainer}>
        <TextInput style={styles.searchInput} placeholder="Pesquisar eventos..." />
        <Button title="Filtro" onPress={() => router.push('/configuracoes')} />
      </View>

      <View style={styles.categories}>
        <View style={styles.category}>
          <Image source={{ uri: 'https://img.icons8.com/emoji/48/birthday-cake.png' }} style={styles.categoryIcon} />
          <Text>Aniversário</Text>
        </View>
        <View style={styles.category}>
          <Image source={{ uri: 'https://img.icons8.com/emoji/48/trophy.png' }} style={styles.categoryIcon} />
          <Text>Festivais</Text>
        </View>
        <View style={styles.category}>
          <Image source={{ uri: 'https://img.icons8.com/emoji/48/microphone.png' }} style={styles.categoryIcon} />
          <Text>Show</Text>
        </View>
      </View>

      <Text style={styles.sectionTitle}>Eventos em Destaque</Text>

      <View style={styles.eventCard}>
        <Image source={{ uri: 'https://via.placeholder.com/80' }} style={styles.eventImage} />
        <View>
          <Text><Text style={styles.bold}>Nome:</Text> Empreendedorismo</Text>
          <Text><Text style={styles.bold}>Local:</Text> Clube Devil</Text>
          <Text><Text style={styles.bold}>Data:</Text> 24/11/2024</Text>
          <Text><Text style={styles.bold}>Orçamento:</Text> Indefinido</Text>
        </View>
      </View>

      <View style={styles.eventCard}>
        <Image source={{ uri: 'https://via.placeholder.com/80' }} style={styles.eventImage} />
        <View>
          <Text><Text style={styles.bold}>Nome:</Text> Nenhum</Text>
          <Text><Text style={styles.bold}>Local:</Text> Indefinido</Text>
          <Text><Text style={styles.bold}>Data:</Text> 24/11/2024</Text>
          <Text><Text style={styles.bold}>Orçamento:</Text> Indefinido</Text>
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { padding: 20, backgroundColor: '#f0f0f0' },
  header: { flexDirection: 'row', alignItems: 'center', marginBottom: 20 },
  avatar: { width: 50, height: 50, borderRadius: 25, backgroundColor: '#476482', marginRight: 10 },
  userText: { fontSize: 18, fontWeight: 'bold' },
  searchContainer: { flexDirection: 'row', gap: 10, marginBottom: 20 },
  searchInput: { flex: 1, backgroundColor: '#fff', padding: 10, borderRadius: 10 },
  categories: { flexDirection: 'row', justifyContent: 'space-around', marginBottom: 20 },
  category: { alignItems: 'center' },
  categoryIcon: { width: 50, height: 50 },
  sectionTitle: { fontSize: 20, fontWeight: 'bold', marginBottom: 10 },
  eventCard: { flexDirection: 'row', gap: 10, backgroundColor: '#fff', padding: 10, borderRadius: 10, marginBottom: 15 },
  eventImage: { width: 80, height: 80, borderRadius: 5 },
  bold: { fontWeight: 'bold' },
});

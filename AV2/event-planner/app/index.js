import { View, Text, Image, ScrollView, StyleSheet, TouchableOpacity } from 'react-native';
import { useRouter } from 'expo-router';

export default function Home() {
  const router = useRouter();

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => router.push('/perfil')}>
          <View style={styles.avatar} />
        </TouchableOpacity>
        <Text style={styles.userText}>Olá, Usuário!</Text>
      </View>

      <Text style={styles.sectionTitle}>Eventos em Destaque</Text>

      <TouchableOpacity style={styles.eventCard} onPress={() => router.push('/detalhesEvento')}>
        <Image source={{ uri: 'https://via.placeholder.com/80' }} style={styles.eventImage} />
        <View>
          <Text><Text style={styles.bold}>Nome:</Text> Empreendedorismo</Text>
          <Text><Text style={styles.bold}>Local:</Text> Clube Devil</Text>
          <Text><Text style={styles.bold}>Data:</Text> 24/11/2024</Text>
        </View>
      </TouchableOpacity>

      <TouchableOpacity style={styles.eventCard} onPress={() => router.push('/detalhesEvento')}>
        <Image source={{ uri: 'https://via.placeholder.com/80' }} style={styles.eventImage} />
        <View>
          <Text><Text style={styles.bold}>Nome:</Text> Nenhum</Text>
          <Text><Text style={styles.bold}>Local:</Text> Indefinido</Text>
          <Text><Text style={styles.bold}>Data:</Text> 24/11/2024</Text>
        </View>
      </TouchableOpacity>

      <TouchableOpacity style={styles.button} onPress={() => router.push('/eventos')}>
        <Text style={styles.buttonText}>Ver Todos os Eventos</Text>
      </TouchableOpacity>

      <Text style={styles.sectionTitle}>Navegar para:</Text>

      {[
        { label: 'Perfil', route: '/perfil' },
        { label: 'Eventos', route: '/eventos' },
        { label: 'Convites', route: '/convites' },
        { label: 'Mapa', route: '/mapa' },
        { label: 'Configurações', route: '/configuracoes' },
        { label: 'Favoritos', route: '/favoritos' },
        { label: 'Ajuda', route: '/ajuda' },
      ].map((item, index) => (
        <TouchableOpacity
          key={index}
          style={styles.navButton}
          onPress={() => router.push(item.route)}
        >
          <Text style={styles.navButtonText}>{item.label}</Text>
        </TouchableOpacity>
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { padding: 20, backgroundColor: '#f0f0f0' },
  header: { flexDirection: 'row', alignItems: 'center', marginBottom: 20 },
  avatar: { width: 50, height: 50, borderRadius: 25, backgroundColor: '#476482', marginRight: 10 },
  userText: { fontSize: 18, fontWeight: 'bold' },
  sectionTitle: { fontSize: 20, fontWeight: 'bold', marginVertical: 15 },
  eventCard: {
    flexDirection: 'row',
    gap: 10,
    backgroundColor: '#fff',
    padding: 10,
    borderRadius: 10,
    marginBottom: 15,
    alignItems: 'center',
  },
  eventImage: { width: 80, height: 80, borderRadius: 5 },
  bold: { fontWeight: 'bold' },
  navButton: {
    backgroundColor: '#476482',
    padding: 12,
    borderRadius: 10,
    alignItems: 'center',
    marginBottom: 10,
  },
  navButtonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
});

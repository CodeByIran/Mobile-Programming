import { View, Text, StyleSheet } from 'react-native';
export default function Mapa() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Mapa dos Eventos</Text>
    </View>
  );
}
const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center' },
  text: { fontSize: 20 },
});
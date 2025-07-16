import { Tabs } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';

export default function Layout() {
  return (
    <Tabs>
      <Tabs.Screen name="index" options={{
        title: 'Home',
        tabBarIcon: ({ color, size }) => <Ionicons name="home" size={size} color={color} />, 
      }} />
      <Tabs.Screen name="login" options={{
        title: 'Login',
        tabBarIcon: ({ color, size }) => <Ionicons name="log-in" size={size} color={color} />, 
      }} />
      <Tabs.Screen name="cadastro" options={{
        title: 'Cadastro',
        tabBarIcon: ({ color, size }) => <Ionicons name="person-add" size={size} color={color} />, 
      }} />
      <Tabs.Screen name="perfil" options={{
        title: 'Perfil',
        tabBarIcon: ({ color, size }) => <Ionicons name="person" size={size} color={color} />, 
      }} />
      <Tabs.Screen name="eventos" options={{
        title: 'Eventos',
        tabBarIcon: ({ color, size }) => <Ionicons name="calendar" size={size} color={color} />, 
      }} />
      <Tabs.Screen name="detalhesEvento" options={{
        title: 'Detalhes',
        href: null,
        tabBarIcon: ({ color, size }) => <Ionicons name="information-circle" size={size} color={color} />,
      }} />
      <Tabs.Screen name="convites" options={{
        title: 'Convites',
        tabBarIcon: ({ color, size }) => <Ionicons name="mail" size={size} color={color} />, 
      }} />
      <Tabs.Screen name="mapa" options={{
        title: 'Mapa',
        tabBarIcon: ({ color, size }) => <Ionicons name="map" size={size} color={color} />, 
      }} />
      <Tabs.Screen name="configuracoes" options={{
        title: 'Configurações',
        tabBarIcon: ({ color, size }) => <Ionicons name="settings" size={size} color={color} />, 
      }} />
      <Tabs.Screen name="favoritos" options={{
        title: 'Favoritos',
        tabBarIcon: ({ color, size }) => <Ionicons name="star" size={size} color={color} />, 
      }} />
      <Tabs.Screen name="ajuda" options={{
        title: 'Ajuda',
        tabBarIcon: ({ color, size }) => <Ionicons name="help-circle" size={size} color={color} />, 
      }} />
    </Tabs>
  );
}

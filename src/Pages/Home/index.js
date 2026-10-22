import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button } from 'react-native';
import styles from './style';
import Menu from '../Menu';

export default function Home() {
  return (
    <View style={styles.container}>
      <Menu />

      <View style={styles.conteudo}>
        <Text style={styles.text}>Pagina de Home</Text>
      </View>

      <StatusBar style="auto" />
    </View>
  );
}
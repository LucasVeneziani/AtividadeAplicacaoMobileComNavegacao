import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button } from 'react-native';
import styles from './style';
import { useNavigation } from '@react-navigation/native';
import Menu from '../Menu';

export default function Sobre() {
  const navigation = useNavigation();
  
    return (
      <View style={styles.container}>
        <Text style={styles.text}>Pagina de Sobre e Teste</Text>
        <StatusBar style="auto" />

        <Menu />
      </View>
    );
}


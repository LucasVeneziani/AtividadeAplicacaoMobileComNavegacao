import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button } from 'react-native';
import styles from './style';
import { useNavigation } from '@react-navigation/native';
import Menu from '../Menu';

export default function Contato() {
  const navigation = useNavigation();
  
    return (
      <View style={styles.container} name="Contato">
        <Text style={styles.text}>Pagina de Contato</Text>
        <StatusBar style="auto" />

        <Menu />
      </View>
    );
}


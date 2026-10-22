import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Pressable} from 'react-native';
import styles from './style';
import { useNavigation } from '@react-navigation/native';

export default function Menu() {
  const navigation = useNavigation();

  return (
    <View style={styles.containerMenu}>

      <View style={styles.esquerda}>
        <Text style={styles.titulo}>Alvenaria PlankMassa</Text>

        <Pressable onPress={() => navigation.navigate('Home')}>
          <Text style={styles.link}>Home</Text>
        </Pressable>
        <Pressable onPress={() => navigation.navigate('Sobre')}>
          <Text style={styles.link}>Sobre</Text>
        </Pressable>
        <Pressable onPress={() => navigation.navigate('Contato')}>
          <Text style={styles.link}>Contato</Text>
        </Pressable>
      </View>

      <Pressable onPress={() => navigation.navigate('Login')} style={styles.botaoLogin}>
        <Text style={styles.textoLogin}>Login</Text>
      </Pressable>

      <StatusBar style="auto" />
    </View>
  );
}
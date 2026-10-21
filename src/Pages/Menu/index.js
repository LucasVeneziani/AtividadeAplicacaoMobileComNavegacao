import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Pressable} from 'react-native';
import styles from './style';
import { useNavigation } from '@react-navigation/native';

export default function Menu() {
  const navigation = useNavigation();

  return (
    <View style={styles.containerMenu}>

      <Pressable onPress={() => navigation.navigate('Sobre')} style={styles.botaoSobre}>
        <Text style={styles.menuTextDark}>Sobre</Text>
      </Pressable>
      <Pressable onPress={() => navigation.navigate('Login')} style={styles.botaoLogin}>
        <Text style={styles.menuTextDark}>Login</Text>
      </Pressable>
      <Pressable onPress={() => navigation.navigate('Contato')} style={styles.botaoContato}>
        <Text style={styles.menuTextDark}>Contato</Text>
      </Pressable>
      <StatusBar style="auto" />
    </View>
  );
}


import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, TextInput, Pressable} from 'react-native';
import { useState } from 'react';
import styles from './style';

export default function Login({ navigation }) {

  const [user, setUser] = useState('');
  const [pass, setPass] = useState('');

  function validar() {
    if (user.trim() == '') {
      alert('Informe o usuário.');
      return;
    }

    if (pass.trim() == '') {
      alert('Informe a senha.');
      return;
    }

    if (user == 'admin' && pass == '123') {
      navigation.navigate('Home');
    } else {
      alert('Usuário ou senha inválidos.');
    }
  }

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Pagina de Login</Text>
       
          <View>  
            <TextInput placeholder="Digite o Usuario" value={user} onChangeText={setUser} style={styles.inputContainerTexto} ></TextInput>
            <TextInput placeholder="Digite a Senha" value={pass} onChangeText={setPass} secureTextEntry={true} style={styles.inputContainerTexto}></TextInput>
          </View>
          
        
        <Pressable onPress={validar} style={styles.botaoEntrar}>
          <Text style={styles.textDark}>Entrar</Text>
        </Pressable>

      <StatusBar style="auto" />
    </View>
  );
}
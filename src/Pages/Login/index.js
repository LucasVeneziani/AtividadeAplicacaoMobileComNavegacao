import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, TextInput, Pressable} from 'react-native';
import { useState } from 'react';
import styles from './style';
// import Menu from '../Menu';


export default function Login() {

  const [user, setUser] = useState('');
  const [pass, setPass] = useState('');

  function validar() {
    if(user == 'admin' && pass == '123') {
      navigation.navigate('Login')
    } else {
      alert('Usuario ou senha incorretos');
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

      {/* <Menu /> */}
    </View>
  );
}


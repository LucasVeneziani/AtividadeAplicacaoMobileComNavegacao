import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput, Pressable, Image } from 'react-native';
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

    if (user == 'aluno' && pass == '123456') {
      navigation.navigate('Home');
    } else {
      alert('Usuário ou senha inválidos.');
    }
  }

  function limpar() {
    setUser('');
    setPass('');
  }

  return (
    <View style={styles.container}>

      <View style={styles.caixa}>
        <View style={styles.circuloLogo}>
          <Image source={require('../../../assets/Tijolo.png')} resizeMode="contain" style={styles.logo} />
        </View>

        <Text style={styles.text}>Login</Text>

        <TextInput placeholder="Digite o Usuario" value={user} onChangeText={setUser} style={styles.inputContainerTexto}></TextInput>
        <TextInput placeholder="Digite a Senha" value={pass} onChangeText={setPass} secureTextEntry={true} style={styles.inputContainerTexto}></TextInput>

        <View style={styles.botoes}>
          <Pressable onPress={validar} style={styles.botao}>
            <Text style={styles.textoBotao}>Entrar</Text>
          </Pressable>
          <Pressable onPress={limpar} style={styles.botao}>
            <Text style={styles.textoBotao}>Limpar</Text>
          </Pressable>
        </View>
      </View>

      <StatusBar style="auto" />
    </View>
  );
}
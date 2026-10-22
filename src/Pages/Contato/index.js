import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ScrollView, TextInput, Pressable, Image } from 'react-native';
import { useState } from 'react';
import styles from './style';
import Menu from '../Menu';

export default function Contato() {

  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [mensagem, setMensagem] = useState('');

  function ligar() {
    alert('Ligue para: (11) 99999-9999');
  }

  function enviarEmail() {
    alert('Envie um e-mail para: plankmassa@plank.com');
  }

  function limpar() {
    setNome('');
    setEmail('');
    setMensagem('');
  }

  function enviar() {


  
    if (nome.trim() == '') {
      alert('Precisa Nome ');
      return;
    }
    if (email.trim() == '') {
      alert('Precisa E-mail ');
      return;
    }

    if (mensagem.trim() == '') {
      alert('Precisa Mensagem ');
      return;
    }

    alert('Mensagem enviada com sucesso!');
    setNome('');
    setEmail('');
    setMensagem('');

  }

  return (
    <View style={styles.container}>
      <Menu />

      <ScrollView contentContainerStyle={styles.conteudo}>

        <Text style={styles.titulo}>Contato</Text>

        <View style={styles.caixaInfo}>


          <Text style={styles.empresa}>Alvenaria PlankMassa</Text>


          <Text style={styles.info}>Telefone: (11) 99999-9999</Text>


          <Text style={styles.info}>E-mail: plankmassa@plank.com</Text>


          <Text style={styles.info}>Endereço: Rua TudoMassa, 2727</Text>



          <View style={styles.botoes}>  
            <Pressable onPress={ligar} style={styles.botao}>
              <Text style={styles.textoBotao}> Ligar  </Text>
            </Pressable>
            <Pressable onPress={enviarEmail} style={styles.botao}> 
              <Text style={styles.textoBotao}> Enviar E-mail </Text>
            </Pressable>
          </View>

            <View style={styles.redes}>

              <Pressable>   
                <Image source={require('../../../assets/instagram.jpg')} resizeMode="cover" style={styles.icone} />
              </Pressable>


              <Pressable>
                <Image source={require('../../../assets/facebook.png')} resizeMode="cover" style={styles.icone} />
              </Pressable>


              <Pressable>
                <Image source={require('../../../assets/whatsapp.jpg')} resizeMode="cover" style={styles.icone} />
              </Pressable>


          </View>




        </View>

        <View style={styles.caixaMenor}>



          <Text style={styles.subtitulo}>Horário de Atendimento</Text>

          <Text style={styles.texto}>Segunda a Sexta: 8h às 18h</Text>

          <Text style={styles.texto}>Sábado: 8h às 12h  </Text>

          <Text style={styles.texto}>Domingo: Fechado</Text>

          
        </View>

        <View style={styles.formulario}  > 
          <Text style={styles.subtitulo}>Fale Conosco</Text>

          <TextInput placeholder="Seu nome" value={nome} onChangeText={setNome} style={styles.input}>
          </TextInput>
          <TextInput placeholder="Seu e-mail" value={email} onChangeText={setEmail} style={styles.input}>
          </TextInput>
          <TextInput placeholder="Sua mensagem" value={mensagem} onChangeText={setMensagem}
           multiline={true} style={styles.inputMensagem}>
          
          </TextInput>


          <View style={styles.botoesFormulario}> 

            <Pressable onPress={enviar} style={styles.botaoEnviar}>
            
              <Text style={styles.textoBotaoEnviar}>Enviar</Text>
            </Pressable>


            <Pressable onPress={limpar} style={styles.botaoEnviar}>

              <Text style={styles.textoBotaoEnviar}>Limpar</Text>
            </Pressable> 
          
          </View>


        </View>

      </ScrollView>

      <StatusBar style="auto" />

    </View>
  );
}
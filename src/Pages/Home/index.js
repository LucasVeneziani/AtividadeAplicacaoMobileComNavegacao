import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ScrollView, Image } from 'react-native';
import styles from './style';
import Menu from '../Menu';

export default function Home() {
  return (
    <View style={styles.container}>
      <Menu />
 
      <ScrollView contentContainerStyle={styles.conteudo}>
    
        <Text style={styles.titulo}>Principio</Text>
  

        <Text style={styles.boasVindas}>
          Bem-vindo à Alvenaria PlankMassa! Materiais de construção e acabamento.  
        </Text>

        <View style={styles.destaque}>
          <Text style={styles.destaqueTitulo}>Temos o melhor</Text>
          <Text style={styles.destaqueTexto}>
            Temos fornecedores da região e entregamos no canteiro de obras.
          </Text>
        </View>

        <Text style={styles.subtitulo}>Nossos Produtos</Text>

        <View style={styles.cards}>
          <View style={styles.card}>
            <Image source={require('../../../assets/Tijolo.png')} resizeMode="contain" style={styles.imagemCard} />
            <Text style={styles.cardTitulo}>Tijolos</Text>
            <Text style={styles.cardTexto}>Tijolos cerâmicos resistentes e duráveis.</Text>
          </View>




          <View style={styles.card}>
            <Image source={require('../../../assets/cimento.jpg')} resizeMode="cover" style={styles.imagemCard} />
            <Text style={styles.cardTitulo}>Cimento</Text>
            <Text style={styles.cardTexto}>Cimento para reboco.</Text>
          </View>



          <View style={styles.card}>
            <Image source={require('../../../assets/areia.jpg')} resizeMode="cover" style={styles.imagemCard} />
            <Text style={styles.cardTitulo}>Areia</Text>
            <Text style={styles.cardTexto}>Areia para concreto e argamassa.</Text>
          </View>







        </View>

      </ScrollView>

      <StatusBar style="auto" />
    </View>
  );
}
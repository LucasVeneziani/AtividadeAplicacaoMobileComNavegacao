import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ScrollView, Image } from 'react-native';
import styles from './style';
import Menu from '../Menu';

export default function Sobre() {
  return (
    <View style={styles.container}>
      <Menu />

      <ScrollView contentContainerStyle={styles.conteudo}>

        <Text style={styles.titulo}>Sobre</Text>

        <View style={styles.circuloLogo}>
          <Image source={require('../../../assets/Tijolo.png')} resizeMode="contain" style={styles.logo} />
        </View>

        <Text style={styles.nomeApp}>PlankMassa App</Text>

        <Text style={styles.descricao}>

          Aplicativo da Alvenaria PlankMassa para consultar produtos, conhecer a empresa e entrar em contato de forma rápida e prática.
        </Text>

        <View style={styles.caixaInfo}>

          <Text style={styles.subtituloBranco}>Informações Institucionais</Text>

          <Text style={styles.info}>Empresa: Alvenaria PlankMassa</Text>

          <Text style={styles.info}>CNPJ: 00.000.000/0001-00   </Text>

          <Text style={styles.info}>Fundação: 2010   </Text>

          <Text style={styles.info}>Telefone: (11) 99999-9999   </Text>
          
          <Text style={styles.info}>Endereço: Rua TudoMassa, 2727  </Text>

          


        </View>

        <View style={styles.caixa}>
          <Text style={styles.subtitulo}>Missão</Text>
          <Text style={styles.texto}>
            Fornecemos materiais a você, diretamente de fontes regionais. 
          </Text>
        </View>

        <View style={styles.caixa}>
          <Text style={styles.subtitulo}>Visão</Text>
          <Text style={styles.texto}>
            A confiança nunca nos deixa na mão. Confie em nós, e forneceremos a você o melhor. 
          </Text>
        </View>

        <View style={styles.caixa}>
          <Text style={styles.subtitulo}>Valores</Text>
          <Text style={styles.texto}>Qualidade em produtos</Text>
          <Text style={styles.texto}>Somos honestos</Text>
          <Text style={styles.texto}>Fornecemos qualidade</Text>
          <Text style={styles.texto}>Entregamos no prazo</Text>
        </View>

        <View style={styles.caixa}>



          <Text style={styles.subtitulo}>Informações Adicionais </Text>

          <Text style={styles.texto}>Apenas em São Paul. </Text>

          <Text style={styles.texto}>Aceitamos Pix </Text>

          <Text style={styles.texto}>Gostariamos de Vê-lo </Text>  

        </View>


        <Text style={styles.versao}>  Versão 1.27.1  </Text> 

      </ScrollView>

      <StatusBar style="auto" />
    </View>
  );
}
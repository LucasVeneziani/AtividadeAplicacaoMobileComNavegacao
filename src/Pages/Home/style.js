import { StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  conteudo: {
    alignItems: 'center',
    padding: 30  ,  

  },


  titulo: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#a52900',
    marginBottom: 10,
  },
  boasVindas: {
    fontSize: 18,
    textAlign: 'center',
    color: '#333333',
    maxWidth: 700,
    marginBottom: 25,


  },  
  destaque: {
    width: '100%',
    maxWidth: 900,
    backgroundColor: '#a52900',
    borderRadius: 20,
    padding: 25,
    alignItems: 'center',
    marginBottom: 30,
  },
  destaqueTitulo: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#ffffff',
    marginBottom: 8,
  },
  destaqueTexto: {
    fontSize: 16,
    color: '#ffffff',
    textAlign: 'center' ,


  },
  subtitulo: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#5e1c00',
    marginBottom: 15,


  },
  cards: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    gap: 20,
  },



  card: {
    width: 260,
    backgroundColor: '#ffffff',
    borderRadius: 20,
    borderWidth: 2,
    borderColor: '#a52900',
    padding: 15,
    alignItems: 'center',
  },
  imagemCard: {
    width: '100%',
    height: 150,
    borderRadius: 15,
    marginBottom: 10,
  },



  cardTitulo: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#a52900',
    marginBottom: 5,
  },


  cardTexto:  {
    fontSize: 15,
    textAlign: 'center',
    color: '#333333',
  },
});



export default styles;
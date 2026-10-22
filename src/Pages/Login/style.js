import { StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  caixa: {
    width: 320,
    backgroundColor: '#a52900',
    borderRadius: 25,
    padding: 25,
    alignItems: 'center',
  },
  circuloLogo: {
    width: 100,
    height: 100,
    borderRadius: 50,
    backgroundColor: '#ffffff',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 15,
  },
  logo: {
    width: 70,
    height: 70,
    resizeMode: 'contain',
  },
  text: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#ffffff',
    marginBottom: 15,
  },
  inputContainerTexto: {
    width: '100%',
    textAlign: 'center',
    backgroundColor: '#ffffff',
    marginBottom: 10,
    borderRadius: 15,
    paddingHorizontal: 10,
    paddingVertical: 8,
    fontSize: 18,
  },
  botoes: {
    flexDirection: 'row',
    gap: 15,
    marginTop: 10,
  },
  botao: {
    backgroundColor: '#ffffff',
    paddingHorizontal: 25,
    paddingVertical: 10,
    borderRadius: 15,
  },
  textoBotao: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#a52900',
  },
});

export default styles;
import { StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  conteudo: {
    alignItems: 'center',
    padding: 30,
    gap: 20,
  },
  titulo: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#a52900',
  },
  circuloLogo: {
    width: 120,
    height: 120,
    borderRadius: 60,
    backgroundColor: '#ffffff',
    borderWidth: 3,
    borderColor: '#a52900',
    alignItems: 'center',
    justifyContent: 'center',
  },
  logo: {
    width: 80,
    height: 80,
  },
  nomeApp: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#5e1c00',
  },
  descricao: {
    fontSize: 17,
    textAlign: 'center',
    color: '#333333',
    maxWidth: 600,
  },
  caixaInfo: {
    width: '100%',
    maxWidth: 600,
    backgroundColor: '#a52900',
    borderRadius: 20,
    padding: 25,
    alignItems: 'center',
  },
  subtituloBranco: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#ffffff',
    marginBottom: 10,
  },
  info: {
    fontSize: 16,
    color: '#ffffff',
    marginBottom: 4,
  },
  caixa: {
    width: '100%',
    maxWidth: 600,
    borderWidth: 2,
    borderColor: '#a52900',
    borderRadius: 20,
    padding: 20,
    alignItems: 'center',
  },
  subtitulo: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#5e1c00',
    marginBottom: 8,
  },
  texto: {
    fontSize: 16,
    textAlign: 'center',
    color: '#333333',
    marginBottom: 4,
  },
  versao: {
    fontSize: 14,
    color: '#999999',
  },
});

export default styles;
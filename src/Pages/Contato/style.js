import { StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  conteudo: {
    alignItems: 'center',
    padding: 30,
    gap: 25,
  },
  titulo: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#a52900',
  },
  caixaInfo: {
    width: '100%',
    maxWidth: 600,
    backgroundColor: '#a52900',
    borderRadius: 20,
    padding: 25,
    alignItems: 'center',
  },
  empresa: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#ffffff',
    marginBottom: 10,
  },
  info: {
    fontSize: 17,
    color: '#ffffff',
    marginBottom: 5,
  },
  botoes: {
    flexDirection: 'row',
    gap: 15,
    marginTop: 15,
  },
  botao: {
    backgroundColor: '#ffffff',
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 15,
  },
  textoBotao: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#a52900',
  },
    botoesFormulario: {
    flexDirection: 'row',
    gap: 15,
  },
  redes: {
    flexDirection: 'row',
    gap: 20,
    marginTop: 20,
  },
  icone: {
    width: 45,
    height: 45,
    borderRadius: 12,
  },
  caixaMenor: {
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
    marginBottom: 10,
  },
  texto: {
    fontSize: 16,
    color: '#333333',
    marginBottom: 4,
  },
  formulario: {
    width: '100%',
    maxWidth: 600,
    borderWidth: 2,
    borderColor: '#a52900',
    borderRadius: 20,
    padding: 25,
    alignItems: 'center',
  },
  input: {
    width: '100%',
    borderWidth: 1,
    borderColor: '#a52900',
    borderRadius: 15,
    paddingHorizontal: 15,
    paddingVertical: 8,
    fontSize: 16,
    marginBottom: 10,
  },
  inputMensagem: {
    width: '100%',
    height: 120,
    borderWidth: 1,
    borderColor: '#a52900',
    borderRadius: 15,
    paddingHorizontal: 15,
    paddingVertical: 8,
    fontSize: 16,
    marginBottom: 10,
    textAlignVertical: 'top',
  },
  botaoEnviar: {
    backgroundColor: '#a52900',
    paddingHorizontal: 30,
    paddingVertical: 10,
    borderRadius: 15,
  },
  textoBotaoEnviar: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#ffffff',
  },
});

export default styles;
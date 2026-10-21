import { StyleSheet} from 'react-native';


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  inputContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
    width: '60%',
  },
  text: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  textDark: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#ffffff',
  },
  inputContainerTexto: {
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
    WIDTH: '100%',
    marginBottom: 10,
    borderWidth: 1,
    borderColor: '#000000',
    borderRadius: 15,
    paddingHorizontal: 10,
    paddingVertical: 5,
    fontSize: 20,
  },
  botaoEntrar: {
    backgroundColor: '#000000',
    borderWidth: 3,
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 15,
    bottom: 99,
  },
});

export default styles;
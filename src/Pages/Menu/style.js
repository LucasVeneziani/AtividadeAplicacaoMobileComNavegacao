import { StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  containerMenu: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#a52900',
    paddingHorizontal: 20,
    paddingVertical: 15,
  },
  esquerda: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 20,
  },
  titulo: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#ffffff',
  },
  link: {
    fontSize: 16,
    color: '#ffffff',
  },
  botaoLogin: {
    backgroundColor: '#ffffff',
    paddingHorizontal: 15,
    paddingVertical: 6,
    borderRadius: 10,
  },
  textoLogin: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#a52900',
  },
});

export default styles;
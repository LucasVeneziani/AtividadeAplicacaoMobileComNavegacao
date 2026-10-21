import { StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  containerMenu: {
    flex: 1,
    alignItems: 'end',
    justifyContent: 'center',
    flexDirection: 'row',
    gap: 1,
    bottom: 40,
  },
  menuTextDark: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#ffffff',
  },

  botaoSobre: {
    backgroundColor: '#000000',
    borderWidth: 3,
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 5,
   
  },
  botaoLogin: {
    backgroundColor: '#000000',
    borderWidth: 3,
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 5,
   
  },
  botaoContato: {
    backgroundColor: '#000000',
    borderWidth: 3,
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 5,
  },
});

export default styles;
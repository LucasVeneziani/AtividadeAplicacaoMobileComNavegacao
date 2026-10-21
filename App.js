import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';

import Home from './src/Pages/Home';
import Sobre from './src/Pages/Sobre';
import Login from './src/Pages/Login';
import Contato from './src/Pages/Contato';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={Home} 
        options={{ title: 'Página Inicial',
          headerStyle: { backgroundColor: '#121212' },
          headerTintColor: '#FFa500',
          //headerShown: false, 
          }}
        />
        <Stack.Screen name="Sobre" component={Sobre}
         options={{ title: 'Sobre',
          headerStyle: { backgroundColor: '#121212' },
          headerTintColor: '#FFa500',
          //headerShown: false, 
          }}
        />
        <Stack.Screen name="Login" component={Login}
         options={{ title: 'Login',
          headerStyle: { backgroundColor: '#121212' },
          headerTintColor: '#FFa500',
          //headerShown: false, 
          }}
        />
        <Stack.Screen name="Contato" component={Contato}
         options={{ title: 'Contato',
          headerStyle: { backgroundColor: '#121212' },
          headerTintColor: '#FFa500',
          //headerShown: false, 
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

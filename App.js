import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';

import Home from './src/Pages/Home';
import Sobre from './src/Pages/Sobre';
import Login from './src/Pages/Login';
import Contato from './src/Pages/Contato';

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator tabBarPosition="top">
        <Tab.Screen name="Home" component={Home}
          options={{ title: 'Alvenaria PlankMassa>Home',
            headerStyle: { backgroundColor: '#a52900' },
            headerTintColor: '#ffffff',
            tabBarLabel: 'Home',
            tabBarActiveTintColor: '#5e1c00',
          }}
        />
        <Tab.Screen name="Sobre" component={Sobre}
          options={{ title: 'Alvenaria PlankMassa>Sobre',
            headerStyle: { backgroundColor: '#a52900' },
            headerTintColor: '#ffffff',
            tabBarLabel: 'Sobre',
            tabBarActiveTintColor: '#5e1c00',
          }}
        />
        <Tab.Screen name="Contato" component={Contato}
          options={{ title: 'Alvenaria PlankMassa>Contato',
            headerStyle: { backgroundColor: '#a52900' },
            headerTintColor: '#ffffff',
            tabBarLabel: 'Contato',
            tabBarActiveTintColor: '#5e1c00',
          }}
        />
        <Tab.Screen name="Login" component={Login}
          options={{ title: 'Alvenaria PlankMassa>Login',
            headerStyle: { backgroundColor: '#a52900' },
            headerTintColor: '#ffffff',
            tabBarLabel: 'Login',
            tabBarActiveTintColor: '#5e1c00',
          }}
        />
      </Tab.Navigator>
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
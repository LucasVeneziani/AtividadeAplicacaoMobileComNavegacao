import { StyleSheet } from 'react-native';
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
      <Tab.Navigator initialRouteName="Login">
        <Tab.Screen name="Home" component={Home}
          options={{ title: 'Alvenaria PlankMassa>Home',
            headerShown: false,
            tabBarStyle: { display: 'none' },
          }}
        />
        <Tab.Screen name="Sobre" component={Sobre}
          options={{ title: 'Alvenaria PlankMassa>Sobre',
            headerShown: false,
            tabBarStyle: { display: 'none' },
          }}
        />
        <Tab.Screen name="Contato" component={Contato}
          options={{ title: 'Alvenaria PlankMassa>Contato',
            headerShown: false,
            tabBarStyle: { display: 'none' },
          }}
        />
        <Tab.Screen name="Login" component={Login}
          options={{ title: 'Alvenaria PlankMassa>Login',
            headerShown: false,
            tabBarStyle: { display: 'none' },
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
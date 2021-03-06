import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import LoginScreen from './source/LoginScreen';
import HomeScreen from './source/HomeScreen';
import ScanQr from './source/ScanQr';
import Documents from './source/Documents';
import Company from './source/Company';

import AsyncStorage from '@react-native-async-storage/async-storage';

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>

        <Stack.Screen name="Prijava" component={LoginScreen} />
        <Stack.Screen name="Preduzeće" component={Company} />
        <Stack.Screen name="Početna" component={HomeScreen} />
        <Stack.Screen name="ScanQr" component={ScanQr} />
        <Stack.Screen name="Dokumenta" component={Documents} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
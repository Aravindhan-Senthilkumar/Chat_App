import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { NavigationContainer } from '@react-navigation/native';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import RegisterScreen from './src/screens/RegisterScreen'
import LoginScreen from './src/screens/LoginScreen'
import HomeScreen from './src/screens/HomeScreen';
import ChatScreen from './src/screens/ChatScreen';
import ContactScreen from './src/screens/ContactScreen';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
    <NavigationContainer>
      <Stack.Navigator initialRouteName='LoginScreen' screenOptions={{ headerShown: false }}>
        <Stack.Screen name='Register' component={RegisterScreen}/>
        <Stack.Screen name='LoginScreen' component={LoginScreen}/>
        <Stack.Screen name='HomeScreen' component={HomeScreen}/>
        <Stack.Screen name='ChatScreen' component={ChatScreen}/>
        <Stack.Screen name='ContactScreen' component={ContactScreen}/>
      </Stack.Navigator>
    </NavigationContainer>
    </GestureHandlerRootView>
  )
}

export default App

const styles = StyleSheet.create({})
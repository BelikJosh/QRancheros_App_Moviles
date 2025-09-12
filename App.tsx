// App.tsx
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StatusBar } from 'expo-status-bar';
import { ThemeProvider } from './src/contexts/themeContext';
import { LanguageProvider } from './src/contexts/LanguageContext';
import LoginScreen from './screens/LoginScreen';
import AppTabs from './navigation/AppTabs';
import { RootStackParamList } from './types/navigation';
import Bank_CardScreen from './screens/Bank_CardScreen';

const Stack = createNativeStackNavigator<RootStackParamList>();

export default function App() {
  return (
    <ThemeProvider>
      <LanguageProvider>
        <NavigationContainer>
          <StatusBar style="auto" />
          <Stack.Navigator 
            initialRouteName="Login"
            screenOptions={{ headerShown: false }}
          >
            <Stack.Screen name="Login" component={LoginScreen} />
            <Stack.Screen name="MainTabs" component={AppTabs} />
            <Stack.Screen name="Bank_Card" component={Bank_CardScreen}/>
          </Stack.Navigator>
        </NavigationContainer>
      </LanguageProvider>
    </ThemeProvider>
  );
}
import React, { createContext, useContext, useEffect, useState } from 'react';
import { useColorScheme } from 'react-native';
import * as SystemUI from 'expo-system-ui';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Theme, AppSettings } from '../types/settings';
import { themes } from '../utils/themes';

interface ThemeContextType {
  theme: Theme;
  toggleTheme: () => void;
  themeColors: typeof themes.light;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const ThemeProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const systemTheme = useColorScheme();
  const [theme, setTheme] = useState<Theme>('light');

  useEffect(() => {
    loadTheme();
  }, []);

  const loadTheme = async () => {
    try {
      const savedSettings = await AsyncStorage.getItem('appSettings');
      if (savedSettings) {
        const settings: AppSettings = JSON.parse(savedSettings);
        setTheme(settings.theme);
        applyTheme(settings.theme);
      } else {
        setTheme(systemTheme || 'light');
        applyTheme(systemTheme || 'light');
      }
    } catch (error) {
      console.error('Error loading theme:', error);
    }
  };

  // contexts/ThemeContext.tsx (agregar esto)
// ... código existente ...

const applyTheme = (selectedTheme: Theme) => {
  const colors = themes[selectedTheme];
  SystemUI.setBackgroundColorAsync(colors.background);
  // Forzar update de toda la app
  setTheme(selectedTheme);
};

// ... resto del código ...

  const toggleTheme = async () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
    applyTheme(newTheme);

    try {
      const savedSettings = await AsyncStorage.getItem('appSettings');
      const settings: AppSettings = savedSettings 
        ? JSON.parse(savedSettings) 
        : { theme: 'light', language: 'es' };
      
      settings.theme = newTheme;
      await AsyncStorage.setItem('appSettings', JSON.stringify(settings));
    } catch (error) {
      console.error('Error saving theme:', error);
    }
  };

  const themeColors = themes[theme];

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme, themeColors }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};
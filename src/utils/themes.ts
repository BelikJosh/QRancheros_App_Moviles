import { Theme } from '../types/settings';

export const themes = {
  light: {
    background: '#FFFFFF',
    text: '#000000',
    card: '#F5F5F5',
    border: '#E0E0E0',
    primary: '#E67F33',
    secondary: '#6E4F32',
  },
  dark: {
    background: '#121212',
    text: '#FFFFFF',
    card: '#1E1E1E',
    border: '#333333',
    primary: '#FF9A4D',
    secondary: '#8B6B46',
  },
};

export type ThemeType = typeof themes.light;
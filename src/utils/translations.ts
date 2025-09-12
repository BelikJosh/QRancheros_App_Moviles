import { Language } from '../types/settings';

export const translations = {
  es: {
    settings: 'Configuración',
    darkMode: 'Modo Oscuro',
    language: 'Idioma',
    notifications: 'Notificaciones',
    back: 'Volver',
    english: 'Inglés',
    spanish: 'Español',
    languageDescription: 'Selecciona tu idioma preferido',
    enabled: 'Activado',
    disabled: 'Desactivado',
  },
  en: {
    settings: 'Settings',
    darkMode: 'Dark Mode',
    language: 'Language',
    notifications: 'Notifications',
    back: 'Back',
    english: 'English',
    spanish: 'Spanish',
    languageDescription: 'Select your preferred language',
    enabled: 'Activado',
    disabled: 'Desactivado',
  },
};

export type TranslationKey = keyof typeof translations.es;
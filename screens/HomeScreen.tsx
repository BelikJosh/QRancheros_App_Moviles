// screens/HomeScreen.tsx
import { View, Text, StyleSheet } from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '../types/navigation';
import { useTheme } from '../src/contexts/themeContext';
import { useLanguage } from '../src/contexts/LanguageContext';

type Props = NativeStackScreenProps<RootStackParamList, 'Home'>;

export default function HomeScreen({ navigation }: Props) {
  const { themeColors } = useTheme();
  const { t, language } = useLanguage(); // ← Agrega language para debug

  const styles = createStyles(themeColors);

  return (
    <View style={styles.container}>
      {/* Usa la función t() para todos los textos */}
      <Text style={styles.title}>{t('welcomeHome')}</Text>
      <Text style={styles.subtitle}>{t('homeDescription')}</Text>
      
      {/* Textos de debug */}
      <Text style={styles.debugText}>
        {t('currentLanguage')}: {language}
      </Text>
      <Text style={styles.debugText}>
        {t('currentTheme')}: {themeColors.mode === 'dark' ? t('dark') : t('light')}
      </Text>

      {/* Ejemplos de traducciones */}
      <View style={styles.examplesContainer}>
        <Text style={styles.exampleText}>{t('settings')}</Text>
        <Text style={styles.exampleText}>{t('darkMode')}</Text>
        <Text style={styles.exampleText}>{t('language')}</Text>
      </View>
    </View>
  );
}

const createStyles = (colors: any) => StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
    backgroundColor: colors.background,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 10,
    color: colors.text,
  },
  subtitle: {
    fontSize: 16,
    color: colors.text + '80',
    marginBottom: 30,
    textAlign: 'center',
  },
  debugText: {
    fontSize: 14,
    color: colors.primary,
    marginTop: 10,
  },
  examplesContainer: {
    marginTop: 30,
    alignItems: 'center',
  },
  exampleText: {
    fontSize: 16,
    color: colors.secondary,
    marginVertical: 5,
  },
});
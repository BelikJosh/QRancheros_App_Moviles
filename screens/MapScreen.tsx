// screens/MapScreen.tsx
import { View, Text, StyleSheet } from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '../types/navigation';
import { useTheme } from '../src/contexts/themeContext';
import { useLanguage } from '../src/contexts/LanguageContext';

type Props = NativeStackScreenProps<RootStackParamList, 'Map'>;

export default function MapScreen({ navigation }: Props) {
  const { themeColors } = useTheme();
  const { t } = useLanguage();

  const styles = createStyles(themeColors);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{t('mapTitle')}</Text>
      <Text style={styles.subtitle}>{t('mapDescription')}</Text>
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
});
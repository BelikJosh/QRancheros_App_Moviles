// screens/PayScreen.tsx
import { View, Text, StyleSheet } from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '../types/navigation';
import { useTheme } from '../src/contexts/themeContext';
import { useLanguage } from '../src/contexts/LanguageContext';

type Props = NativeStackScreenProps<RootStackParamList, 'Pay'>;

export default function PayScreen({ navigation }: Props) {
  const { themeColors } = useTheme();
  const { t } = useLanguage();

  const styles = createStyles(themeColors);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{t('payMessage')}</Text>
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
    fontSize: 24,
    fontWeight: 'bold',
    color: colors.text,
    textAlign: 'center',
  },
});
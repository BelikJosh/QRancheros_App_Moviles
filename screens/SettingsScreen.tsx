// screens/SettingsScreen.tsx
import { View, Text, StyleSheet, Switch, TouchableOpacity, ScrollView } from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '../types/navigation';
import { useTheme } from '../src/contexts/themeContext';
import { useLanguage } from '../src/contexts/LanguageContext';
import { Ionicons } from '@expo/vector-icons';
import React, {useState} from 'react';

type Props = NativeStackScreenProps<RootStackParamList, 'Settings'>;

export default function SettingsScreen({ navigation }: Props) {
  const { theme, toggleTheme, themeColors } = useTheme();
  const { language, changeLanguage, t } = useLanguage();
  const [notificationsEnabled, setNotificationsEnabled] = useState(false);

  const styles = createStyles(themeColors);

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>{t('settings')}</Text>
      
      {/* Modo Oscuro */}
      <View style={styles.settingItem}>
        <View style={styles.settingInfo}>
          <Ionicons name="moon" size={24} color={themeColors.primary} />
          <View style={styles.settingTextContainer}>
            <Text style={styles.settingTitle}>{t('darkMode')}</Text>
            <Text style={styles.settingDescription}>
              {theme === 'dark' ? t('enabled') : t('disabled')}
            </Text>
          </View>
        </View>
        <Switch
          value={theme === 'dark'}
          onValueChange={toggleTheme}
          thumbColor={theme === 'dark' ? themeColors.primary : '#f4f3f4'}
          trackColor={{ false: '#767577', true: themeColors.primary + '80' }}
        />
      </View>

      {/* Selector de Idioma */}
      <View style={styles.settingItem}>
        <View style={styles.settingInfo}>
          <Ionicons name="language" size={24} color={themeColors.primary} />
          <View style={styles.settingTextContainer}>
            <Text style={styles.settingTitle}>{t('language')}</Text>
            <Text style={styles.settingDescription}>{t('languageDescription')}</Text>
          </View>
        </View>
        
        <View style={styles.languageButtons}>
          <TouchableOpacity
            style={[
              styles.languageButton,
              language === 'es' && styles.languageButtonActive
            ]}
            onPress={() => changeLanguage('es')}
          >
            <Text style={[
              styles.languageButtonText,
              language === 'es' && styles.languageButtonTextActive
            ]}>
              {t('spanish')}
            </Text>
          </TouchableOpacity>
          
          <TouchableOpacity
            style={[
              styles.languageButton,
              language === 'en' && styles.languageButtonActive
            ]}
            onPress={() => changeLanguage('en')}
          >
            <Text style={[
              styles.languageButtonText,
              language === 'en' && styles.languageButtonTextActive
            ]}>
              {t('english')}
            </Text>
          </TouchableOpacity>
        </View>
      </View>

      {/* Notificaciones */}
      <View style={styles.settingItem}>
        <View style={styles.settingInfo}>
          <Ionicons name="notifications" size={24} color={themeColors.primary} />
          <View style={styles.settingTextContainer}>
            <Text style={styles.settingTitle}>{t('notifications')}</Text>
            <Text style={styles.settingDescription}>
              {notificationsEnabled ? t('enabled') : t('disabled')}
            </Text>
          </View>
        </View>
        <Switch
          value={notificationsEnabled}
          onValueChange={setNotificationsEnabled}
          thumbColor={notificationsEnabled ? themeColors.primary : '#f4f3f4'}
          trackColor={{ false: '#767577', true: themeColors.primary + '80' }}
        />
      </View>

      <TouchableOpacity
        style={styles.backButton}
        onPress={() => navigation.goBack()}
      >
        <Ionicons name="arrow-back" size={20} color={themeColors.primary} />
        <Text style={styles.backButtonText}>{t('back')}</Text>
      </TouchableOpacity>
    </ScrollView>
  );
}

const createStyles = (colors: any) => StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: colors.background,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 30,
    textAlign: 'center',
    color: colors.text,
  },
  settingItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 15,
    backgroundColor: colors.card,
    borderRadius: 10,
    marginBottom: 15,
    borderWidth: 1,
    borderColor: colors.border,
  },
  settingInfo: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
  },
  settingTextContainer: {
    marginLeft: 12,
    flex: 1,
  },
  settingTitle: {
    fontSize: 16,
    fontWeight: '600',
    color: colors.text,
    marginBottom: 2,
  },
  settingDescription: {
    fontSize: 12,
    color: colors.text + '80',
  },
  languageButtons: {
    flexDirection: 'row',
    gap: 10,
  },
  languageButton: {
    paddingHorizontal: 15,
    paddingVertical: 8,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: colors.border,
    backgroundColor: colors.background,
  },
  languageButtonActive: {
    backgroundColor: colors.primary,
    borderColor: colors.primary,
  },
  languageButtonText: {
    color: colors.text,
    fontSize: 12,
    fontWeight: '500',
  },
  languageButtonTextActive: {
    color: '#FFFFFF',
  },
  backButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 15,
    backgroundColor: colors.card,
    borderRadius: 10,
    marginTop: 20,
    borderWidth: 1,
    borderColor: colors.border,
  },
  backButtonText: {
    marginLeft: 8,
    color: colors.primary,
    fontWeight: '600',
  },
});
// screens/LoginScreen.tsx
import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, TextInput, Image, Alert } from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '../types/navigation';
import { useTheme } from '../src/contexts/themeContext';
import { useLanguage } from '../src/contexts/LanguageContext';
import { Ionicons } from '@expo/vector-icons';

type Props = NativeStackScreenProps<RootStackParamList, 'Login'>;

const LoginScreen = ({ navigation }: Props) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { themeColors } = useTheme();
  const { t } = useLanguage();

  const styles = createStyles(themeColors);

  const handleLogin = () => {
    if (!email || !password) {
      Alert.alert(t('error'), t('completeFields'));
      return;
    }
    navigation.replace('MainTabs');
  };

  const handleGuestLogin = () => {
    navigation.replace('MainTabs');
  };

  const handleCreateAccount = () => {
    // Navegar a pantalla de registro
    Alert.alert(t('comingSoon'), t('featureComingSoon'));
  };

  // Funciones de escala responsiva
  const horizontalScale = (size: number) => size;
  const verticalScale = (size: number) => size;
  const moderateScale = (size: number, factor = 0.5) => size + (size - size) * factor;

  return (
    <View style={[styles.container, { padding: horizontalScale(20) }]}>
      {/* Imagen circular responsiva */}
      <Image
        source={require('../assets/images/QRancheros_logo.jpg')}
        style={{
          width: horizontalScale(160),
          height: horizontalScale(160),
          borderRadius: horizontalScale(80),
          marginBottom: verticalScale(15),
          marginTop: verticalScale(30),
          resizeMode: 'cover',
          borderWidth: 3,
          borderColor: themeColors.primary,
        }}
      />

      {/* Encabezado con logo/título */}
      <View style={[styles.header, { marginBottom: verticalScale(10) }]}>
        <Text style={[styles.welcomeText, { 
          fontSize: moderateScale(24, 0.3),
          marginBottom: verticalScale(0)
        }]}>
          {t('welcome')}
        </Text>
        <Text style={[styles.appName, { 
          fontSize: moderateScale(32, 0.3),
          marginTop: verticalScale(-10)
        }]}>
          QRancheros
        </Text>
      </View>

      {/* Campos de formulario */}
      <View style={[styles.formContainer, { marginBottom: verticalScale(20) }]}>
        <Text style={[styles.label, { 
          fontSize: moderateScale(16, 0.3),
          marginBottom: verticalScale(8),
        }]}>
          {t('email')}
        </Text>
        <TextInput
          style={[styles.input, {
            padding: horizontalScale(15),
            borderRadius: horizontalScale(10),
            marginBottom: verticalScale(20),
            fontSize: moderateScale(16, 0.3),
          }]}
          placeholder={t('enterEmail')}
          keyboardType="email-address"
          autoCapitalize="none"
          placeholderTextColor={themeColors.text + '80'}
          value={email}
          onChangeText={setEmail}
        />
        
        <Text style={[styles.label, { 
          fontSize: moderateScale(16, 0.3),
          marginBottom: verticalScale(8),
        }]}>
          {t('password')}
        </Text>
        <TextInput
          style={[styles.input, {
            padding: horizontalScale(15),
            borderRadius: horizontalScale(10),
            marginBottom: verticalScale(10),
            fontSize: moderateScale(16, 0.3),
          }]}
          placeholder={t('enterPassword')}
          secureTextEntry
          placeholderTextColor={themeColors.text + '80'}
          value={password}
          onChangeText={setPassword}
        />

        {/* Botón de crear cuenta */}
        <TouchableOpacity onPress={handleCreateAccount}>
          <Text style={[styles.createAccountText, { 
            fontSize: moderateScale(14, 0.3),
            marginTop: verticalScale(10)
          }]}>
            {t('createAccount')}
          </Text>
        </TouchableOpacity>

        {/* Opción de invitado */}
        <TouchableOpacity onPress={handleGuestLogin}>
          <Text style={[styles.guestText, { 
            fontSize: moderateScale(14, 0.3),
            marginTop: verticalScale(10)
          }]}>
            {t('guestLogin')}
          </Text>
        </TouchableOpacity>
      </View>

      {/* Botón de Entrar */}
      <TouchableOpacity 
        style={[styles.mainButton, {
          padding: verticalScale(15),
          borderRadius: horizontalScale(10),
          marginBottom: verticalScale(5),
        }]} 
        onPress={handleLogin}
      >
        <Text style={[styles.mainButtonText, { 
          fontSize: moderateScale(18, 0.3) 
        }]}>
          {t('login')}
        </Text>
      </TouchableOpacity>

      {/* Separador */}
      <View style={[styles.separator, { 
        marginVertical: verticalScale(20) 
      }]}>
        <View style={[styles.separatorLine, { 
          height: verticalScale(1) 
        }]} />
        <Text style={[styles.separatorText, { 
          fontSize: moderateScale(14, 0.3),
          marginHorizontal: horizontalScale(10)
        }]}>
          {t('or')}
        </Text>
        <View style={[styles.separatorLine, { 
          height: verticalScale(1) 
        }]} />
      </View>

      {/* Botón de Google */}
      <TouchableOpacity 
        style={[styles.googleButton, {
          padding: verticalScale(12),
          borderRadius: horizontalScale(10),
          marginBottom: verticalScale(20),
        }]} 
      >
        <Image
          source={require('../assets/images/Logo_Google.png')}
          style={{
            width: moderateScale(20),
            height: moderateScale(20),
            resizeMode: 'contain',
          }}
        />
        <Text style={[styles.googleButtonText, { 
          fontSize: moderateScale(16, 0.3),
          marginLeft: horizontalScale(10)
        }]}>
          {t('signInGoogle')}
        </Text>
      </TouchableOpacity>

      {/* Enlaces legales */}
      <View style={styles.legalLinks}>
        <TouchableOpacity>
          <Text style={[styles.legalText, { 
            fontSize: moderateScale(12, 0.3) 
          }]}>
            {t('terms')}
          </Text>
        </TouchableOpacity>
        <Text style={[styles.legalSeparator, { 
          fontSize: moderateScale(12, 0.3),
          marginHorizontal: horizontalScale(5)
        }]}>
          |
        </Text>
        <TouchableOpacity>
          <Text style={[styles.legalText, { 
            fontSize: moderateScale(12, 0.3) 
          }]}>
            {t('privacy')}
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const createStyles = (colors: any) => StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.background,
  },
  header: {
    alignItems: 'center',
  },
  welcomeText: {
    color: colors.text,
    fontWeight: '300',
  },
  appName: {
    color: colors.text,
    fontWeight: 'bold',
  },
  formContainer: {
    width: '100%',
  },
  label: {
    color: colors.text,
    fontWeight: '600',
  },
  input: {
    width: '100%',
    backgroundColor: colors.card,
    color: colors.text,
    borderWidth: 1,
    borderColor: colors.primary,
  },
  createAccountText: {
    color: colors.primary,
    textAlign: 'center',
    fontWeight: '600',
  },
  guestText: {
    color: colors.secondary,
    textAlign: 'center',
    fontWeight: '500',
  },
  mainButton: {
    width: '100%',
    backgroundColor: colors.primary,
    alignItems: 'center',
    justifyContent: 'center',
  },
  mainButtonText: {
    color: '#FFFFFF',
    fontWeight: 'bold',
  },
  separator: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
  },
  separatorLine: {
    flex: 1,
    backgroundColor: colors.border,
  },
  separatorText: {
    color: colors.text,
  },
  googleButton: {
    width: '100%',
    backgroundColor: colors.card,
    borderWidth: 1,
    borderColor: colors.border,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  googleButtonText: {
    color: colors.text,
    fontWeight: '500',
  },
  legalLinks: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  legalText: {
    color: colors.text + '80',
  },
  legalSeparator: {
    color: colors.text + '80',
  },
});

export default LoginScreen;
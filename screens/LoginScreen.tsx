// screens/LoginScreen.tsx
import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, TextInput, Image, Alert } from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '../types/navigation';
import { Ionicons } from '@expo/vector-icons';

type Props = NativeStackScreenProps<RootStackParamList, 'Login'>;

const LoginScreen = ({ navigation }: Props) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    // Validación básica
    if (!email || !password) {
      Alert.alert('Error', 'Por favor completa todos los campos');
      return;
    }

    // Aquí iría tu lógica de autenticación real
    // Por ahora navegamos directamente al Scanner
    navigation.replace('MainTabs');
  };

  const handleGuestLogin = () => {
    // Navegar como invitado
    navigation.replace('MainTabs');
  };

  // Funciones de escala responsiva (simplificadas)
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
          borderColor: '#E67F33',
        }}
      />

      {/* Encabezado con logo/título */}
      <View style={[styles.header, { marginBottom: verticalScale(10) }]}>
        <Text style={[styles.welcomeText, { 
          fontSize: moderateScale(24, 0.3),
          marginBottom: verticalScale(0)
        }]}>
          Bienvenido a
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
          Email
        </Text>
        <TextInput
          style={[styles.input, {
            padding: horizontalScale(15),
            borderRadius: horizontalScale(10),
            marginBottom: verticalScale(20),
            fontSize: moderateScale(16, 0.3),
          }]}
          placeholder="Ingresa tu email"
          keyboardType="email-address"
          autoCapitalize="none"
          placeholderTextColor="#999"
          value={email}
          onChangeText={setEmail}
        />
        
        <Text style={[styles.label, { 
          fontSize: moderateScale(16, 0.3),
          marginBottom: verticalScale(8),
        }]}>
          Contraseña
        </Text>
        <TextInput
          style={[styles.input, {
            padding: horizontalScale(15),
            borderRadius: horizontalScale(10),
            marginBottom: verticalScale(10),
            fontSize: moderateScale(16, 0.3),
          }]}
          placeholder="Ingresa tu contraseña"
          secureTextEntry
          placeholderTextColor="#999"
          value={password}
          onChangeText={setPassword}
        />
<TouchableOpacity onPress={handleGuestLogin}>
          <Text style={[styles.guestText, { 
            fontSize: moderateScale(14, 0.3),
            marginTop: verticalScale(10)
          }]}>
            Crear Cuenta
          </Text>
        </TouchableOpacity>

        {/* Opción de invitado */}
        <TouchableOpacity onPress={handleGuestLogin}>
          <Text style={[styles.guestText, { 
            fontSize: moderateScale(14, 0.3),
            marginTop: verticalScale(10)
          }]}>
            Iniciar como Invitado
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
          Entrar
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
          o
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
          Sign in with Google
        </Text>
      </TouchableOpacity>

      {/* Enlaces legales */}
      <View style={styles.legalLinks}>
        <TouchableOpacity>
          <Text style={[styles.legalText, { 
            fontSize: moderateScale(12, 0.3) 
          }]}>
            Términos y condiciones
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
            Avisos de privacidad
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ffffffff',
  },
  header: {
    alignItems: 'center',
  },
  welcomeText: {
    color: '#6E4F32',
    fontWeight: '300',
  },
  appName: {
    color: '#6E4F32',
    fontWeight: 'bold',
  },
  formContainer: {
    width: '100%',
  },
  label: {
    color: '#6E4F32',
    fontWeight: '600',
  },
  input: {
    width: '100%',
    backgroundColor: '#FFFFFF',
    color: '#6E4F32',
    borderWidth: 1,
    borderColor: '#E67F33',
  },
  guestText: {
    color: '#E67F33',
    textAlign: 'center',
    fontWeight: '500',
  },
  mainButton: {
    width: '100%',
    backgroundColor: '#E67F33',
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
    backgroundColor: '#D4A574',
  },
  separatorText: {
    color: '#6E4F32',
  },
  googleButton: {
    width: '100%',
    backgroundColor: '#FFFFFF',
    borderWidth: 1,
    borderColor: '#D4A574',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  googleButtonText: {
    color: '#6E4F32',
    fontWeight: '500',
  },
  legalLinks: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  legalText: {
    color: '#6E4F32',
  },
  legalSeparator: {
    color: '#6E4F32',
  },
});

export default LoginScreen;
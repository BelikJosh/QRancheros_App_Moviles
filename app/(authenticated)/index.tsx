import React from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import { useRouter } from 'expo-router';
import { useResponsive } from '@/hooks/useResponsive';
import { Ionicons } from '@expo/vector-icons';

const HomeScreen = () => {
  const router = useRouter();
  const { moderateScale, verticalScale, horizontalScale } = useResponsive();

  const handleLogout = () => {
    // Navegar de vuelta al login
    router.replace('/Login');
  };

  return (
    <View style={styles.container}>
      {/* Botón de cerrar sesión en esquina superior izquierda */}
      <TouchableOpacity 
        style={[styles.logoutButton, {
          top: verticalScale(40),
          left: horizontalScale(20),
          padding: horizontalScale(10),
        }]} 
        onPress={handleLogout}
      >
        <Ionicons 
          name="exit-outline" 
          size={moderateScale(24)} 
          color="#FFF7E8" 
        />
      </TouchableOpacity>

      <ScrollView contentContainerStyle={[styles.scrollContent, {
        paddingBottom: verticalScale(80), // Espacio para el navigation bar
      }]}>
        <Text style={[styles.title, {
          fontSize: moderateScale(24),
          marginBottom: verticalScale(20),
        }]}>
          Bienvenido a la Pantalla Principal
        </Text>
        
        {/* Tu contenido principal aquí */}
        <Text style={[styles.subtitle, {
          fontSize: moderateScale(18),
        }]}>
          Contenido de tu aplicación...
        </Text>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF7E8',
  },
  scrollContent: {
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  title: {
    fontWeight: 'bold',
    color: '#6E4F32',
    textAlign: 'center',
  },
  subtitle: {
    color: '#6E4F32',
    textAlign: 'center',
    marginTop: 10,
  },
  logoutButton: {
    position: 'absolute',
    backgroundColor: '#E67F33',
    borderRadius: 25,
    width: 50,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 1000,
    elevation: 5,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 3,
  },
});

export default HomeScreen;
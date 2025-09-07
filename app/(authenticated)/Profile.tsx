import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import { useResponsive } from '@/hooks/useResponsive';

const ProfileScreen = () => {
  const { moderateScale, verticalScale, horizontalScale } = useResponsive();

  return (
    <View style={styles.container}>
      <ScrollView 
        contentContainerStyle={[styles.content, {
          padding: horizontalScale(20),
          paddingTop: verticalScale(60), // ← Espacio para botones superiores
          paddingBottom: verticalScale(100), // ← Espacio para navbar
        }]}
        showsVerticalScrollIndicator={false}
      >
        <Text style={[styles.title, {
          fontSize: moderateScale(24),
          marginBottom: verticalScale(20),
        }]}>
          Mi Perfil
        </Text>
        
        <View style={[styles.card, {
          padding: horizontalScale(20),
          borderRadius: moderateScale(15),
          marginBottom: verticalScale(20),
        }]}>
          <Text style={[styles.text, { fontSize: moderateScale(16) }]}>
            Contenido de tu perfil...
          </Text>
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF7E8',
  },
  content: {
    flexGrow: 1,
    alignItems: 'center',
  },
  title: {
    fontWeight: 'bold',
    color: '#6E4F32',
    textAlign: 'center',
  },
  card: {
    backgroundColor: '#F4C96F',
    width: '100%',
    alignItems: 'center',
  },
  text: {
    color: '#6E4F32',
    textAlign: 'center',
  },
});

export default ProfileScreen;
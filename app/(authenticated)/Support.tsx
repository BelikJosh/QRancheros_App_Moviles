import React from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import { useResponsive } from '@/hooks/useResponsive';
import { Ionicons } from '@expo/vector-icons';

const SupportScreen = () => {
  const { moderateScale, verticalScale, horizontalScale } = useResponsive();

  return (
    <View style={styles.container}>
      <ScrollView 
        contentContainerStyle={[styles.content, {
          padding: horizontalScale(20),
          paddingTop: verticalScale(60),
          paddingBottom: verticalScale(100),
        }]}
        showsVerticalScrollIndicator={false}
      >
        <Text style={[styles.title, {
          fontSize: moderateScale(24),
          marginBottom: verticalScale(30),
        }]}>
          Soporte
        </Text>
        
        <Text style={[styles.subtitle, {
          fontSize: moderateScale(18),
          marginBottom: verticalScale(20),
        }]}>
          ¿Necesitas ayuda?
        </Text>

        <TouchableOpacity style={[styles.contactButton, {
          padding: verticalScale(15),
          borderRadius: moderateScale(10),
          marginBottom: verticalScale(15),
        }]}>
          <Ionicons name="mail-outline" size={moderateScale(24)} color="#6E4F32" />
          <Text style={[styles.contactText, {
            fontSize: moderateScale(16),
            marginLeft: horizontalScale(10),
          }]}>
            support@qrancheros.com
          </Text>
        </TouchableOpacity>

        <TouchableOpacity style={[styles.contactButton, {
          padding: verticalScale(15),
          borderRadius: moderateScale(10),
          marginBottom: verticalScale(15),
        }]}>
          <Ionicons name="call-outline" size={moderateScale(24)} color="#6E4F32" />
          <Text style={[styles.contactText, {
            fontSize: moderateScale(16),
            marginLeft: horizontalScale(10),
          }]}>
            +1 234 567 8900
          </Text>
        </TouchableOpacity>

        <TouchableOpacity style={[styles.contactButton, {
          padding: verticalScale(15),
          borderRadius: moderateScale(10),
        }]}>
          <Ionicons name="chatbubble-outline" size={moderateScale(24)} color="#6E4F32" />
          <Text style={[styles.contactText, {
            fontSize: moderateScale(16),
            marginLeft: horizontalScale(10),
          }]}>
            Chat en vivo
          </Text>
        </TouchableOpacity>
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
  subtitle: {
    fontWeight: '600',
    color: '#6E4F32',
    textAlign: 'center',
  },
  contactButton: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#F4C96F',
    width: '100%',
    justifyContent: 'flex-start',
  },
  contactText: {
    color: '#6E4F32',
    fontWeight: '500',
  },
});

export default SupportScreen;
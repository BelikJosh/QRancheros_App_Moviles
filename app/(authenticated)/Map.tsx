import React from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import { useResponsive } from '@/hooks/useResponsive';
import { Ionicons } from '@expo/vector-icons';

const MapScreen = () => {
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
          marginBottom: verticalScale(20),
        }]}>
          Mapa
        </Text>

        <View style={[styles.mapPlaceholder, {
          width: '100%',
          height: verticalScale(200),
          borderRadius: moderateScale(15),
          marginBottom: verticalScale(25),
        }]}>
          <Ionicons name="map-outline" size={moderateScale(60)} color="#6E4F32" />
          <Text style={[styles.mapText, {
            fontSize: moderateScale(16),
            marginTop: verticalScale(10),
          }]}>
            Vista del Mapa
          </Text>
        </View>

        <View style={[styles.locations, {
          width: '100%',
        }]}>
          <Text style={[styles.subtitle, {
            fontSize: moderateScale(18),
            marginBottom: verticalScale(15),
          }]}>
            Lugares Cercanos
          </Text>

          <TouchableOpacity style={[styles.locationItem, {
            padding: verticalScale(15),
            borderRadius: moderateScale(10),
            marginVertical: verticalScale(8),
          }]}>
            <Ionicons name="location-outline" size={moderateScale(24)} color="#E67F33" />
            <Text style={[styles.locationText, {
              fontSize: moderateScale(16),
              marginLeft: horizontalScale(15),
            }]}>
              Restaurante Los Rancheros
            </Text>
          </TouchableOpacity>

          <TouchableOpacity style={[styles.locationItem, {
            padding: verticalScale(15),
            borderRadius: moderateScale(10),
            marginVertical: verticalScale(8),
          }]}>
            <Ionicons name="location-outline" size={moderateScale(24)} color="#E67F33" />
            <Text style={[styles.locationText, {
              fontSize: moderateScale(16),
              marginLeft: horizontalScale(15),
            }]}>
              Cafetería Central
            </Text>
          </TouchableOpacity>

          <TouchableOpacity style={[styles.locationItem, {
            padding: verticalScale(15),
            borderRadius: moderateScale(10),
            marginVertical: verticalScale(8),
          }]}>
            <Ionicons name="location-outline" size={moderateScale(24)} color="#E67F33" />
            <Text style={[styles.locationText, {
              fontSize: moderateScale(16),
              marginLeft: horizontalScale(15),
            }]}>
              Tienda QRanch
            </Text>
          </TouchableOpacity>
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
  subtitle: {
    fontWeight: '600',
    color: '#6E4F32',
    textAlign: 'center',
  },
  mapPlaceholder: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#F4C96F',
  },
  mapText: {
    color: '#6E4F32',
    textAlign: 'center',
  },
  locations: {
    width: '100%',
  },
  locationItem: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    borderWidth: 1,
    borderColor: '#E67F33',
  },
  locationText: {
    color: '#6E4F32',
    fontWeight: '500',
  },
});

export default MapScreen;
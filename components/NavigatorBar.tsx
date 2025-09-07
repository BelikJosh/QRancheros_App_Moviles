import React from 'react';
import { View, TouchableOpacity, Text, StyleSheet } from 'react-native';
import { useRouter, usePathname } from 'expo-router'; // ← Cambiado a usePathname
import { useResponsive } from '@/hooks/useResponsive';
import { Ionicons } from '@expo/vector-icons';

const NavigationBar = () => {
  const router = useRouter();
  const pathname = usePathname(); // ← Más confiable que useSegments
  const { horizontalScale, verticalScale, moderateScale } = useResponsive();

  // Extraer el nombre de la pantalla actual desde la ruta completa
  const getCurrentScreen = () => {
    const parts = pathname.split('/');
    return parts[parts.length - 1] || 'index';
  };

  const currentScreen = getCurrentScreen().toLowerCase();

  const navItems = [
    { key: 'profile', label: 'Perfil', icon: 'person-outline', route: '/(authenticated)/Profile' },
    { key: 'support', label: 'Soporte', icon: 'help-circle-outline', route: '/(authenticated)/Support' },
    { key: 'scanner', label: 'Scanner', icon: 'scan-outline', route: '/(authenticated)/Scanner' },
    { key: 'pay', label: 'Pago', icon: 'wallet-outline', route: '/(authenticated)/Pay' },
    { key: 'map', label: 'Map', icon: 'map-outline', route: '/(authenticated)/Map' },
  ];

  const handleNavigation = (route: string) => {
    // Evitar navegar a la misma pantalla
    const routeParts = route.split('/');
    const targetScreen = routeParts[routeParts.length - 1].toLowerCase();
    
    if (targetScreen !== currentScreen) {
      router.push(route);
    }
    // Si es la misma pantalla, no hacer nada (evita doble click)
  };

  return (
    <View style={[styles.navContainer, {
      paddingVertical: verticalScale(10),
      height: verticalScale(70),
    }]}>
      {navItems.map((item) => {
        const isActive = currentScreen === item.key;
        
        return (
          <TouchableOpacity
            key={item.key}
            style={[
              styles.navItem,
              {
                paddingHorizontal: horizontalScale(5),
                backgroundColor: isActive ? '#5961d1ff' : 'transparent',
                borderRadius: isActive ? moderateScale(10) : 0,
                padding: isActive ? moderateScale(5) : 0,
              }
            ]}
            onPress={() => handleNavigation(item.route)}
            disabled={isActive} // ← Deshabilitar botón si ya está activo
          >
            <Ionicons 
              name={item.icon} 
              size={moderateScale(24, 0.3)} 
              color={isActive ? '#ffffffff' : '#111111ff'}
            />
            <Text style={[styles.navText, {
              fontSize: moderateScale(12, 0.3),
              marginTop: verticalScale(4),
              color: isActive ? '#ffffffff' : '#111111ff',
              fontWeight: isActive ? 'bold' : '500',
            }]}>
              {item.label}
            </Text>
            
            {isActive && (
              <View style={[styles.activeIndicator, {
                top: verticalScale(-2),
              }]} />
            )}
          </TouchableOpacity>
        );
      })}
    </View>
  );
};

const styles = StyleSheet.create({
  navContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    backgroundColor: '#ffffffff',
    borderTopWidth: 1,
    borderTopColor: '#2648adff',
    width: '100%',
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    zIndex: 1000,
    elevation: 10,
  },
  navItem: {
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
    position: 'relative',
  },
  navText: {
    textAlign: 'center',
  },
  activeIndicator: {
    position: 'absolute',
    width: 6,
    height: 6,
    borderRadius: 3,
    backgroundColor: '#4833e6ff',
  },
});

export default NavigationBar;
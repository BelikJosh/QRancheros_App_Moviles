import React from 'react';
import { View, TouchableOpacity, Text, StyleSheet } from 'react-native';
import { useRouter } from 'expo-router';
import { useResponsive } from '@/hooks/useResponsive';

const CompactNavigationBar = () => {
  const router = useRouter();
  const { horizontalScale, moderateScale } = useResponsive();

  const navItems = [
    { key: 'previps', label: 'Previps', route: '/previps' },
    { key: 'support', label: 'Support', route: '/support' },
    { key: 'scammer', label: 'Scammer', route: '/scammer' },
    { key: 'pay', label: 'Pay', route: '/pay' },
    { key: 'map', label: 'Map', route: '/map' },
  ];

  return (
    <View style={[styles.navContainer, {
      paddingVertical: horizontalScale(8),
    }]}>
      {navItems.map((item) => (
        <TouchableOpacity
          key={item.key}
          style={styles.navItem}
          onPress={() => router.push(item.route)}
        >
          <Text style={[styles.navText, {
            fontSize: moderateScale(12, 0.3),
          }]}>
            {item.label}
          </Text>
        </TouchableOpacity>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  navContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    backgroundColor: '#F4C96F',
    borderTopWidth: 2,
    borderTopColor: '#E67F33',
    width: '100%',
  },
  navItem: {
    paddingHorizontal: 5,
  },
  navText: {
    color: '#6E4F32',
    fontWeight: '600',
  },
});

export default CompactNavigationBar;
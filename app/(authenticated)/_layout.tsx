import { Stack } from 'expo-router';
import NavigationBar from '@/components/NavigatorBar';
import { View, StyleSheet } from 'react-native';
import { useResponsive } from '@/hooks/useResponsive'; 


export default function AuthenticatedLayout() {
  const { verticalScale } = useResponsive();

  return (
    <View style={[styles.container, { paddingBottom: verticalScale(70) }]}>
      <Stack 
        screenOptions={{ headerShown: false }}
        initialRouteName="Scanner"
      >
        <Stack.Screen name="index" />
        <Stack.Screen name="Profile" />
        <Stack.Screen name="Support" />
        <Stack.Screen name="Scanner" />
        <Stack.Screen name="Pay" />
        <Stack.Screen name="Map" />
      </Stack>
      
      <NavigationBar />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF7E8',
  },
});

// ❌ Cualquier código o comentario aquí fuera también causará el error
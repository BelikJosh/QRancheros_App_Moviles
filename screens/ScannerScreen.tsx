// screens/ScannerScreen.tsx
import { View, Text, StyleSheet, Button } from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { MainTabParamList } from '../types/navigation';

type Props = NativeStackScreenProps<MainTabParamList, 'Scan'>;

export default function ScannerScreen({ navigation }: Props) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Escanear QR</Text>
      <Text>Aquí irá tu scanner de códigos QR</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
});
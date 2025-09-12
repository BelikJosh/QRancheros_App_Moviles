// screens/ScannerScreen.tsx
import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Alert } from 'react-native';
import { CameraView, Camera } from 'expo-camera';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { MainTabParamList } from '../types/navigation';
import { useTheme } from '../src/contexts/themeContext';
import { useLanguage } from '../src/contexts/LanguageContext';
import { Ionicons } from '@expo/vector-icons';

type Props = NativeStackScreenProps<MainTabParamList, 'Scan'>;

export default function ScannerScreen({ navigation }: Props) {
  const [hasPermission, setHasPermission] = useState<boolean | null>(null);
  const [scanned, setScanned] = useState(false);
  const [isCameraActive, setIsCameraActive] = useState(true);
  const { themeColors } = useTheme();
  const { t } = useLanguage();

  const styles = createStyles(themeColors);

  // Solicitar permisos de cámara
  useEffect(() => {
    const getCameraPermissions = async () => {
      const { status } = await Camera.requestCameraPermissionsAsync();
      setHasPermission(status === 'granted');
    };

    getCameraPermissions();
  }, []);

  // Función para manejar el escaneo de QR
  const handleBarCodeScanned = ({ type, data }: { type: string; data: string }) => {
    setScanned(true);
    
    // Mostrar alerta con el resultado
    Alert.alert(
      t('qrScanned'),
      `${t('qrType')}: ${type}\n${t('qrData')}: ${data}`,
      [
        {
          text: t('scanAgain'),
          onPress: () => {
            setScanned(false);
            setIsCameraActive(true);
          },
        },
        {
          text: t('accept'),
          onPress: () => {
            // Aquí puedes procesar el dato del QR
            console.log('QR data:', data);
            // navigation.navigate('SomeScreen', { qrData: data });
          },
        }
      ]
    );
  };

  const toggleCamera = () => {
    setIsCameraActive(!isCameraActive);
  };

  const requestPermissionAgain = async () => {
    const { status } = await Camera.requestCameraPermissionsAsync();
    setHasPermission(status === 'granted');
  };

  // Estados de permisos
  if (hasPermission === null) {
    return (
      <View style={styles.container}>
        <Text style={styles.message}>{t('requestingPermission')}</Text>
      </View>
    );
  }

  if (hasPermission === false) {
    return (
      <View style={styles.container}>
        <Ionicons name="camera-off" size={64} color={themeColors.text} />
        <Text style={styles.message}>{t('noCameraPermission')}</Text>
        <TouchableOpacity style={styles.permissionButton} onPress={requestPermissionAgain}>
          <Text style={styles.permissionButtonText}>{t('grantPermission')}</Text>
        </TouchableOpacity>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      {isCameraActive ? (
        <CameraView
          style={styles.camera}
          facing="back"
          onBarcodeScanned={scanned ? undefined : handleBarCodeScanned}
          barcodeScannerSettings={{
            barcodeTypes: ['qr', 'pdf417'],
          }}
        >
          <View style={styles.overlay}>
            <View style={styles.frame}>
              <View style={styles.cornerTopLeft} />
              <View style={styles.cornerTopRight} />
              <View style={styles.cornerBottomLeft} />
              <View style={styles.cornerBottomRight} />
            </View>
            
            <Text style={styles.scanText}>{t('scanQRCode')}</Text>
            
            {scanned && (
              <TouchableOpacity style={styles.scanAgainButton} onPress={() => setScanned(false)}>
                <Text style={styles.scanAgainText}>{t('tapToScanAgain')}</Text>
              </TouchableOpacity>
            )}
          </View>
        </CameraView>
      ) : (
        <View style={styles.cameraPlaceholder}>
          <Ionicons name="camera" size={64} color={themeColors.text} />
          <Text style={styles.message}>{t('cameraInactive')}</Text>
        </View>
      )}

      <View style={styles.controls}>
        <TouchableOpacity style={styles.controlButton} onPress={toggleCamera}>
          <Ionicons 
            name={isCameraActive ? 'camera-off' : 'camera'} 
            size={24} 
            color={themeColors.primary} 
          />
          <Text style={styles.controlText}>
            {isCameraActive ? t('turnOffCamera') : t('turnOnCamera')}
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const createStyles = (colors: any) => StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
  },
  camera: {
    flex: 1,
  },
  cameraPlaceholder: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.card,
  },
  overlay: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'transparent',
  },
  frame: {
    width: 250,
    height: 250,
    position: 'relative',
  },
  cornerTopLeft: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: 40,
    height: 40,
    borderLeftWidth: 4,
    borderTopWidth: 4,
    borderColor: colors.primary,
  },
  cornerTopRight: {
    position: 'absolute',
    top: 0,
    right: 0,
    width: 40,
    height: 40,
    borderRightWidth: 4,
    borderTopWidth: 4,
    borderColor: colors.primary,
  },
  cornerBottomLeft: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    width: 40,
    height: 40,
    borderLeftWidth: 4,
    borderBottomWidth: 4,
    borderColor: colors.primary,
  },
  cornerBottomRight: {
    position: 'absolute',
    bottom: 0,
    right: 0,
    width: 40,
    height: 40,
    borderRightWidth: 4,
    borderBottomWidth: 4,
    borderColor: colors.primary,
  },
  scanText: {
    color: '#FFFFFF',
    fontSize: 16,
    marginTop: 20,
    fontWeight: 'bold',
    textShadowColor: 'rgba(0, 0, 0, 0.75)',
    textShadowOffset: { width: -1, height: 1 },
    textShadowRadius: 10,
  },
  scanAgainButton: {
    backgroundColor: colors.primary,
    padding: 15,
    borderRadius: 10,
    marginTop: 20,
  },
  scanAgainText: {
    color: '#FFFFFF',
    fontWeight: 'bold',
  },
  controls: {
    position: 'absolute',
    bottom: 30,
    left: 0,
    right: 0,
    alignItems: 'center',
  },
  controlButton: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: colors.card,
    padding: 15,
    borderRadius: 25,
    borderWidth: 1,
    borderColor: colors.border,
  },
  controlText: {
    color: colors.text,
    marginLeft: 10,
    fontWeight: '600',
  },
  message: {
    color: colors.text,
    fontSize: 18,
    textAlign: 'center',
    marginTop: 20,
    marginHorizontal: 20,
  },
  permissionButton: {
    backgroundColor: colors.primary,
    padding: 15,
    borderRadius: 10,
    marginTop: 20,
  },
  permissionButtonText: {
    color: '#FFFFFF',
    fontWeight: 'bold',
  },
});
import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Alert, ScrollView, Linking } from 'react-native';
import { useRouter } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';
import { useResponsive } from '@/hooks/useResponsive';
import { CameraView, useCameraPermissions } from 'expo-camera';

const ScannerScreen = () => {
  const router = useRouter();
  const { moderateScale, verticalScale, horizontalScale } = useResponsive();
  const [scanned, setScanned] = useState(false);
  const [isCameraActive, setIsCameraActive] = useState(false);
  const [permission, requestPermission] = useCameraPermissions();

  // Verificar permisos de cámara
  useEffect(() => {
    if (permission && !permission.granted) {
      requestPermission();
    }
  }, [permission]);

  // Función para manejar el escaneo de QR
  const handleBarCodeScanned = ({ data }) => {
    setScanned(true);
    Alert.alert(
      '✅ QR Escaneado',
      `Contenido: ${data}`,
      [
        {
          text: 'Abrir enlace',
          onPress: () => {
            if (data.startsWith('http') || data.startsWith('https')) {
              Linking.openURL(data);
            } else {
              Alert.alert('No es un enlace válido', data);
            }
          }
        },
        {
          text: 'Escanear de nuevo',
          onPress: () => setScanned(false)
        },
        {
          text: 'Aceptar',
          style: 'cancel'
        }
      ]
    );
  };

  const handleGoBack = () => {
    if (isCameraActive) {
      setIsCameraActive(false);
    } else {
      router.push('/(authenticated)');
    }
  };

  const toggleCamera = async () => {
    if (!permission?.granted) {
      await requestPermission();
    }
    setIsCameraActive(!isCameraActive);
    setScanned(false);
  };

  if (!permission) {
    return (
      <View style={styles.container}>
        <Text>Cargando...</Text>
      </View>
    );
  }

  if (!permission.granted) {
    return (
      <View style={[styles.container, styles.centerContent]}>
        <Text style={[styles.permissionText, { fontSize: moderateScale(18) }]}>
          Se necesita permiso para usar la cámara
        </Text>
        <TouchableOpacity 
          style={[styles.permissionButton, {
            padding: verticalScale(15),
            borderRadius: moderateScale(10),
            marginTop: verticalScale(20),
          }]} 
          onPress={requestPermission}
        >
          <Text style={[styles.permissionButtonText, { fontSize: moderateScale(16) }]}>
            Conceder Permiso
          </Text>
        </TouchableOpacity>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      {/* Botón de regresar */}
      <TouchableOpacity 
        style={[styles.backButton, {
          top: verticalScale(40),
          left: horizontalScale(20),
          width: horizontalScale(50),
          height: verticalScale(50),
          borderRadius: moderateScale(25),
        }]} 
        onPress={handleGoBack}
      >
        <Ionicons 
          name={isCameraActive ? "close" : "arrow-back"} 
          size={moderateScale(24)} 
          color="#6E4F32" 
        />
      </TouchableOpacity>

      {isCameraActive ? (
        // VISTA DE LA CÁMARA ACTIVA
        <View style={styles.cameraContainer}>
          <CameraView
            style={styles.camera}
            facing="back"
            onBarcodeScanned={scanned ? undefined : handleBarCodeScanned}
            barcodeScannerSettings={{
              barcodeTypes: ['qr', 'pdf417'],
            }}
          >
            <View style={styles.overlay}>
              {/* Marco de escaneo */}
              <View style={[styles.scanFrame, {
                width: horizontalScale(250),
                height: verticalScale(250),
                borderColor: scanned ? '#00FF00' : '#E67F33',
              }]} />
              
              <Text style={[styles.scanInstruction, {
                fontSize: moderateScale(16),
                color: '#FFF',
                marginTop: verticalScale(20),
              }]}>
                {scanned ? '✅ Escaneado' : 'Enfoca el código QR'}
              </Text>

              {scanned && (
                <TouchableOpacity 
                  style={[styles.scanAgainButton, {
                    padding: verticalScale(15),
                    borderRadius: moderateScale(10),
                    marginTop: verticalScale(20),
                  }]}
                  onPress={() => setScanned(false)}
                >
                  <Text style={[styles.scanAgainText, { fontSize: moderateScale(16) }]}>
                    Escanear otro código
                  </Text>
                </TouchableOpacity>
              )}
            </View>
          </CameraView>
        </View>
      ) : (
        // VISTA INICIAL (sin cámara activa)
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
            Escáner QR
          </Text>

          <View style={[styles.scannerPlaceholder, {
            width: horizontalScale(250),
            height: verticalScale(250),
            borderRadius: moderateScale(20),
            marginBottom: verticalScale(30),
          }]}>
            <Ionicons 
              name="scan-outline" 
              size={moderateScale(80)} 
              color="#6E4F32" 
            />
            <Text style={[styles.scannerText, {
              fontSize: moderateScale(16),
              marginTop: verticalScale(15),
            }]}>
              Escanea códigos QR y códigos de barras
            </Text>
          </View>

          <TouchableOpacity 
            style={[styles.scanButton, {
              padding: verticalScale(15),
              borderRadius: moderateScale(10),
              minWidth: horizontalScale(200),
            }]} 
            onPress={toggleCamera}
          >
            <Ionicons 
              name="camera-outline" 
              size={moderateScale(24)} 
              color="#FFF7E8" 
            />
            <Text style={[styles.scanButtonText, {
              fontSize: moderateScale(16),
              marginLeft: horizontalScale(10),
            }]}>
              Activar Cámara
            </Text>
          </TouchableOpacity>

          <Text style={[styles.infoText, {
            fontSize: moderateScale(14),
            marginTop: verticalScale(20),
          }]}>
            La cámara se activará para escanear códigos QR
          </Text>
        </ScrollView>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffffff',
  },
  centerContent: {
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  content: {
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  cameraContainer: {
    flex: 1,
    backgroundColor: '#000',
  },
  camera: {
    flex: 1,
  },
  overlay: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.4)',
  },
  scanFrame: {
    borderWidth: 3,
    borderStyle: 'dashed',
    borderRadius: 20,
    backgroundColor: 'rgba(255, 255, 255, 0.1)',
  },
  backButton: {
    position: 'absolute',
    backgroundColor: '#F4C96F',
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 1000,
    elevation: 5,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 3,
  },
  title: {
    fontWeight: 'bold',
    color: '#6E4F32',
    textAlign: 'center',
  },
  scannerPlaceholder: {
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 2,
    borderColor: '#E67F33',
    borderStyle: 'dashed',
    backgroundColor: '#F4C96F',
  },
  scannerText: {
    color: '#6E4F32',
    textAlign: 'center',
    fontWeight: '500',
  },
  scanButton: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#E67F33',
    justifyContent: 'center',
  },
  scanButtonText: {
    color: '#FFF7E8',
    fontWeight: 'bold',
  },
  infoText: {
    color: '#6E4F32',
    textAlign: 'center',
    opacity: 0.7,
  },
  permissionText: {
    color: '#6E4F32',
    textAlign: 'center',
    marginBottom: 10,
  },
  permissionButton: {
    backgroundColor: '#E67F33',
    alignItems: 'center',
    justifyContent: 'center',
  },
  permissionButtonText: {
    color: '#FFF7E8',
    fontWeight: 'bold',
  },
  scanInstruction: {
    fontWeight: '600',
    textAlign: 'center',
  },
  scanAgainButton: {
    backgroundColor: '#E67F33',
    alignItems: 'center',
    justifyContent: 'center',
  },
  scanAgainText: {
    color: '#FFF7E8',
    fontWeight: 'bold',
  },
});

export default ScannerScreen;
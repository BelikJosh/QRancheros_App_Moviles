import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, Alert } from 'react-native';
import { Ionicons, MaterialIcons, FontAwesome5 } from '@expo/vector-icons';

const PayScreen = () => {
  const [cards, setCards] = useState([
    { id: 1, number: '2681' },
    { id: 2, number: '8954' }
  ]);

  const handlePaymentMethod = (method) => {
    Alert.alert('Método seleccionado', `Has seleccionado: ${method}`);
  };

  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.content}>
        <Text style={styles.title}>Métodos de Pago</Text>

        {/* Pago rápido */}
        <View style={styles.sectionContainer}>
          <Text style={styles.sectionTitle}>Pago rápido</Text>
          <View style={styles.section}>
            <TouchableOpacity 
              style={styles.paymentMethod}
              onPress={() => handlePaymentMethod('Pay')}
            >
              <View style={styles.iconContainer}>
                <Ionicons name="card" size={24} color="#000" />
              </View>
              <Text style={styles.paymentText}>Pago con</Text>
              <Text style={styles.paymentMethodText}>Pay</Text>
            </TouchableOpacity>

            <TouchableOpacity 
              style={styles.paymentMethod}
              onPress={() => handlePaymentMethod('PayPal')}
            >
              <View style={styles.iconContainer}>
                <Ionicons name="logo-paypal" size={24} color="#0070BA" />
              </View>
              <Text style={styles.paymentText}>Pago con</Text>
              <Text style={styles.paymentMethodText}>PayPal</Text>
            </TouchableOpacity>

            <TouchableOpacity 
              style={styles.paymentMethod}
              onPress={() => handlePaymentMethod('OpenPay')}
            >
              <View style={styles.iconContainer}>
                <MaterialIcons name="payment" size={24} color="#00B2FF" />
              </View>
              <Text style={styles.paymentText}>Pago con</Text>
              <Text style={styles.paymentMethodText}>OpenPay</Text>
            </TouchableOpacity>
          </View>
        </View>

        {/* Mis tarjetas */}
        <View style={styles.sectionContainer}>
          <Text style={styles.sectionTitle}>Mis tarjetas</Text>
          <View style={styles.section}>
            {cards.map((card) => (
              <TouchableOpacity 
                key={card.id}
                style={styles.cardItem}
                onPress={() => handlePaymentMethod(`Tarjeta ${card.number}`)}
              >
                <View style={styles.iconContainer}>
                  <FontAwesome5 name="credit-card" size={20} color="#6E4F32" />
                </View>
                <Text style={styles.cardText}>**** **** **** {card.number}</Text>
              </TouchableOpacity>
            ))}
          </View>
        </View>

        {/* Pago en efectivo */}
        <View style={styles.sectionContainer}>
          <Text style={styles.sectionTitle}>Pago en efectivo</Text>
          <View style={styles.section}>
            <TouchableOpacity 
              style={styles.paymentMethod}
              onPress={() => handlePaymentMethod('DXQ')}
            >
              <View style={styles.iconContainer}>
                <Ionicons name="business" size={24} color="#E67F33" />
              </View>
              <Text style={styles.paymentText}>Pago con</Text>
              <Text style={styles.paymentMethodText}>DXQ</Text>
            </TouchableOpacity>

            <TouchableOpacity 
              style={styles.paymentMethod}
              onPress={() => handlePaymentMethod('Cajero')}
            >
              <View style={styles.iconContainer}>
                <Ionicons name="cash" size={24} color="#6E4F32" />
              </View>
              <Text style={styles.paymentText}>Pago con</Text>
              <Text style={styles.paymentMethodText}>cajero</Text>
            </TouchableOpacity>
          </View>
        </View>

        {/* Pago con nuestra billetera */}
        <View style={styles.sectionContainer}>
          <Text style={styles.sectionTitle}>Pago con nuestra billetera</Text>
          <View style={styles.section}>
            <TouchableOpacity 
              style={styles.paymentMethod}
              onPress={() => handlePaymentMethod('XQ')}
            >
              <View style={styles.iconContainer}>
                <Ionicons name="phone-portrait" size={24} color="#E67F33" />
              </View>
              <Text style={styles.paymentText}>Pago con</Text>
              <Text style={styles.paymentMethodText}>XQ</Text>
            </TouchableOpacity>

            <TouchableOpacity 
              style={styles.paymentMethod}
              onPress={() => handlePaymentMethod('QR')}
            >
              <View style={styles.iconContainer}>
                <Ionicons name="qr-code" size={24} color="#6E4F32" />
              </View>
              <Text style={styles.paymentText}>Pago con</Text>
              <Text style={styles.paymentMethodText}>QR</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f4f4f4',
  },
  content: {
    padding: 20,
    paddingTop: 60,
    paddingBottom: 100,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#6E4F32',
    textAlign: 'center',
    marginBottom: 30,
  },
  sectionContainer: {
    backgroundColor: '#FFFFFF',
    borderRadius: 12,
    padding: 16,
    marginBottom: 20,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 3.84,
    elevation: 5,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: '#6E4F32',
    marginBottom: 15,
  },
  section: {
    // Contenedor interno para los elementos de pago
  },
  paymentMethod: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    padding: 15,
    borderRadius: 10,
    marginBottom: 10,
    borderWidth: 1,
    borderColor: '#E0E0E0',
  },
  iconContainer: {
    width: 40,
    alignItems: 'center',
    marginRight: 15,
  },
  paymentText: {
    color: '#666',
    fontSize: 14,
    marginRight: 5,
  },
  paymentMethodText: {
    color: '#6E4F32',
    fontWeight: '500',
    fontSize: 16,
  },
  cardItem: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    padding: 15,
    borderRadius: 10,
    marginBottom: 10,
    borderWidth: 1,
    borderColor: '#E0E0E0',
  },
  cardText: {
    color: '#6E4F32',
    fontSize: 16,
  },
});

export default PayScreen;
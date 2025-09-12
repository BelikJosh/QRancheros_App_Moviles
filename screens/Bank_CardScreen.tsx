// screens/Bank_CardScreen.tsx
import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity, Image } from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '../types/navigation';
import { useTheme } from '../src/contexts/themeContext';
import { useLanguage } from '../src/contexts/LanguageContext';
import creditCardType from 'credit-card-type';

type Props = NativeStackScreenProps<RootStackParamList, 'Bank_Card'>;

export default function Bank_CardScreen({ navigation }: Props) {
  const [cardNumber, setCardNumber] = useState('');
  const [cardHolder, setCardHolder] = useState('');
  const [expiryDate, setExpiryDate] = useState('');
  const [cvv, setCvv] = useState('');
  const { themeColors } = useTheme();
  const { t } = useLanguage();

  const styles = createStyles(themeColors);

  // Detectar el tipo de tarjeta y banco
  const detectCardType = () => {
    if (!cardNumber) return null;
    
    const types = creditCardType(cardNumber);
    if (types.length > 0) {
      return types[0];
    }
    return null;
  };

  const getBankInfo = () => {
    const cardType = detectCardType();
    if (!cardType) return { name: 'Tarjeta', color: themeColors.primary, logo: null };

    switch (cardType.type) {
      case 'visa':
        return { 
          name: 'Visa', 
          color: '#1a1f71', 
          logo: 'https://logos-world.net/wp-content/uploads/2020/04/Visa-Logo.png'
        };
      case 'mastercard':
        return { 
          name: 'Mastercard', 
          color: '#eb001b', 
          logo: 'https://logos-world.net/wp-content/uploads/2020/09/Mastercard-Logo.png'
        };
      case 'american-express':
        return { 
          name: 'American Express', 
          color: '#2e77bc', 
          logo: 'https://logos-world.net/wp-content/uploads/2020/11/American-Express-Logo.png'
        };
      default:
        return { name: 'Tarjeta', color: themeColors.primary, logo: null };
    }
  };

  const formatCardNumber = (text: string) => {
    const cleaned = text.replace(/\D/g, '');
    const formatted = cleaned.replace(/(\d{4})/g, '$1 ').trim();
    return formatted.substring(0, 19);
  };

  const formatExpiryDate = (text: string) => {
    const cleaned = text.replace(/\D/g, '');
    if (cleaned.length >= 3) {
      return cleaned.substring(0, 2) + '/' + cleaned.substring(2, 4);
    }
    return cleaned;
  };

  const bankInfo = getBankInfo();

  return (
    <View style={styles.container}>
      {/* Tarjeta de Crédito */}
      <View style={[styles.card, { backgroundColor: bankInfo.color }]}>
        <View style={styles.cardHeader}>
          {bankInfo.logo && (
            <Image 
              source={{ uri: bankInfo.logo }} 
              style={styles.bankLogo}
              resizeMode="contain"
            />
          )}
          <Text style={styles.cardBankName}>{bankInfo.name}</Text>
        </View>
        
        <View style={styles.cardNumberContainer}>
          <Text style={styles.cardNumberText}>
            {cardNumber || '•••• •••• •••• ••••'}
          </Text>
        </View>

        <View style={styles.cardFooter}>
          <View>
            <Text style={styles.cardLabel}>TITULAR</Text>
            <Text style={styles.cardHolderText}>
              {cardHolder || 'NOMBRE DEL TITULAR'}
            </Text>
          </View>
          
          <View>
            <Text style={styles.cardLabel}>VENCE</Text>
            <Text style={styles.cardExpiryText}>
              {expiryDate || 'MM/AA'}
            </Text>
          </View>
        </View>
      </View>

      {/* Formulario */}
      <View style={styles.formContainer}>
        <Text style={styles.label}>Número de Tarjeta</Text>
        <TextInput
          style={styles.input}
          placeholder="1234 5678 9012 3456"
          keyboardType="numeric"
          maxLength={19}
          value={formatCardNumber(cardNumber)}
          onChangeText={(text) => setCardNumber(text.replace(/\s/g, ''))}
        />

        <Text style={styles.label}>Nombre del Titular</Text>
        <TextInput
          style={styles.input}
          placeholder="JUAN PEREZ"
          autoCapitalize="characters"
          value={cardHolder}
          onChangeText={setCardHolder}
        />

        <View style={styles.row}>
          <View style={styles.halfInput}>
            <Text style={styles.label}>Fecha de Vencimiento</Text>
            <TextInput
              style={styles.input}
              placeholder="MM/AA"
              keyboardType="numeric"
              maxLength={5}
              value={formatExpiryDate(expiryDate)}
              onChangeText={setExpiryDate}
            />
          </View>

          <View style={styles.halfInput}>
            <Text style={styles.label}>CVV</Text>
            <TextInput
              style={styles.input}
              placeholder="123"
              keyboardType="numeric"
              maxLength={3}
              secureTextEntry
              value={cvv}
              onChangeText={setCvv}
            />
          </View>
        </View>

        <TouchableOpacity style={styles.saveButton}>
          <Text style={styles.saveButtonText}>Guardar Tarjeta</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const createStyles = (colors: any) => StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: colors.background,
    paddingTop: 100
  },
  card: {
    height: 200,
    borderRadius: 15,
    padding: 20,
    marginBottom: 30,
    justifyContent: 'space-between',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  cardHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  bankLogo: {
    width: 60,
    height: 40,
  },
  cardBankName: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: 'bold',
  },
  cardNumberContainer: {
    alignItems: 'center',
  },
  cardNumberText: {
    color: '#FFFFFF',
    fontSize: 24,
    fontWeight: 'bold',
    letterSpacing: 2,
  },
  cardFooter: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  cardLabel: {
    color: '#FFFFFF',
    fontSize: 10,
    opacity: 0.8,
    marginBottom: 4,
  },
  cardHolderText: {
    color: '#FFFFFF',
    fontSize: 14,
    fontWeight: '600',
  },
  cardExpiryText: {
    color: '#FFFFFF',
    fontSize: 14,
    fontWeight: '600',
  },
  formContainer: {
    flex: 1,
  },
  label: {
    color: colors.text,
    fontSize: 14,
    fontWeight: '600',
    marginBottom: 8,
  },
  input: {
    backgroundColor: colors.card,
    color: colors.text,
    borderWidth: 1,
    borderColor: colors.border,
    borderRadius: 10,
    padding: 15,
    marginBottom: 20,
    fontSize: 16,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  halfInput: {
    width: '48%',
  },
  saveButton: {
    backgroundColor: colors.primary,
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
    marginTop: 20,
  },
  saveButtonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: 'bold',
  },
});
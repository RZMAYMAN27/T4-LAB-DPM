import React from 'react';
import { TouchableOpacity, View, Text, StyleSheet } from 'react-native';

export default function ResetButton({ onPress }) {
  return (
    <TouchableOpacity onPress={onPress} style={styles.resetButton}>
      <Text style={styles.resetButtonText}>🔄 Reset Skor</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  resetButton: {
    backgroundColor: '#3498db',
    paddingVertical: 15,
    paddingHorizontal: 40,
    borderRadius: 50,
    marginTop: 30,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 6 },
    shadowOpacity: 0.1,
    shadowRadius: 10,
    elevation: 5,
  },
  resetButtonText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#ffffff',
    textAlign: 'center',
  },
});

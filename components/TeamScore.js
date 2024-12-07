import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Platform,
} from 'react-native';

export default function TeamScore({ teamName, score, onAdd, onSubtract }) {
  return (
    <View style={styles.card}>
      <Text style={styles.teamName}>{teamName}</Text>
      <View style={styles.scoreCircle}>
        <Text style={styles.score}>{score}</Text>
      </View>
      <View style={styles.buttonContainer}>
        <TouchableOpacity onPress={onAdd} style={styles.addButton}>
          <Text style={styles.buttonText}>+ Tambah</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={onSubtract} style={styles.subtractButton}>
          <Text style={styles.buttonText}>- Kurang</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#ffffff',
    padding: 20,
    borderRadius: 25,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 6 },
    shadowOpacity: 0.1,
    shadowRadius: 10,
    elevation: 5,
    alignItems: 'center',
    width: '45%',
    marginHorizontal: 10,
  },
  teamName: {
    fontSize: 20,
    fontWeight: '700',
    color: '#2c3e50',
    marginBottom: 15,
  },
  scoreCircle: {
    backgroundColor: '#eaf6f6',
    width: 130,
    height: 130,
    borderRadius: 65,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 15,
  },
  score: {
    fontSize: 42,
    fontWeight: 'bold',
    color: '#34495e',
  },
  buttonContainer: {
    flexDirection: 'row',
    marginTop: 10,
  },
  addButton: {
    backgroundColor: '#1abc9c',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 20,
    marginHorizontal: 5,
  },
  subtractButton: {
    backgroundColor: '#e74c3c',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 20,
    marginHorizontal: 5,
  },
  buttonText: {
    fontSize: 7,
    fontWeight: '700',
    color: '#ffffff',
  },
});

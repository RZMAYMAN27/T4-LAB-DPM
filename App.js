import React, { useState } from 'react';
import { View, Text, StyleSheet, Alert, Platform } from 'react-native';
import ResetButton from './components/ResetButton';
export default function App() {
  const [scoreA, setScoreA] = useState(0);
  const [scoreB, setScoreB] = useState(0);

  const resetScores = () => {
    setScoreA(0);
    setScoreB(0);
  };

  const checkWinner = (team, score) => {
    if (score === 10) {
      Alert.alert('🏆 Pemenang!', `Tim ${team} memenangkan pertandingan! 🎉`);
      resetScores();
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>⚽ Skor Futsal</Text>
      <Text style={styles.subtitle}>Ayo dukung tim favoritmu!</Text>
      <View style={styles.scoreBoard}>
        <View style={styles.teamBox}>
          <Text style={[styles.teamName, { color: '#1abc9c' }]}>Tim A</Text>
          <Text style={styles.score}>{scoreA}</Text>
          <View style={styles.buttonContainer}>
            <Text
              style={styles.addButton}
              onPress={() => {
                const newScore = scoreA + 1;
                setScoreA(newScore);
                checkWinner('A', newScore);
              }}
            >
              + Tambah
            </Text>
            <Text
              style={styles.subtractButton}
              onPress={() => setScoreA(Math.max(0, scoreA - 1))}
            >
              - Kurang
            </Text>
          </View>
        </View>
        <View style={styles.divider} />
        <View style={styles.teamBox}>
          <Text style={[styles.teamName, { color: '#e74c3c' }]}>Tim B</Text>
          <Text style={styles.score}>{scoreB}</Text>
          <View style={styles.buttonContainer}>
            <Text
              style={styles.addButton}
              onPress={() => {
                const newScore = scoreB + 1;
                setScoreB(newScore);
                checkWinner('B', newScore);
              }}
            >
              + Tambah
            </Text>
            <Text
              style={styles.subtractButton}
              onPress={() => setScoreB(Math.max(0, scoreB - 1))}
            >
              - Kurang
            </Text>
          </View>
        </View>
      </View>
      <ResetButton onPress={resetScores} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f7fbfc',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  title: {
    fontSize: 28,
    fontWeight: '700',
    color: '#34495e',
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 16,
    color: '#7f8c8d',
    marginBottom: 20,
  },
  scoreBoard: {
    flexDirection: 'row',
    backgroundColor: '#ffffff',
    borderRadius: 25,
    padding: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 4,
    width: '90%',
    alignItems: 'center',
  },
  teamBox: {
    flex: 1,
    alignItems: 'center',
  },
  teamName: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  score: {
    fontSize: 48,
    fontWeight: 'bold',
    color: '#2c3e50',
    marginBottom: 20,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 10,
  },
  addButton: {
    backgroundColor: '#1abc9c',
    color: '#ffffff',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 20,
    marginHorizontal: 5,
    textAlign: 'center',
    fontSize: 14,
    fontWeight: '700',
  },
  subtractButton: {
    backgroundColor: '#e74c3c',
    color: '#ffffff',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 20,
    marginHorizontal: 5,
    textAlign: 'center',
    fontSize: 14,
    fontWeight: '700',
  },
  divider: {
    width: 1,
    backgroundColor: '#ecf0f1',
    marginHorizontal: 10,
    height: '70%',
  },
});

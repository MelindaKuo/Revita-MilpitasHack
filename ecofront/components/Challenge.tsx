import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ProgressBarAndroid, Image } from 'react-native';

interface ChallengeProps {
  title: string;
  onComplete: () => void;
  completed: boolean;
  progress: number;
  points : number,
}

export default function Challenge({ title, onComplete, completed, progress, points }: ChallengeProps) {
  return (
    <View style={styles.challengeContainer}>
      <View style={[styles.challengeCircle, completed && styles.completedChallenge]}>
        <View style={styles.innerCircle}>
          {completed ? (
            <Image 
              source={require('../assets/images/random character.png')} 
              style={styles.trophyImage}
            />
          ) : (
            <TouchableOpacity style={styles.completeButton} onPress={onComplete}>
              <Text style={styles.completeButtonText}>{points} PTS </Text>
            </TouchableOpacity>
          )}
        </View>
      </View>
      <View style={styles.challengeInfo}>
        <Text style={styles.challengeText}>{title}</Text>
        <Text style={styles.challengeStatus}>
          {completed ? 'Challenge Complete!' : `${Math.round(progress * 100)}% Complete`}
        </Text>

      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  challengeContainer: {
    width: '90%',
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10, 
    backgroundColor: '#FFF9E3', 
    borderRadius: 12, 
    padding: 8,
    elevation: 4, 
  },
  challengeCircle: {
    width: 70, 
    height: 70,
    borderRadius: 35,
    backgroundColor: '#F0E68C', 
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 3 }, 
    shadowOpacity: 0.3,
    shadowRadius: 3, 
    elevation: 6, 
  },
  innerCircle: {
    width: 60,
    height: 60,
    borderRadius: 30, 
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
  },
  trophyImage: {
    width: 40, 
    height: 40,
    resizeMode: 'contain', 
  },
  completedChallenge: {
    backgroundColor: '#32CD32', 
  },
  completeButton: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: '#FFA500',
    justifyContent: 'center',
    alignItems: 'center',
  },
  completeButtonText: {
    color: '#fff',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  challengeInfo: {
    marginLeft: 10, 
    flex: 1,
  },
  challengeText: {
    fontSize: 16, 
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 3,
    justifyContent: 'center',

  },
  challengeStatus: {
    fontSize: 12, 
    color: '#555',
  },
  progressBar: {
    width: '100%',
    height: 8, 
    borderRadius: 4, 
    backgroundColor: '#FFEB3B', 
  },
});

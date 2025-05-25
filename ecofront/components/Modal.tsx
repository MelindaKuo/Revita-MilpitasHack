import React, { useEffect, useRef, useState } from 'react';
import { Modal, View, Text, Button, StyleSheet, Image, Animated } from 'react-native';

interface Props {
  isVisible: boolean;
  onClose: () => void;
}

export default function PictureModal({ isVisible, onClose }: Props) {
  const scaleValue = useRef(new Animated.Value(0)).current;
  const [messages, setMessages] = useState<string[]>([]);
  const [funFacts, setFunFacts] = useState<string[]>([]);

  useEffect(() => {
    if (isVisible) {
      const newMessages = [
        '+ 1 Compost',
        '+ 1 Animal',
        '+ 2 Rank',
        '+ 1 Complete Tasks',
      ];
      setMessages(newMessages);

      const newFunFacts = [
        'Composting reduces landfill waste.'
      ];
      setFunFacts(newFunFacts);

      Animated.spring(scaleValue, {
        toValue: 1,
        friction: 3,
        tension: 40,
        useNativeDriver: true,
      }).start();

      const timer = setTimeout(() => {
        onClose();
      }, 10000); 

      return () => clearTimeout(timer); 
    } else {
      Animated.timing(scaleValue, {
        toValue: 0,
        duration: 200,
        useNativeDriver: true,
      }).start();
    }
  }, [isVisible, scaleValue, onClose]);

  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={isVisible}
      onRequestClose={onClose}
    >
      <View style={styles.modalContainer}>
        <Animated.View style={[styles.modalContent, { transform: [{ scale: scaleValue }] }]}>
          <Text style={styles.modalTitle}>Compost</Text>
          <Image
            source={require('@/assets/images/recycle.png')}
            style={styles.trashCanImage}
            resizeMode="contain"
          />
          <View style={styles.funFactsContainer}>
            {funFacts.map((fact, index) => (
              <Text key={index} style={styles.funFact}>
                {fact}
              </Text>
            ))}
          </View>
          <Text style={styles.modalPoints}>+10 Points!</Text>

          <View style={styles.messagesContainer}>
            {messages.map((message, index) => (
              <Text key={index} style={styles.message}>
                {message}
              </Text>
            ))}
          </View>

          <Button title="Close" onPress={onClose} color="#FF6347" />
        </Animated.View>
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalContent: {
    width: 320,
    padding: 20,
    backgroundColor: '#fff',
    borderRadius: 15,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
  },
  modalTitle: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#49936E',
  },
  trashCanImage: {
    width: 150,
    height: 150,
    marginBottom: 10,
  },
  modalPoints: {
    fontSize: 32,
    color: '#28A745',
    marginBottom: 10,
  },
  modalMessage: {
    fontSize: 18,
    textAlign: 'center',
    marginBottom: 10,
    paddingHorizontal: 10,
    color: '#333',
  },
  messagesContainer: {
    marginVertical: 10,
    alignItems: 'center', 
    width: '100%',
  },
  message: {
    fontSize: 16,
    color: '#A8DAB5',
    textAlign: 'center', 
    marginBottom: 5,
  },
  funFactsContainer: {
    marginVertical: 10,
    alignItems: 'center',
    width: '100%',
  },
  funFact: {
    fontSize: 16,
    color: '#68AC8A', 
    textAlign: 'center', 
    marginBottom: 5,
  },
});

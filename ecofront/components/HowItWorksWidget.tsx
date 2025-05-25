import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Dimensions } from 'react-native';

const HowItWorksWidget: React.FC = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>How This Game Works</Text>
      <Text style={styles.description}>
        Welcome to our recycling challenge game! Here’s how it works:
      </Text>
      <Text style={styles.bulletPoint}>• Take pictures of trash items.</Text>
      <Text style={styles.bulletPoint}>
        • Each piece of trash you take a picture of will reward you 5 points!
      </Text>
      {/* <Text style={styles.bulletPoint}>   - Plastic: 10 points</Text>
      <Text style={styles.bulletPoint}>   - Glass: 15 points</Text>
      <Text style={styles.bulletPoint}>   - Paper: 5 points</Text>
      <Text style={styles.bulletPoint}>   - Electronics: 20 points</Text> */}
      <Text style={styles.bulletPoint}>
        • Complete daily challenges to earn bonus points.
      </Text>
      <Text style={styles.bulletPoint}>
        • Track your progress and compete with friends.
      </Text>
      <Text style={styles.bulletPoint}>
        • Participate in community cleanup events.
      </Text>
      <Text style={styles.bulletPoint}>
        • Exchange points for rewards like discounts and eco-friendly products.
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#f9f9f9',
    borderRadius: 10,
    padding: 15,
    marginTop: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 3,
    width: '85%',  // Set width to 85% of the screen width
    alignSelf: 'center',  // Center the widget horizontally
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 10,
  },
  description: {
    fontSize: 14,
    color: '#555',
    marginBottom: 5,
  },
  bulletPoint: {
    fontSize: 14,
    color: '#555',
    marginVertical: 2,
  },
});

export default HowItWorksWidget;

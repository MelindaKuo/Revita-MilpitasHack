import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

const LevelWidget = () => {
  return (
    <View style={styles.levelWidget}>
      <View style={styles.verticalTextContainer}>
        <Text style={styles.verticalText}>L</Text>
        <Text style={styles.verticalText}>E</Text>
        <Text style={styles.verticalText}>V</Text>
        <Text style={styles.verticalText}>E</Text>
        <Text style={styles.verticalText}>L</Text>
      </View>
      <View style={styles.circleContainer}>
        <View style={styles.greenCircle}>
          <Image
            source={require('../../ecofront/assets/images/random character.png')} 
            style={styles.characterImage}
            resizeMode="contain"
          />
        </View>
      </View>
      <Text style={styles.levelNumber}>1</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  levelWidget: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '100%',
    height: 250, 
    paddingHorizontal: 20,
  },
  verticalTextContainer: {
    justifyContent: 'center',
    alignItems: 'flex-start',
  },
  verticalText: {
    fontSize: 20, 
    fontWeight: 'bold',
  },
  circleContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  greenCircle: {
    width: '75%', 
    height: '75%', 
    borderRadius: 100,
    backgroundColor: '#88E1B5',
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 5,
    shadowColor: '#6DB6EC',
    shadowOffset: { width: 0, height: 5 },
    shadowOpacity: 0.4,
    shadowRadius: 5,
  },
  characterImage: {
    width: '120%', 
    height: '120%',
  },
  levelNumber: {
    fontSize: 40, 
    fontWeight: 'bold',
    alignSelf: 'center',
  },
});

export default LevelWidget;

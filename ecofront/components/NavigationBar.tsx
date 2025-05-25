
import React from 'react';
import { StyleSheet, View, TouchableOpacity, Animated } from 'react-native';
import { FontAwesome, MaterialIcons, Entypo } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { RootStackParamList } from '../app/(tabs)/types';
import { StackNavigationProp } from '@react-navigation/stack';

type NavigationProps = StackNavigationProp<RootStackParamList>;

const NavigationBar = () => {
  const navigation = useNavigation<NavigationProps>();
  const animatedScale = new Animated.Value(1);

  const handlePressIn = () => {
    Animated.spring(animatedScale, {
      toValue: 1.1,
      friction: 3,
      useNativeDriver: true,
    }).start();
  };

  const handlePressOut = () => {
    Animated.spring(animatedScale, {
      toValue: 1,
      friction: 3,
      useNativeDriver: true,
    }).start();
  };

  return (
    <View style={styles.navBar}>
      <TouchableOpacity
        onPress={() => navigation.navigate('StatsScreen')}
        onPressIn={handlePressIn}
        onPressOut={handlePressOut}
      >
        <Animated.View style={[styles.navButton, { transform: [{ scale: animatedScale }] }]}>
          <FontAwesome name="bar-chart" size={25} color="#fff" />
        </Animated.View>
      </TouchableOpacity>

      <TouchableOpacity
        onPress={() => navigation.navigate('LeaderboardScreen')}
        onPressIn={handlePressIn}
        onPressOut={handlePressOut}
      >
        <Animated.View style={[styles.navButton, { transform: [{ scale: animatedScale }] }]}>
          <MaterialIcons name="leaderboard" size={25} color="#fff" />
        </Animated.View>
      </TouchableOpacity>

      <TouchableOpacity
        onPress={() => navigation.navigate('CameraScreen')}
        onPressIn={handlePressIn}
        onPressOut={handlePressOut}
      >
        <Animated.View style={[styles.navButton, { transform: [{ scale: animatedScale }] }]}>
          <Entypo name="camera" size={25} color="#fff" />
        </Animated.View>
      </TouchableOpacity>

      <TouchableOpacity
        onPress={() => navigation.navigate('Home')}
        onPressIn={handlePressIn}
        onPressOut={handlePressOut}
      >
        <Animated.View style={[styles.navButton, { transform: [{ scale: animatedScale }] }]}>
          <FontAwesome name="trash" size={25} color="#fff" />
        </Animated.View>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  navBar: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    position: 'absolute',
    bottom: 30,
    width: '90%',
    height: 70,
    backgroundColor: 'rgba(255, 255, 255, 0.9)',
    borderRadius: 35,
    padding: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 5,
    alignSelf: 'center',
    borderWidth: 1,
    borderColor: 'rgba(255, 255, 255, 0.5)',
  },
  navButton: {
    backgroundColor: '#88E1B5',
    width: 50,
    height: 50,
    borderRadius: 25,
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 5,
    shadowColor: '#6DB6EC',
    shadowOffset: { width: 0, height: 5 },
    shadowOpacity: 0.4,
    shadowRadius: 5,
  },
});

export default NavigationBar;

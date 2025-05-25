import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView, Image, TouchableOpacity } from 'react-native';
import NavigationBar from '@/components/NavigationBar';
import { MaterialIcons } from '@expo/vector-icons'; 
import { GestureHandlerRootView, Swipeable } from 'react-native-gesture-handler';

const LeaderboardScreen: React.FC = () => {
  //const [selectedTab, setSelectedTab] = useState<'global' | 'recyclable' | 'friends'>('global');

  // Define the current user
  const currentUser = { rank: 5, username: 'YourName', points: 1025, avatar: require('../../assets/images/random character.png'), change: -1 };

  const topUsers = [
    { rank: 2, username: 'Jackson', points: 1847, avatar: require('../../assets/images/random character.png') },
    { rank: 1, username: 'Aidan', points: 2430, avatar: require('../../assets/images/random character.png') },
    { rank: 3, username: 'Emma ', points: 1674, avatar: require('../../assets/images/random character.png') },
  ];

  const otherUsers = [
    { rank: 4, username: 'Sebastian', points: 1124, avatar: require('../../assets/images/random character.png'), change: -1 },
    { rank: 5, username: 'Jason', points: 875, avatar: require('../../assets/images/random character.png'), change: +2 },
    { rank: 6, username: 'Natalie', points: 774, avatar: require('../../assets/images/random character.png'), change: 0 },
    { rank: 7, username: 'Evan', points: 723, avatar: require('../../assets/images/random character.png'), change: -2 },
    { rank: 8, username: 'Hannah', points: 559, avatar: require('../../assets/images/random character.png'), change: +1 },
  ];

  const addFriend = (username: string) => {
    console.log(`${username} added as a friend!`);
  };

  return (
    <GestureHandlerRootView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Leaderboard</Text>
      </View>

      <View style={styles.userStatsContainer}>
        <Image source={currentUser.avatar} style={styles.avatar} />
        <View style={styles.currentUserInfo}>
          <Text style={styles.currentUserUsername}>{currentUser.username}</Text>
          <Text style={styles.currentUserPoints}>{currentUser.points} pts</Text>
        </View>
        {currentUser.change > 0 ? (
          <View style={styles.changeContainer}>
            <MaterialIcons name="arrow-upward" size={20} color="green" />
            <Text style={styles.changeText}>+{currentUser.change}</Text>
          </View>
        ) : currentUser.change < 0 ? (
          <View style={styles.changeContainer}>
            <MaterialIcons name="arrow-downward" size={20} color="red" />
            <Text style={styles.changeText}>{currentUser.change}</Text>
          </View>
        ) : (
          <View style={styles.changeContainer}>
            <MaterialIcons name="remove" size={20} color="gray" />
            <Text style={styles.changeText}>0</Text>
          </View>
        )}
      </View>



      <View style={styles.topSection}>
        {topUsers.map((user, index) => (
          <View key={user.rank} style={[styles.topUserContainer, index === 1 ? styles.firstPlace : index === 0 ? styles.secondPlace : styles.thirdPlace]}>
            <Image source={user.avatar} style={styles.topAvatar} />
            <Text style={styles.topUsername}>{user.username}</Text>
            <Text style={styles.topPoints}>{user.points} pts</Text>
          </View>
        ))}
      </View>

      <ScrollView style={styles.scrollContainer} showsVerticalScrollIndicator={false}>
        {otherUsers.map((user) => (
          <Swipeable
            key={user.rank}
            renderRightActions={() => (
              <TouchableOpacity
                style={styles.addFriendButton}
                onPress={() => addFriend(user.username)}
              >
                <MaterialIcons name="person-add" size={30} color="#67ABDD" />
              </TouchableOpacity>
            )}
          >
            <View style={styles.userStatsContainer}>
              <Image source={user.avatar} style={styles.avatar} />
              <View style={{ flex: 1 }}>
                <Text style={styles.username}>{user.username}</Text>
                <Text style={styles.points}>{user.points} pts</Text>
              </View>
              {user.change > 0 ? (
                <View style={styles.changeContainer}>
                  <MaterialIcons name="arrow-upward" size={20} color="green" />
                  <Text style={styles.changeText}>+{user.change}</Text>
                </View>
              ) : user.change < 0 ? (
                <View style={styles.changeContainer}>
                  <MaterialIcons name="arrow-downward" size={20} color="red" />
                  <Text style={styles.changeText}>{user.change}</Text>
                </View>
              ) : (
                <View style={styles.changeContainer}>
                  <MaterialIcons name="remove" size={20} color="gray" />
                  <Text style={styles.changeText}>0</Text>
                </View>
              )}
            </View>
          </Swipeable>
        ))}
      </ScrollView>
      <NavigationBar />
    </GestureHandlerRootView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#E4F3FB',
    padding: 20,
  },
  header: {
    marginTop: 40,
    alignItems: 'center',
    marginBottom: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#67ABDD',
  },
  userStatsContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 15,
    backgroundColor: '#FFF',
    borderRadius: 10,
    marginBottom: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 1,
  },
  avatar: {
    width: 40,
    height: 40,
    borderRadius: 20,
    marginRight: 15,
  },
  currentUserInfo: {
    flex: 1,
  },
  currentUserUsername: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#67ABDD',
  },
  currentUserPoints: {
    fontSize: 14,
    color: '#67ABDD',
  },
  tabContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingVertical: 10,
    backgroundColor: '#B3E0F7',
    borderRadius: 12,
  },
  tabButton: {
    paddingVertical: 10,
    paddingHorizontal: 15,
  },
  activeTab: {
    borderBottomWidth: 3,
    borderBottomColor: '#67ABDD',
  },
  tabText: {
    color: '#67ABDD',
    fontWeight: 'bold',
  },
  topSection: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 20,
    marginBottom: 20,
  },
  topUserContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
    marginHorizontal: 5,
  },
  firstPlace: {
    height: 150,
    backgroundColor: '#67ABDD', 
    borderRadius: 10,
    padding: 15,
  },
  secondPlace: {
    height: 130,
    backgroundColor: '#A0D5F3', 
    borderRadius: 10,
    padding: 15,
  },
  thirdPlace: {
    height: 130,
    backgroundColor: '#87C6ED',
    borderRadius: 10,
    padding: 15,
  },
  topAvatar: {
    width: 60,
    height: 60,
    borderRadius: 30,
    marginBottom: 5,
  },
  topUsername: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#FFF',
  },
  topPoints: {
    fontSize: 14,
    color: '#FFF',
  },
  scrollContainer: {
    flex: 1,
  },
  addFriendButton: {
    backgroundColor: '#E4F3FB', 
    justifyContent: 'center',
    alignItems: 'center',
    height: '100%', 
    width: 50, 
    borderRadius: 10,
    marginLeft: 10,
  },
  addFriendText: {
    color: '#FFF',
    fontWeight: 'bold',
  },
  username: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  points: {
    fontSize: 14,
    color: '#67ABDD',
  },
  changeContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  changeText: {
    fontSize: 14,
    marginLeft: 5,
  },
});

export default LeaderboardScreen;


import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import CollectionItem from './CollectionItem'; 
import { FontAwesome, MaterialIcons, Entypo } from '@expo/vector-icons';

const RecentCollectionsWidget: React.FC = () => {
  const collectionsData = [
    { icon: <FontAwesome name="recycle" size={24} color="#4CAF50" />, description: "Picked up plastic bottles", points: "10 points" },
    { icon: <Entypo name="trash" size={24} color="#F44336" />, description: "Sorted compost waste", points: "5 points" },
    { icon: <Entypo name="trash" size={24} color="#FF9800" />, description: "Collected old newspapers", points: "8 points" },
  ];

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Recent Collections</Text>
      {collectionsData.map((item, index) => (
        <CollectionItem 
          key={index}
          icon={item.icon}
          description={item.description}
          points={item.points}
        />
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: 340, 
    height: 250, 
    padding: 15,
    backgroundColor: '#FFFFFF',
    borderRadius: 20, 
    shadowColor: '#6DB6EC',
    shadowOffset: { width: 0, height: 5 },
    shadowOpacity: 0.4,
    shadowRadius: 5,
    justifyContent: 'flex-start',
  },
  header: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10, 
    textAlign: 'center',
    marginTop: 20, 
  },
});

export default RecentCollectionsWidget;

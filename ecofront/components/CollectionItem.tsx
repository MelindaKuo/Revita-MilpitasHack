
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

interface CollectionItemProps {
  icon: React.ReactNode; 
  description: string;   
  points: string;      
}

const CollectionItem: React.FC<CollectionItemProps> = ({ icon, description, points }) => {
  return (
    <View style={styles.itemContainer}>
      <View style={styles.iconContainer}>
        {icon}
      </View>
      <Text style={styles.description}>{description}</Text>
      <Text style={styles.points}>{points}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  itemContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: 10,
  },
  iconContainer: {
    width: 40,
    alignItems: 'center',
  },
  description: {
    flex: 1,
    paddingHorizontal: 10,
    fontSize: 16,
  },
  points: {
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default CollectionItem;

// UserStanding.tsx
import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

interface UserStandingProps {
    rank: number;
    username: string;
    points: number;
    avatar: any;
    isTopUser?: boolean; 
}

const UserStanding: React.FC<UserStandingProps> = ({ rank, username, points, avatar, isTopUser }) => {
    return (
        <View style={[styles.userContainer, isTopUser ? styles.topUser : styles.otherUser]}>
            {isTopUser && rank === 1 && (
                <Image source={{ uri: 'https://example.com/crown.png' }} style={styles.crown} />
            )}
            <Image source={{ uri: avatar }} style={styles.avatar} />
            <View style={styles.userInfo}>
                <Text style={styles.rank}>#{rank}</Text>
                <Text style={styles.username}>{username}</Text>
                <Text style={styles.points}>{points} pts</Text>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    userContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        padding: 5,
        borderRadius: 50, 
        marginBottom: 10,
        shadowColor: '#000', 
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.1,
        shadowRadius: 2,
        backgroundColor: '#FFFFFF', 
    },
    topUser: {
        backgroundColor: '#F0F8FF', 
    },
    otherUser: {
        backgroundColor: '#FFFFFF', 
    },
    crown: {
        width: 25,
        height: 25,
        position: 'absolute',
        top: -10,
        left: 10,
    },
    avatar: {
        width: 40,
        height: 40,
        borderRadius: 25, 
        borderWidth: 2,
        borderColor: '#B0C4DE',
        marginRight: 10,
    },
    
    userInfo: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center', 
        justifyContent: 'flex-start', 
    },
    rank: {
        fontSize: 14,
        fontWeight: 'bold',
        marginRight: 10, 
        color: '#333',
    },
    username: {
        fontSize: 16,
        fontWeight: 'bold',
        marginRight: 10, 
        color: '#333', 
    },
    points: {
        fontSize: 14,
        color: '#555',
        position: 'absolute', 
        right: 10,
    },
});

export default UserStanding;

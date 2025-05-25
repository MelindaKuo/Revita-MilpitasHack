import React from 'react';
import { View, StyleSheet, Image, Text, TouchableOpacity } from 'react-native';
import NavigationBar from '../../components/NavigationBar';
import CircularProgress from '../../components/CircleProgressBar';
import ParallaxScrollView from '../../components/ParallaxScrollView';
import FrequencyChart from '@/components/FrequencyChart';
import {Ionicons} from '@expo/vector-icons'
import { RootStackParamList } from '../(tabs)/types'; 
import { StackNavigationProp } from '@react-navigation/stack';
import { RouteProp, useNavigation } from '@react-navigation/native';

const score =0;

type StatsScreenNavigationProp = StackNavigationProp<RootStackParamList, 'StatsScreen'>;
type StatsScreenProps = {
    navigation: StatsScreenNavigationProp;
    route: RouteProp<RootStackParamList, 'StatsScreen'>;
};

const StatsScreen: React.FC<StatsScreenProps> = () => {
    const navigation = useNavigation<StatsScreenNavigationProp>();

    const handleFriendsPress = () => {
        navigation.navigate('FriendsScreen'); 
    };
    return (
        <View style={styles.container}>
            <ParallaxScrollView headerBackgroundColor={{ light: '#FFFFFF', dark: '#1D3D47' }}>
                <View style={styles.backgroundContainer}>
                    <TouchableOpacity style={styles.friendsButton} onPress={handleFriendsPress}>
                        <Ionicons name="people" size={24} color="#FFFFFF" />
                    </TouchableOpacity>
                    <View style={styles.profileContainer}>
                        <View style={styles.progressBar}>
                            <CircularProgress 
                                size={300}
                                progress={75}
                                strokeWidth={20}
                                strokeColor="#3498db" 
                            />
                            <Image
                                source={require('../../assets/images/random character.png')} 
                                style={styles.avatar}
                            />
                        </View>
                    </View>
                    <View style={styles.levelContainer}>
                        <Text style={styles.levelText}>Level 1</Text>
                        
                        <Text style={styles.pointsText}>Points: {score} / 100</Text>
                    </View>

                    <View style={styles.statsContainer}>
                        {['Rank', 'Trash', 'Days'].map((label, index) => (
                            <TouchableOpacity key={index} style={styles.statCircle}>
                                <Text style={styles.statValue}>{0}</Text>
                                <Text style={styles.statLabel}>{label}</Text>
                            </TouchableOpacity>
                        ))}
                    </View>
                    {/* <TouchableOpacity style={styles.customizeAvatarButton} onPress={handleCustomizeAvatarPress}>
                        <Text style={styles.customizeAvatarText}>Customize Avatar</Text>
                    </TouchableOpacity> */}
                </View>
                

                <View style={styles.achievementsContainer}>
                    {/* <Text style={styles.badgesTitle}>Badges</Text>
                    <View style={styles.badgesContainer}>
                        {['🐾', '🏆', '🌱', '🌊'].map((icon, index) => (
                            <TouchableOpacity key={index} style={styles.badge}>
                                <Text style={styles.badgeText}>{icon}</Text>
                            </TouchableOpacity>
                        ))}
                    </View> */}
                    {/* <Text style={styles.badgesTitle}>Trash Collections</Text>

                    <View style={styles.trashSortedContainer}>
                        <View style = {styles.trashStatCircle}>
                            <Image source={require('../../assets/images/compost.png')} style={styles.trashImage} />
                                <View style={styles.badgeCountCircle}>
                                    <Text style={styles.badgeCount}>45</Text>
                                </View>
                        </View>
                        <View style = {styles.trashStatCircle}>
                            <Image source={require('../../assets/images/recycle.png')} style={styles.trashImage} />
                                <View style={styles.badgeCountCircle}>
                                    <Text style={styles.badgeCount}>25</Text>
                                </View>
                        </View>
                        <View style = {styles.trashStatCircle}>
                            <Image source={require('../../assets/images/trashStats.png')} style={styles.trashImage} />
                                <View style={styles.badgeCountCircle}>
                                    <Text style={styles.badgeCount}>23</Text>
                                </View>
                        </View>
                        
                    </View> */}
                    {/* <Text style={styles.badgesTitle}>Animals Saved</Text> */}

                    

                    




                    <TouchableOpacity style={styles.shareButton}>
                        <Text style={styles.shareButtonText}>Share Achievements</Text>
                    </TouchableOpacity>

                    <TouchableOpacity
                      style={styles.invisibleButton}
                      onPress={() => { /* Add your button handler here */ }}
                    >
                      <Text style={styles.invisibleButton}>Invisible Button</Text>
                    </TouchableOpacity>

                </View>
            </ParallaxScrollView>
            <NavigationBar />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#ffffff',
        alignItems: 'center',
    },
    invisibleButton: {
  backgroundColor: '#ffffff', // White background
  opacity: 0, // Fully transparent
  width: '60%',
  height: 40, // Match your button height
  marginTop: 10,
  justifyContent: 'center',
  alignItems: 'center',
},
    backgroundContainer: {
        backgroundColor: '#67ABDD',
        padding: 50,
        width: '100%',
        alignItems: 'center',
        elevation: 5,
        bottom: 40,
        borderBottomLeftRadius: 30,
        borderBottomRightRadius: 30,
    },

    profileContainer: {
        alignItems: 'center',
        marginBottom: 20,
    },
    progressBar: {
        position: 'relative',
        justifyContent: 'center',
        alignItems: 'center',
        paddingTop: 80,
    },
    avatar: {
        width: 200,
        height: 250,
        position: 'absolute',
        bottom: 20,
    },
    levelContainer: {
        alignItems: 'center',
        marginTop: 10,
    },
    levelText: {
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 10,
        color: '#ffffff',
    },
    pointsText: {
        fontSize: 18,
        color: '#ffffff',
    },
    statsContainer: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        width: '100%',
        marginTop: 20,
    },
    statCircle: {
        backgroundColor: '#ffffff',
        borderRadius: 100,
        width: 60,
        height: 60,
        justifyContent: 'center',
        alignItems: 'center',
        // shadowColor: '#000',
        // shadowOffset: { width: 0, height: 2 },
        // shadowOpacity: 0.2,
        // shadowRadius: 3,
    },
    statValue: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#67ABDD',
    },
    statLabel: {
        fontSize: 10,
        color: '#333',
        textAlign: 'center',
    },
    addstatLabel:{
        top: 10,
        fontSize: 9,
    },
    achievementsContainer: {
        padding: 20,

        width: '100%',
        alignItems: 'center',
        top: -50,
    },
    badgesContainer: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        width: '100%',
        marginBottom: 10,
        paddingTop: 20,
    },
    badge: {
        backgroundColor: '#ffffff',
        borderRadius: 100,
        width: 60,
        height: 60,
        justifyContent: 'center',
        alignItems: 'center',
        position: 'relative',
        marginHorizontal: 5,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.2,
        shadowRadius: 3,
        elevation: 5,
        borderWidth: 3,
        borderColor: '#FFD700',
        padding: 3,
    },
    badgeText: {
        fontSize: 24,
        color: '#67ABDD',
    },
    badgeCountCircle: {
        position: 'absolute',
        bottom: -15,
        left: '50%',
        transform: [{ translateX: -50 }],
        backgroundColor: '#3498db',
        borderRadius: 100,
        width: 30,
        height: 30,
        justifyContent: 'center',
        alignItems: 'center',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.2,
        shadowRadius: 3,
        elevation: 5,
    },
    badgeCount: {
        fontSize: 14,
        fontWeight: 'bold',
        color: '#ffffff',
    },
    badgesTitle: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#67ABDD',
        marginBottom: 10,
        top: 10,
    },
    trashSortedContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '100%',
        marginTop: 10,
        paddingTop: 15,
    },
    trashStatCircle: {
        backgroundColor: '#ffffff',
        borderRadius: 100,
        width: 80,
        height: 80,
        justifyContent: 'center',
        alignItems: 'center',
        // shadowColor: '#67ABDD',
        // shadowOffset: { width: 8, height: 8 },
        // shadowOpacity: 0.2,
        // shadowRadius: 3,
        // elevation: 5,
        borderColor: '#67ABDD',
        borderWidth: 5,
        marginHorizontal: 10,
    },
    trashImage: {
        width: 40,
        height: 40,
    },
    animalsSavedContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '100%',
        marginTop: 10,
        paddingTop: 15,
    },
    animalStatCircle: {
        backgroundColor: '#ffffff',
        borderRadius: 100,
        width: 80,
        height: 80,
        justifyContent: 'center',
        alignItems: 'center',
        shadowColor: '#67ABDD',
        shadowOffset: { width: 8, height: 8 },
        shadowOpacity: 0.2,
        shadowRadius: 3,
        elevation: 5,
        marginHorizontal: 10,
    },
    chartContainer: {
        alignItems: 'center', 
        marginTop: 50, 

    },
    additionalStatsContainer: {
        padding: 20,
        width: '100%',
        alignItems: 'center',
        marginVertical: 20,
    },
    additionalStatsTitle: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#67ABDD',
        marginBottom: 10,
    },
    additionalStatsRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '100%',
        marginVertical: 20, // Space between rows
    },
    shareButton: {
        backgroundColor: '#67ABDD',
        borderRadius: 20,
        paddingVertical: 10,
        paddingHorizontal: 20,
        marginTop: 20,
    },
    shareButtonText: {
        color: '#ffffff',
        fontSize: 16,
        fontWeight: 'bold',
    },
    friendsButton: {
        position: 'absolute',
        top: 100,
        right: 20,
        zIndex: 1,
        backgroundColor: 'rgba(255, 255, 255, 0.3)',
        borderRadius: 20,
        padding: 10,
    },
    timelineContainer: {
        marginVertical: 10,
        padding: 15,
        backgroundColor: '#f9f9f9',
        borderRadius: 10,
        elevation: 2,
    },
    timelineTitle: {
        fontSize: 18,
        fontWeight: 'bold',
    },
    timelineItem: {
        fontSize: 16,
        color: '#555',
    },
    customizeAvatarButton: {
        backgroundColor: '#67ABDD',
        borderRadius: 20,
        paddingVertical: 10,
        paddingHorizontal: 20,
        marginTop: 10,
    },
    customizeAvatarText: {
        color: '#FFFFFF',
        fontWeight: 'bold',
        fontSize: 16,
    },
});

export default StatsScreen;
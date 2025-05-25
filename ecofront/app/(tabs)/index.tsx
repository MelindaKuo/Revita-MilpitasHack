import React, { useState } from 'react';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedView } from '@/components/ThemedView';
import { Widget } from '@/components/Widget';
//import LevelWidget from '@/components/LevelWidget'; 
import RecentCollectionsWidget from '@/components/RecentCollectionsWidget';
import NavigationBar from '@/components/NavigationBar'; 
import CustomButton from '@/components/CustomButton';
// import { useGlobalContext } from '@/context/GlobalProvider';
// import { signOut, addCurrentUserScore, getAllScores, getCurrentUserScore } from '@/lib/appwrite';
import Challenge from '@/components/Challenge';
import HowItWorksWidget from '@/components/HowItWorksWidget';
import axios from 'axios';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

type HomeScreenProps = {
  navigation: any;
};

const queryClient = new QueryClient();

const HomeScreen: React.FC<HomeScreenProps> = ({ navigation }) => {
  const [isSubmitting, setSubmitting] = useState(false);
  // const { setUser, setIsLogged } = useGlobalContext();
  const [challenges, setChallenges] = useState([
    { id: 1, title: 'Collect 10 plastic bottles', completed: false },
    { id: 2, title: 'Clean a local park', completed: false },
    { id: 3, title: 'Recycle 5 electronic devices', completed: false },
    { id: 4, title: 'Organize a community cleanup', completed: false },
    { id: 5, title: 'Use a reusable bag for shopping', completed: false },
  ]);

  const logout = async () => {
    setSubmitting(true);
    //await signOut();
    //setUser(null);
    //setIsLogged(false);
    navigation.navigate('Welcome');
  };

  const handleChallengeComplete = (id: number) => {
    setChallenges(challenges.map(challenge => 
      challenge.id === id ? { ...challenge, completed: true } : challenge
    ));
  };

  return (
    <View style={styles.screenContainer}>

      <ParallaxScrollView headerBackgroundColor={{ light: '#FFFFFF', dark: '#1D3D47' }}>
        <ThemedView style={styles.titleContainer}>
          <View style={styles.widgetContainer}>
            {/* Widget Component */}
            <Widget source={require('@/assets/images/recyclebackgroundtemp.jpg')} width={340} height={250} text={''} />
            
            {/* Overlay Text */}
            <View style={styles.overlayTextContainer}>
              <Text style={styles.largeText}>50</Text>
              <Text style={styles.smallText}>Animals Saved Today </Text>
              <Text style = {styles.smallText}>by Revita Users</Text>
            </View>
          </View>

          <HowItWorksWidget />
          
          <View style={styles.holder}>
            <RecentCollectionsWidget />
          </View>

          <View style={styles.challengesContainer}>
            <Text style={styles.challengesTitle}>Daily Challenges</Text>
            {challenges.map((challenge) => (
              <Challenge
                key={challenge.id}
                title={challenge.title}
                onComplete={() => handleChallengeComplete(challenge.id)} 
                completed={false} 
                progress={0.4} 
                points={0} 
              />
            ))}
          </View>
          
          
          
          
          <CustomButton 
            title="Sign Out"
            handlePress={logout}
            containerStyles="mt-28 w-60"
            isLoading={isSubmitting} 
            textStyles={undefined}  
          />
          <TouchableOpacity
  style={styles.invisibleButton}
  onPress={() => { /* Add your button handler here */ }}
>
  <Text style={styles.invisibleButtonText}>Invisible Button</Text>
</TouchableOpacity>
          
        </ThemedView>
      </ParallaxScrollView>
      <NavigationBar />
    </View>
  );
};

const HomeScreenWrapper: React.FC<HomeScreenProps> = (props) => (
  <QueryClientProvider client={queryClient}>
    <HomeScreen {...props} />
  </QueryClientProvider>
);

const styles = StyleSheet.create({
  screenContainer: {
    flex: 1,
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
invisibleButtonText: {
  color: 'transparent',
},
  titleContainer: {
    flexDirection: 'column',
    alignItems: 'center',
    gap: 25,
    marginTop: 50,
  },
  widgetContainer: {
    width: 340,
    height: 250,
    justifyContent: 'center',
    alignItems: 'center',
  },
  overlayTextContainer: {
    position: 'absolute',
    alignItems: 'center',
    top: '20%',
    width: '100%',
  },
  largeText: {
    fontSize: 90,
    fontWeight: 'bold',
    color: '#fff',
    textAlign: 'center',
  },
  smallText: {
    fontSize: 14,
    color: '#fff',
    marginTop: 5,
    textAlign: 'center',
    fontWeight: 'bold',
  },
  holder: {
    shadowColor: '#6DB6EC',
    shadowOffset: { width: 0, height: 5 },
    shadowOpacity: 0.4,
    shadowRadius: 4,
    gap: 20,
    padding: 15,
  },
  challengesContainer: {
    width: '100%',
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 15,
    marginTop: 20,
  },
  challengesTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#67ABDD',
    marginBottom: 10,
  },
});

export default HomeScreenWrapper;

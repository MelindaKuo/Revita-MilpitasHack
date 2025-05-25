import React from 'react';
import { View,StyleSheet, TouchableOpacity, Button, Text, ScrollView, Dimensions, Alert, Image } from 'react-native';
import { StackNavigationProp } from '@react-navigation/stack';
import { Link } from '@react-navigation/native';


import { useState } from "react";
import { router } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";
import CustomButton from "../../../components/CustomButton";
import FormField from "../../../components/FormField";
import images from "../../../constants/images";
// import { useGlobalContext } from "../../../context/GlobalProvider";
// import { createUser } from "../../../lib/appwrite";

type SignUpScreenProps = {
  navigation: StackNavigationProp<any, any>;
};

const SignUpScreen: React.FC<SignUpScreenProps> = ({ navigation }) => {
  // const { setUser, setIsLogged } = useGlobalContext();

  const [isSubmitting, setSubmitting] = useState(false);
  const [form, setForm] = useState({
    username: "",
    email: "",
    password: "",
  });

  // const submit = async () => {
  //   if (form.username === "" || form.email === "" || form.password === "") {
  //     Alert.alert("Error", "Please fill in all fields");
  //   }

  //   setSubmitting(true);
  //   try {
  //     const result = await createUser(form.email, form.password, form.username);
  //     setUser(result);
  //     setIsLogged(true);

  //     navigation.navigate('Home')
  //   } catch (error) {
  //     Alert.alert("Error", error.message);
  //   } finally {
  //     setSubmitting(false);
  //   }
  // };

  return (
    <SafeAreaView className="bg-white h-full">
      <ScrollView>
        <View
          className="w-full flex justify-center h-full px-4 my-6"
          style={{
            minHeight: Dimensions.get("window").height - 400,
          }}
        >
          <Image
            source={images.RevitaLogo}
            resizeMode="start"
            className="w-[80px] h-[80px]"
          />

          <Text className="text-2xl font-semibold text-black mt-10 font-psemibold">
            Sign Up to Revita
          </Text>

          <FormField
            title="Username"
            value={form.username}
            handleChangeText={(e) => setForm({ ...form, username: e })}
            otherStyles="mt-4"
          />

          <FormField
            title="Email"
            value={form.email}
            handleChangeText={(e) => setForm({ ...form, email: e })}
            otherStyles="mt-1"
            keyboardType="email-address"
          />

          <FormField
            title="Password"
            value={form.password}
            handleChangeText={(e) => setForm({ ...form, password: e })}
            otherStyles="mt-1"
          />

          <TouchableOpacity
            style={styles.shareButton}
            onPress={() => navigation.navigate('Login')}
          >
            <Text style={styles.shareButtonText}>Sign In</Text>
          </TouchableOpacity>

          <View className="flex justify-center pt-5 flex-row gap-2">
            <Text className="text-lg text-black-100 font-pregular">
              Have an account already?
            </Text>
            <Link to={{ screen: 'Login' }}
              style={{ fontSize: 18, color: "#ffa500", fontWeight: 'bold', position: 'relative', top: 4 }}
            >
              SignIn
            </Link>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
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

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
// });

export default SignUpScreen;

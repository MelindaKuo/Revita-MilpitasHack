import React, { useEffect } from 'react';
import { StatusBar } from "expo-status-bar";
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';

import { StackNavigationProp } from '@react-navigation/stack';
import { SafeAreaView } from "react-native-safe-area-context";

import images from "../../../constants/images";
import Loader from "../../../components/Loader";
// import { useGlobalContext } from "../../../context/GlobalProvider";

type WelcomeScreenProps = {
  navigation: StackNavigationProp<any, any>;
};

const WelcomeScreen: React.FC<WelcomeScreenProps> = ({ navigation }) => {
  // const { loading, isLogged } = useGlobalContext();

  // useEffect(() => {
  //   if (!loading && isLogged) {
  //     navigation.navigate('Home');
  //   }
  // });

  return (
    <SafeAreaView style={styles.safeAreaView}>
      {/* <Loader isLoading={loading} /> */}

      <View style={styles.container}>

        <View style={styles.topSection}>
          {/* <Image
            source={images.logo}
            style={styles.logo}
            resizeMode="contain"
          /> */}

          {/* <Image
            source={images.turtle}
            style={styles.turtle}
            resizeMode="contain"
          /> */}
          <Image source = {images.RevitaLogo} style = {styles.turtle} resizeMode = "contain" />

          <View style={styles.titleContainer}>
            <Text style={styles.titleText}>
              Put Trash in its{"\n"}
              <Text style={styles.highlightedText}>Right Place</Text>{" "}
              with <Text style={styles.ecoText}>Revita</Text>
            </Text>
            <Image
              source={images.path}
              style={styles.pathImage}
              resizeMode="contain"
            />
          </View>
        </View>


        <View style={styles.bottomSection}>
          <TouchableOpacity
            style={styles.buttonContainerLogin}
            onPress={() => navigation.navigate('Login')}
          >
            <Text style={styles.buttonTextLogin}>Sign In</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.buttonContainerCreateAccount}
            onPress={() => navigation.navigate('SignUp')}
          >
            <Text style={styles.buttonText}>Sign up</Text>
          </TouchableOpacity>

          <Text style={styles.descriptionText}>
            Recycle your waste, save energy, conserve resources, and preserve nature with Revita.
          </Text>
        </View>
      </View>

      <StatusBar backgroundColor="#fff" style="dark" />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeAreaView: {
    flex: 1,
    backgroundColor: '#fff',
  },
  container: {
    flex: 1,
    justifyContent: 'space-between',
  },
  topSection: {
    flex: 2,
    justifyContent: 'center', 
    alignItems: 'center',
  },
  logo: {
    width: 130,
    height: 84,
    marginBottom: 20,
  },
  turtle: {
    width: '100%',
    height: 300,
    maxWidth: 380,
    marginBottom: 20,
    alignContent: 'center',
    left: 10,
  },
  titleContainer: {
    position: 'relative',
    marginTop: 5,
  },
  titleText: {
    fontSize: 26, 
    fontWeight: '600',
    color: '#333',
    textAlign: 'center',
  },
  highlightedText: {
    color: '#FF6347', 
    fontSize: 28,
    fontWeight: '700', 
  },
  ecoText: {
    color: '#32CD32', 
    fontSize: 28,
    fontWeight: '700',
  },
  pathImage: {
    width: 136,
    height: 15,
    position: 'absolute',
    bottom: -10,
    right: -10,
  },
  bottomSection: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
    paddingBottom: 40, 
  },
  buttonContainerLogin: {
    backgroundColor: 'transparent',
    borderColor: '#000',         
    borderWidth: 2,                 
    borderRadius: 20,              
    width: 280,
    height: 60,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 15,
  },
  buttonTextLogin: {
    fontSize: 18,
    fontWeight: '600',
    color: '#000',
    textAlign: 'center',
  },
  buttonContainerCreateAccount: {
    backgroundColor: '#4D9FEC',
    borderRadius: 20,
    width: 280,
    height: 60,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 5 },
    shadowOpacity: 0.15,
    shadowRadius: 10,
    elevation: 5,
  },
  buttonText: {
    fontSize: 18,
    fontWeight: '600',
    color: '#fff',
    textAlign: 'center',
  },
  descriptionText: {
    fontSize: 14,
    color: '#555', 
    textAlign: 'center',
    marginVertical: 10,
    paddingHorizontal: 20,
  },
});

export default WelcomeScreen;

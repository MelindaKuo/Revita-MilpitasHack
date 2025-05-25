import React, { useState } from 'react';
import {
  View,
  StyleSheet,
  Text,
  ScrollView,
  Dimensions,
  Alert,
  Image,
} from 'react-native';
import { StackNavigationProp } from '@react-navigation/stack';
import { Link } from '@react-navigation/native';
import { SafeAreaView } from 'react-native-safe-area-context';
import CustomButton from '../../../components/CustomButton';
import FormField from '../../../components/FormField';
import images from '../../../constants/images';

type LoginScreenProps = {
  navigation: StackNavigationProp<any, any>;
};

const LoginScreen: React.FC<LoginScreenProps> = ({ navigation }) => {
  const [isSubmitting, setSubmitting] = useState(false);
  const [form, setForm] = useState({
    email: '',
    password: '',
  });

  const submit = () => {
    if (form.email === '' || form.password === '') {
      Alert.alert('Error', 'Please fill in all fields');
      return;
    }

    setSubmitting(true);

    setTimeout(() => {
      setSubmitting(false);
      Alert.alert('Success', `Logged in with email: ${form.email}`);
      navigation.navigate('Home');
    }, 1000);
  };

  return (
    <SafeAreaView className="bg-white h-full">
      <ScrollView>
        <View
          className="w-full flex justify-center h-full px-4 my-6"
          style={{
            minHeight: Dimensions.get('window').height - 400,
          }}
        >
          <Image
            source={images.RevitaLogo}
            resizeMode="contain"
            className="w-[80px] h-[80px]"
          />

          <Text className="text-2xl font-semibold text-black mt-10 font-psemibold">
            Log in to Revita
          </Text>

          <FormField
            title="Email"
            value={form.email}
            handleChangeText={(e) => setForm({ ...form, email: e })}
            otherStyles="mt-7"
            keyboardType="email-address"
          />

          <FormField
            title="Password"
            value={form.password}
            handleChangeText={(e) => setForm({ ...form, password: e })}
            otherStyles="mt-7"
          />

          <CustomButton
            title="Sign In"
            handlePress={submit}
            containerStyles={{ paddingHorizontal: 20, marginTop: 100 }}
            isLoading={isSubmitting}
          />

          <View className="flex justify-center pt-5 flex-row gap-2">
            <Text className="text-lg text-black font-pregular">
              Don't have an account?
            </Text>

            <Link
              to={{ screen: 'SignUp' }}
              style={{
                fontSize: 18,
                color: '#ffa500',
                fontWeight: 'bold',
                position: 'relative',
                top: 4,
              }}
            >
              <Text>Sign Up</Text>
            </Link>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default LoginScreen;

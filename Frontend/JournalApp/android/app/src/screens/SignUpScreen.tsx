// screens/SignUpScreen.tsx
import React, { useState } from 'react';
import { View, Text, TextInput, Button } from 'react-native';
import axios from 'axios';
import { useDispatch } from 'react-redux';
import { setUser } from '../slices/userSlice';

const SignUpScreen = ({ navigation }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();

  const handleSignUp = async () => {
    try {
      const response = await axios.post('http://localhost:3000/register', { username, password });
      dispatch(setUser({ user: response.data, token: response.data.token }));
      navigation.navigate('Home');
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <View>
      <Text>Sign Up</Text>
      <TextInput placeholder="Username" onChangeText={setUsername} value={username} />
      <TextInput placeholder="Password" onChangeText={setPassword} value={password} secureTextEntry />
      <Button title="Sign Up" onPress={handleSignUp} />
      <Button title="Login" onPress={() => navigation.navigate('Login')} />
    </View>
  );
};

export default SignUpScreen;

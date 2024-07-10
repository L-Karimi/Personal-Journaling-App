// screens/LoginScreen.tsx
import React, { useState } from 'react';
import { View, Text, TextInput, Button } from 'react-native';
import axios from 'axios';
import { useDispatch } from 'react-redux';
import { setUser } from '../slices/userSlice';

const LoginScreen = ({ navigation }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();

  const handleLogin = async () => {
    try {
      const response = await axios.post('http://localhost:3000/login', { username, password });
      dispatch(setUser({ user: response.data.user, token: response.data.token }));
      navigation.navigate('Home');
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <View>
      <Text>Login</Text>
      <TextInput placeholder="Username" onChangeText={setUsername} value={username} />
      <TextInput placeholder="Password" onChangeText={setPassword} value={
         <><TextInput placeholder="Password" onChangeText={setPassword} value={password} secureTextEntry /><Button title="Login" onPress={handleLogin} /><Button title="Sign Up" onPress={() => navigation.navigate('SignUp')} /></>
       </View>
     );
   }

   export default LoginScreen;

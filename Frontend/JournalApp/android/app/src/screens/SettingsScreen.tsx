import React, { useState } from 'react';
import { View, TextInput, Button } from 'react-native';
import axios from 'axios';
import { useSelector } from 'react-redux';
import { RootState } from '../store';

const SettingsScreen = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const token = useSelector((state: RootState) => state.user.token);

  const handleUpdate = async () => {
    try {
      await axios.put('http://localhost:3000/users', { username, password }, {
        headers: { Authorization: `Bearer ${token}` },
      });
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <View>
      <TextInput placeholder="New Username" onChangeText={setUsername} value={username} />
      <TextInput placeholder="New Password" onChangeText={setPassword} value={password} secureTextEntry />
      <Button title="Update" onPress={handleUpdate} />
    </View>
  );
};

export default SettingsScreen;

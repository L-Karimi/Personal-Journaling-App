// screens/HomeScreen.tsx
import React, { useEffect, useState } from 'react';
import { View, Text, Button, FlatList, TouchableOpacity } from 'react-native';
import axios from 'axios';
import { useSelector, useDispatch } from 'react-redux';
import { clearUser } from '../slices/userSlice';
import { RootState } from '../store';

const HomeScreen = ({ navigation }) => {
  const [entries, setEntries] = useState([]);
  const token = useSelector((state: RootState) => state.user.token);
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchEntries = async () => {
      try {
        const response = await axios.get('http://localhost:3000/entries', {
          headers: { Authorization: `Bearer ${token}` },
        });
        setEntries(response.data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchEntries();
  }, [token]);

  const handleLogout = () => {
    dispatch(clearUser());
    navigation.navigate('Login');
  };

  return (
    <View>
      <Text>Home Screen</Text>
      <Button title="Add New Entry" onPress={() => navigation.navigate('NewEntry')} />
      <FlatList
        data={entries}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <TouchableOpacity onPress={() => navigation.navigate('EntryDetails', { entry: item })}>
            <Text>{item.title}</Text>
          </TouchableOpacity>
        )}
      />
      <Button title="Logout" onPress={handleLogout} />
    </View>
  );
};

export default HomeScreen;

import React from 'react';
import { View, Text, Button } from 'react-native';
import axios from 'axios';
import { useSelector } from 'react-redux';
import { RootState } from '../store';

const EntryDetailsScreen = ({ route, navigation }) => {
  const { entry } = route.params;
  const token = useSelector((state: RootState) => state.user.token);

  const handleDelete = async () => {
    try {
      await axios.delete(`http://localhost:3000/entries/${entry.id}`, {
        headers: { Authorization: `Bearer ${token}` },
      });
      navigation.navigate('Home');
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <View>
      <Text>{entry.title}</Text>
      <Text>{entry.content}</Text>
      <Text>{entry.category}</Text>
      <Text>{entry.date}</Text>
      <Button title="Edit" onPress={() => navigation.navigate('EntryScreen', { entry })} />
      <Button title="Delete" onPress={handleDelete} />
    </View>
  );
};

export default EntryDetailsScreen;

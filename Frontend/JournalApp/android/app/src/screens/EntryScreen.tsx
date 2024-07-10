// screens/EntryScreen.tsx
import React, { useState } from 'react';
import { View, TextInput, Button } from 'react-native';
import axios from 'axios';
import { useSelector } from 'react-redux';
import { RootState } from '../store';

const EntryScreen = ({ route, navigation }) => {
  const { entry } = route.params || {};
  const [title, setTitle] = useState(entry ? entry.title : '');
  const [content, setContent] = useState(entry ? entry.content : '');
  const [category, setCategory] = useState(entry ? entry.category : '');
  const [date, setDate] = useState(entry ? entry.date : '');
  const token = useSelector((state: RootState) => state.user.token);

  const handleSave = async () => {
    try {
      if (entry) {
        await axios.put(`http://localhost:3000/entries/${entry.id}`, { title, content, category, date }, {
          headers: { Authorization: `Bearer ${token}` },
        });
      } else {
        await axios.post('http://localhost:3000/entries', { title, content, category, date }, {
          headers: { Authorization: `Bearer ${token}` },
        });
      }
      navigation.navigate('Home');
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <View>
      <TextInput placeholder="Title" onChangeText={setTitle} value={title} />
      <TextInput placeholder="Content" onChangeText={setContent} value={content} />
      <TextInput placeholder="Category" onChangeText={setCategory} value={category} />
      <TextInput placeholder="Date" onChangeText={setDate} value={date} />
      <Button title="Save" onPress={handleSave} />
    </View>
  );
};

export default EntryScreen;

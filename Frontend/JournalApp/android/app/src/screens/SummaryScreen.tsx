// screens/SummaryScreen.tsx
import React, { useEffect, useState } from 'react';
import { View, Text, Picker } from 'react-native';
import axios from 'axios';
import { useSelector } from 'react-redux';
import { RootState } from '../store';

const SummaryScreen = () => {
  const [summary, setSummary] = useState({});
  const [period, setPeriod] = useState('daily');
  const token = useSelector((state: RootState) => state.user.token);

  useEffect(() => {
    const fetchSummary = async () => {
      try {
        const response = await axios.get(`http://localhost:3000/summary?period=${period}`, {
          headers: { Authorization: `Bearer ${token}` },
        });
        setSummary(response.data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchSummary();
  }, [period, token]);

  return (
    <View>
      <Picker selectedValue={period} onValueChange={setPeriod}>
        <Picker.Item label="Daily" value="daily" />
        <Picker.Item label="Weekly" value="weekly" />
        <Picker.Item label="Monthly" value="monthly" />
      </Picker>
      <Text>{JSON.stringify(summary, null, 2)}</Text>
    </View>
  );
};

export default SummaryScreen;

import { Picker } from '@react-native-picker/picker';
import React, { useState } from 'react';
import { View, Text, TextInput, Button, FlatList, StyleSheet } from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';

const GoalsScreen = () => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [category, setCategory] = useState('Personal');
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());
  const [showPicker, setShowPicker] = useState(false); // Manage Picker visibility
  const [goals, setGoals] = useState([]);

  const addGoalHandler = () => {
    if (title.trim()) {
      setGoals((currentGoals) => [
        ...currentGoals,
        {
          id: Math.random().toString(),
          title: title,
          description: description,
          category: category,
          startDate: startDate,
          endDate: endDate,
        },
      ]);
      setTitle('');
      setDescription('');
      setCategory('Personal');
      setStartDate(new Date());
      setEndDate(new Date());
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.inputContainer}>
        <View style={styles.titleDescriptionBox}>
          <TextInput
            placeholder="Title"
            style={styles.input}
            onChangeText={(text) => setTitle(text)}
            value={title}
          />
          <TextInput
            placeholder="Description"
            style={styles.input}
            onChangeText={(text) => setDescription(text)}
            value={description}
          />
        </View>
        <Button
          title="Select Category"
          onPress={() => setShowPicker(!showPicker)}
        />
        {showPicker && (
          <Picker
            selectedValue={category}
            onValueChange={(itemValue) => setCategory(itemValue)}
            style={styles.picker}
          >
            <Picker.Item label="Personal" value="Personal" />
            <Picker.Item label="Work" value="Work" />
            <Picker.Item label="Health" value="Health" />
            <Picker.Item label="Education" value="Education" />
          </Picker>
        )}
        <View style={styles.datePickerContainer}>
          <Text style={styles.dateLabel}>Start Date:</Text>
          <DateTimePicker
            value={startDate}
            onChange={(event, selectedDate) => setStartDate(selectedDate)}
            mode="date"
            style={styles.datePicker}
          />
          <Text style={styles.dateLabel}>End Date:</Text>
          <DateTimePicker
            value={endDate}
            onChange={(event, selectedDate) => setEndDate(selectedDate)}
            mode="date"
            style={styles.datePicker}
          />
        </View>
        <Button title="Add Goal" onPress={addGoalHandler} />
      </View>
      <FlatList
        data={goals}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.goalItem}>
            <Text style={styles.goalText}>{item.title}</Text>
            <Text style={styles.goalText}>{item.description}</Text>
            <Text style={styles.goalText}>Category: {item.category}</Text>
            <Text style={styles.goalText}>Start Date: {item.startDate.toDateString()}</Text>
            <Text style={styles.goalText}>End Date: {item.endDate.toDateString()}</Text>
          </View>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
  inputContainer: {
    marginBottom: 20,
  },
  titleDescriptionBox: {
    backgroundColor: 'lightgray',
    padding: 10,
  },
  input: {
    borderBottomWidth: 1,
    padding: 10,
    marginBottom: 10,
  },
  picker: {
    height: 50,
    marginBottom: 10,
  },
  datePickerContainer: {
    alignItems: 'center', // Center content horizontally
  },
  dateLabel: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  datePicker: {
    marginBottom: 10,
  },
  goalItem: {
    marginVertical: 10,
    padding: 10,
    backgroundColor: '#ccc',
    borderColor: 'black',
    borderWidth: 1,
    marginBottom: 10, // Add margin between goal items
  },
  goalText: {
    color: 'black', // Set text color to black
  },
});

export default GoalsScreen;
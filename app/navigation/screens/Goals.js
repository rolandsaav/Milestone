import React, { useState } from 'react';
import {
	Button,
	Keyboard,
	KeyboardAvoidingView, Platform,
	StyleSheet,
	Text, TextInput,
	TouchableWithoutFeedback,
	View, Image, TouchableOpacity, ScrollView
} from 'react-native';
import Ionicons from "react-native-vector-icons/Ionicons"
import Goal from '../../components/Goal';

const image = require("../../assets/logo.png")

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
		<KeyboardAvoidingView
			behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
			style={styles.container}>
			<TouchableWithoutFeedback onPress={Keyboard.dismiss}>
				<ScrollView contentContainerStyle={styles.center}>
					<View style={styles.header}>
						<View style={styles.headerRow}>
							<Text style={styles.title}>Your Goals</Text>
							<View style={styles.headerButton}>
								<Ionicons style={styles.headerButtonIcon} name="add-outline" />
							</View>
						</View>
						<View style={styles.buttonRow}>
							<TouchableOpacity style={styles.rectangle4}>
								<Text style={{}}>Conquering</Text>
							</TouchableOpacity>
							<TouchableOpacity style={styles.rectangle5}>
								<Text style={{ color: "#FFF" }}>Finished</Text>
							</TouchableOpacity>
						</View>
					</View>
					<Goal/>
					<Goal/>
					<Goal/>
					<Goal/>
				</ScrollView>

			</TouchableWithoutFeedback>
		</KeyboardAvoidingView>

		/* <View style={styles.container}>
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
		</View> */
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "#FFF",
	},
	center: {
		alignItems: "center",
		gap: 20,
	},
	header: {
		height: 250,
		width: 360,
		justifyContent: "flex-start"
	},
	headerRow: {
		flexDirection: "row",
		flexWrap: "wrap",
		justifyContent: "space-between",
		height: 170,
		padding: 20
	},
	buttonRow: {
		marginTop: 10,
		height: 50,
		flexDirection: "row",
		justifyContent: "space-around",
	},
	headerButton: {
		flex: 1,
		flexDirection: "column",
		justifyContent: "center",
		alignItems: "flex-end",
		height: 150,
	},
	headerButtonIcon: {
		fontSize: 100,
		height: 100,
		width: 100,
		borderRadius: 50,
		overflow: "hidden",
		backgroundColor: "#17b978",
		color: "#FFF"
	},
	title: {
		fontSize: 60,
		maxWidth: "50%",
		textAlign: "left",
		fontWeight: 400,
		marginTop: 15
	},
	textInput: {
		height: 40,
		borderColor: '#000000',
		borderBottomWidth: 1,
		marginBottom: 36,
	},
	rectangle5: {
		alignItems: "center",
		paddingTop: 8,
		width: 164,
		height: 34,
		flexShrink: 0,
		backgroundColor: '#000',
		borderRadius: 30,
	},
	rectangle4: {
		alignItems: "center",
		paddingTop: 8,
		width: 164,
		height: 34,
		backgroundColor: '#17B978',
		borderRadius: 30,
	},

});

export default GoalsScreen;
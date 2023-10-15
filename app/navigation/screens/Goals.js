import React, { useContext, useEffect, useState } from 'react';
import {
	Keyboard,
	KeyboardAvoidingView, Platform,
	StyleSheet,
	Text, TouchableWithoutFeedback,
	View, TouchableOpacity, ScrollView
} from 'react-native';
import Ionicons from "react-native-vector-icons/Ionicons";
import Goal from '../../components/Goal';
import GoalModal from '../../components/GoalModal';
import { AuthContext } from '../../Providers/Auth';

const GoalsScreen = ({ navigation }) => {
	const [goals, setGoals] = useState([]);
	const [modalVisible, setModalVisible] = useState(false);
	const user = useContext(AuthContext);
	const openCamera = (goalId) => {
		navigation.navigate("Camera", { goalId });
		incrementGoal(goalId);
	}
	const uid = user[0].uid

	const incrementGoal = (goalId) => {
		const nextGoals = goals.map((g) => {
			if (g.id === goalId) {
				g.value = g.value + 1;
				return g;
			}
			else {
				return g;
			}

		})
		setGoals(nextGoals);
	}

	useEffect(() => {
		fetch("https://milestone-401923.ue.r.appspot.com/api/users/" + uid)
			.then(response => response.json())
			.then(data => {
				setGoals(data.goals)
			})
	}, [])


	const addGoal = (id, titleText, description, min, max, value) => {
		console.log("Trying to add goal")
		setGoals([
			...goals,
			{
				id,
				title: titleText,
				description,
				min,
				max,
				value
			}
		])
		console.log(goals);
	}

	return (
		<KeyboardAvoidingView
			behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
			style={styles.container}>
			<TouchableWithoutFeedback onPress={Keyboard.dismiss}>
				<ScrollView style={{ flex: 1 }} contentContainerStyle={styles.center}>
					<GoalModal visible={modalVisible} changeVisibility={setModalVisible} createGoal={addGoal} />
					<View style={styles.header}>
						<View style={styles.headerRow}>
							<Text style={styles.title}>Your Goals</Text>
							<TouchableOpacity style={styles.headerButton} onPress={() => setModalVisible(true)}>
								<Ionicons style={styles.headerButtonIcon} name="add-outline" />
							</TouchableOpacity>
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
					{goals.map((g) => {
						return <Goal key={g.id} title={g.title} description={g.description} min={g.min} max={g.max} value={g.value} onAddButtonPressed={() => { openCamera(g.id) }} />
					})}
				</ScrollView>

			</TouchableWithoutFeedback>
		</KeyboardAvoidingView>
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
import React, { useState } from 'react'
import { KeyboardAvoidingView, Modal, Pressable, SafeAreaView, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import ModalTextField from './ModalTextField'
import { Picker } from '@react-native-picker/picker';
import { auth } from '../firebase';
import DateTimePicker from '@react-native-community/datetimepicker';
import { uuidv4 } from '@firebase/util';


const GoalModal = ({ visible, changeVisibility }) => {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [category, setCategory] = useState('');
    const [start, setStart] = useState(new Date());

    const onCreate = () => {
        addGoal(title, 0, category)
        .then(() => changeVisibility(!visible));
    }
    const addGoal = async (title, streak, category) => {
        try {
            const response = await fetch('http://128.61.63.216:8080/api/users/goal', {
                method: "POST",
                headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ title: title, streak: streak, uid: uuidv4(), category: category, userId: auth.currentUser.uid }),
            });
        } catch (error) {
            console.error(error);
        }
    }
    return (
        <Modal visible={visible} animationType="slide" >
            <KeyboardAvoidingView behavior={Platform.OS === 'ios' ? 'padding' : 'height'} style={{ flex: 1 }}>
            <ScrollView flex={1} scrollEnabled>
            <SafeAreaView>
                <View style={styles.container}>
                    <ModalTextField placeholder={"Name your goal"} multiline={false} name={"Title"} onChange={e => {
                        console.log(e);
                        setTitle(e);
                    }} />
                    <ModalTextField placeholder={"describe what you want to do"} multiline={true} name={"Description"} onChange={e => {
                        console.log(e);
                        setDescription(e);
                    }}/>
                    <View>
                        <Text style={styles.fieldTitle}>Category</Text>
                        <Picker
                            selectedValue={category}
                            onValueChange={(itemValue) => setCategory(itemValue)}
                            style={styles.picker} itemStyle={styles.pickerItem}>
                            <Picker.Item label="Personal" value="Personal" />
                            <Picker.Item label="Work" value="Work" />
                            <Picker.Item label="Health" value="Health" />
                            <Picker.Item label="Education" value="Education" />
                        </Picker>
                    </View>
                    <View style={styles.dateContainer}>
                        <View>
                            <Text style={styles.fieldTitle}>Start Date</Text>
                            <DateTimePicker
                                accentColor='#17b978'
                                value={start}
                                onChange={(ev, date) => {
                                    console.log(ev.type);
                                    console.log(ev.nativeEvent);
                                    setStart(date);
                                }}
                                mode="date"
                                style={styles.datePicker}
                                />
                        </View>
                        <View>
                            <Text style={styles.fieldTitle}>End Date</Text>
                            <DateTimePicker
                                accentColor='#17b978'
                                value={start}
                                onChange={(ev, date) => {
                                    console.log(ev.type);
                                    console.log(ev.nativeEvent);
                                    setStart(date);
                                }}
                                mode="date"
                                style={styles.datePicker}
                                />
                        </View>
                    </View>
                    <View style={styles.finishContainer}>
                        <TouchableOpacity style={styles.cancel} onPress={() => changeVisibility(!visible)}>
                            <Text style={styles.fieldTitle}>Close Modal</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.button} onPress={onCreate}>
                            <Text style={styles.fieldTitle}>Create Goal</Text>
                        </TouchableOpacity>
                    </View>
                   
                </View>
            </SafeAreaView>
            </ScrollView>
            </KeyboardAvoidingView>
        </Modal>
    )
}

export default GoalModal

const styles = StyleSheet.create({
    container: {
        gap: 20,
        padding: 20
    },
    textField: {
        height: 30,
        borderWidth: 1,
        fontSize: 16,
    },
    fieldTitle: {
        fontSize: 20,
        marginBottom: 5
    },
    picker: {
        padding: 0,
        overflow: "hidden",
        borderBottomWidth: 1,
    },
    pickerItem: {
        color: "#17b978"
    },
    datePicker: {
        
    },
    dateContainer: {
        justifyContent: "space-between",
        flexDirection: "row",
    },
    finishContainer: {
        flexDirection: "row",
        justifyContent: "space-evenly"
    },
    button: {
        alignItems: "center",
		paddingTop: 8,
		width: 164,
		height: 34,
		backgroundColor: '#17B978',
		borderRadius: 30,
    },
    cancel: {
		alignItems: "center",
		paddingTop: 8,
		width: 164,
		height: 34,
		flexShrink: 0,
		backgroundColor: '#000',
		borderRadius: 30,
	},
})
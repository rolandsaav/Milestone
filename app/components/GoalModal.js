import React, { useState } from 'react'
import { Modal, Pressable, SafeAreaView, StyleSheet, Text, TextInput, View } from 'react-native'


const GoalModal = ({visible, changeVisibility}) => {
    return (
        <Modal visible={visible} animationType="slide">
            <SafeAreaView style={styles.container}>
                <View style={{padding: 20}}>
                    <Text>Field Name</Text>
                    <TextInput style={styles.textField}></TextInput>
                    <Pressable onPress={() => changeVisibility(!visible)}>
                        <Text>Close Modal</Text>
                    </Pressable>
                </View>

                <View style={{padding: 20}}>
                    <Text>Field Name</Text>
                    <TextInput style={styles.textField}></TextInput>
                    <Pressable onPress={() => changeVisibility(!visible)}>
                        <Text>Close Modal</Text>
                    </Pressable>
                </View>
                
            </SafeAreaView>
        </Modal>
    )
}

export default GoalModal

const styles = StyleSheet.create({
    container: {
        gap: 20,
        backgroundColor: "#000"
    },
    textField: {
        height: 20,
    }
})
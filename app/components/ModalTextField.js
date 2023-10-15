import { StyleSheet, Text, View, TextInput } from 'react-native'
import React from 'react'

const ModalTextField = ({name, placeholder, onChange, multiline}) => {
    return (
        <View>
            <Text style={styles.fieldTitle}>{name}</Text>
            <TextInput style={styles.textField} placeholder={placeholder} onChangeText={onChange} multiline={multiline}></TextInput>
        </View>
    )
}

export default ModalTextField

const styles = StyleSheet.create({
    textField: {
        minHeight: 30,
        borderWidth: 1,
        fontSize: 16,
        paddingHorizontal: 10,
        paddingBottom: 5
    },
    fieldTitle: {
        fontSize: 20,
        marginBottom: 5
    }
})
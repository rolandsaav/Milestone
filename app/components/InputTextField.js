import React from 'react'
import {StyleSheet, View, Text, TextInput} from 'react-native'

export default function InputTextField({onChange, style, title, placeholderText, isSecure}) {
    return (
        <View style={style}>
            <Text style={styles.inputTitle}>{title}</Text>
            <TextInput
                onChangeText={onChange}
                placeholder={placeholderText}
                secureTextEntry={isSecure}
                style={StyleSheet.input}
            ></TextInput>
            <View style={{borderBottomWidth: 1, borderBottomColor: "#D8D8D8"}}></View>
        </View>
    );
}

const styles = StyleSheet.create({
    inputTile: {
        color: "#ABB4BD",
        fontSize: 14
    },
    input: {
        paddingVertical: 12,
        color: "#1D2029",
        fontSize: 14,
        fontFamily: "Avenir Next"
    }
})
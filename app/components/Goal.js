import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Goal = () => {
  return (
    <View style={styles.goal}>
      <Text>This is a goal</Text>
    </View>
  )
}

export default Goal

const styles = StyleSheet.create({
    goal: {
		width: 360,
		height: 260,
		flexShrink: 0,
		borderRadius: 30,
		backgroundColor: "#FCFDEC",
		borderWidth: 1,
        justifyContent: "center",
        alignItems: "center"
	},
})
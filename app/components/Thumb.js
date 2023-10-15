import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Thumb = ({value, text}) => {
  return (
    <View style={styles.outer}>
      <Text>{value}</Text>
    </View>
  )
}

export default Thumb

const styles = StyleSheet.create({
    outer: {
        height: 50,
        width: 50,
        backgroundColor: "#17B978",
        borderWidth: 5,
        borderRadius: 50,
        borderColor: "#24651E",
        justifyContent: "center",
        alignItems: "center"
    },
})
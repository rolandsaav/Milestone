import { Button, StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Goals = ({navigation}) => {
  return (
    <View style={styles.container}>
      <Text>Goals</Text>
      <Button
        title="Go Home"
        onPress={() => navigation.navigate('Home')}
      />
    </View>
  )
}

export default Goals

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
})
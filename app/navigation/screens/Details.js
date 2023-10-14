import { Button, StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Details = ({navigation}) => {
  return (
    <View style={styles.container}>
      <Text>Details</Text>
      <Button
        title="Go Home"
        onPress={() => navigation.navigate('Home')}
      />
    </View>
  )
}

export default Details

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
})
import { Button, StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Profile = ({navigation}) => {
  return (
    <View style={styles.container}>
      <Text>Profile</Text>
      <Button
        title="Go Home"
        onPress={() => navigation.navigate('Home')}
      />
    </View>
  )
}

export default Profile

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
})
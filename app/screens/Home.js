import { View, Text, StatusBar, StyleSheet, Button } from 'react-native'
import React, { useState, useEffect } from 'react'

const Home = ({navigation}) => {
  const [message, setMessage] = useState("");

  useEffect(() => {
    fetch("https://milestone-api-b3wiqyztra-ue.a.run.app/message")
      .then((res) => res.json())
      .then((data) => setMessage(data.message))
      .catch((error) => {
        console.error(error);
      })
  }, []);
  
  return (
    <View style={styles.container}>
      <Text>Home</Text>
      <Text>{message}</Text>
      <Button
        title="Go to Details"
        onPress={() => navigation.navigate('Details')}
      />
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
  });

export default Home
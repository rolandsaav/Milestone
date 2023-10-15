import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import { auth } from '../../firebase';

const Profile = () => {
  const [userData, setUserData] = useState({});
  const getUserInfo = async () => {
    try {
      const response = fetch('http://128.61.63.216:8080/api/users/' + auth.currentUser.uid)
      const json = (await response).json()
        .then((data) => {
          setUserData(data);
        })
    } catch (error) {
      console.error(error);
    }
  }

  useEffect(() => {
    getUserInfo();
  }, []);
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.profileText}>Your Profile</Text>
        <Image
          source={require('../../assets/default.png')}
          style={styles.profileImage}
        />
      </View>
      <View style={styles.textContainer}>
        <Text style={styles.name}>{userData.name}</Text>
        <Text style={styles.username}>@{userData.username}</Text>
        <Text style={styles.bio}>Write a short bio about yourself here.</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center', // Center horizontally
    justifyContent: 'flex-start', // Align to the top
    padding: 50,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  textContainer: {
    alignItems: 'center', // Center horizontally
  },
  profileText: {
    fontSize: 40,
    fontWeight: 'bold',
    marginRight: 10,
    width: 150,
  },
  profileImage: {
    width: 100,
    height: 100,
    borderRadius: 50,
  },
  name: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  username: {
    fontSize: 16,
    color: 'gray',
    marginBottom: 10,
  },
  bio: {
    fontSize: 16,
    textAlign: 'left',
  },
});

export default Profile;
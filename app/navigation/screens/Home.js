import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, Button, TextInput, TouchableOpacity, FlatList } from 'react-native';
import { auth } from '../../firebase';

const Home = ({ navigation }) => {
  const [message, setMessage] = useState("");
  const [searchQuery, setSearchQuery] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [friends, setFriends] = useState([]);

  useEffect(() => {
    fetch("https://milestone-api-b3wiqyztra-ue.a.run.app/message")
      .then((res) => res.json())
      .then((data) => setMessage(data.message))
      .catch((error) => {
        console.error(error);
      });
  }, []);

  const handleSearch = async () => {
    try {
      const response = fetch('http://128.61.63.216:8080/api/search/' + searchQuery);
      const json = (await response).json().then((data) => {
        setSearchResults(data);
      });
    } catch (error) {
      console.error(error);
    }
  };

  const addFriend = async (friend) => {
    try {
      const response = await fetch('http://128.61.63.216:8080/api/users/friend', {
        method: "POST",
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ uid: auth.currentUser.uid, friendId: friend.uid }),
      });
      setFriends([...friends, friend]);
    } catch (error) {
      console.error(error);
    }
  }

  const renderItem = ({ item }) => (
    <View style={styles.resultItem}>
      <Text>{item.username}</Text>
      <Button
        title="+"
        onPress={() => {
          addFriend(item);
        }}
      />
    </View>
  );

  return (
    <View style={styles.container}>
      <View style={styles.searchBarContainer}>
        <TextInput
          style={styles.searchInput}
          placeholder="Search..."
          onChangeText={(text) => {
            setSearchQuery(text);
            console.log(text);
          }}
          value={searchQuery}
        />
        <TouchableOpacity onPress={handleSearch}>
          <View style={styles.searchButton}>
            <Text style={styles.searchButtonText}>Search</Text>
          </View>
        </TouchableOpacity>
      </View>
      <FlatList
        data={searchResults}
        keyExtractor={(item) => item.uid}
        renderItem={renderItem}
      />
      <Text>{message}</Text>
      <View style={styles.friendsContainer}>
        <Text style={styles.friendsTitle}>Friends:</Text>
        <FlatList
          data={friends}
          keyExtractor={(item) => item.uid}
          renderItem={renderItem}
        />
      </View>
      <View style={styles.feedContainer}>
        <Text style={styles.feedTitle}>Feed:</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  searchBarContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 20,
    width: 300,
  },
  searchInput: {
    flex: 2,
    height: 30,
    borderColor: 'gray',
    borderWidth: 1,
    marginRight: 10,
    paddingHorizontal: 10,
  },
  searchButton: {
    height: 30,
    paddingHorizontal: 10,
    backgroundColor: '#17b978',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 4,
  },
  searchButtonText: {
    color: '#fff',
  },
  centerContent: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  resultItem: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderBottomWidth: 1,
    borderBottomColor: 'gray',
    padding: 10,
  },
  friendsContainer: {
    borderColor: 'gray',
    borderWidth: 1,
    padding: 10,
    width: 300,
    height: 200
  },
  friendsTitle: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  feedContainer: {
    borderColor: 'gray',
    borderWidth: 1,
    padding: 10,
    width: 300,
    height: 200
  },
  feedTitle: {
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default Home;
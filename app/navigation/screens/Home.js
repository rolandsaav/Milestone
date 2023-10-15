import { View, Text, StatusBar, StyleSheet, Button, TextInput, TouchableOpacity } from 'react-native';
import React, { useState, useEffect } from 'react';


const Home = ({ navigation }) => {
  const [message, setMessage] = useState("");
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    fetch("https://milestone-api-b3wiqyztra-ue.a.run.app/message")
      .then((res) => res.json())
      .then((data) => setMessage(data.message))
      .catch((error) => {
        console.error(error);
      });
  }, []);

  const handleSearch = () => {
    // Implement your search logic here
    // You can use the 'searchQuery' state for the search term.
    //console.log("Searching for:", searchQuery);
    try {
        const response = fetch('http://128.61.63.216:8080/api/search/' + searchQuery);
    } catch (error) {
        console.error(error);
    }
  };

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
      <View style={styles.centerContent}>
        <Text>Home</Text>
        <Text>{message}</Text>
        <Button
          title="Go to Profile"
          onPress={() => navigation.navigate('Profile')}
        />
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
    width: 300
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
});

export default Home;
import { View, Text, ActivityIndicator, StyleSheet, FlatList, Button } from 'react-native'
import React, {useState, useEffect, useReducer } from 'react'

const UsersTestScreen = ({navigation}) => {
    const[isLoading, setLoading] = useState(true);
    const[data, setData] = useState([]);

    const getUsers = async () => {
        try {
            const response = await fetch('http://128.61.63.216:8080/api/users');
            const json = await response.json();
            setData(json.users);
            console.log(json.users);
        } catch (error) {
            console.error (error);
        } finally {
            setLoading(false);
        }
    }

    useEffect(() => {
        getUsers();
    }, []);

    return (
        <View>
            {isLoading ? (
                <ActivityIndicator />
            ) : (
                <FlatList
                    data = {data}
                    keyExtractor={({id}) => id}
                    renderItem={({item: user}) => (
                        <Text>
                            {user.id}, {user.name}, {user.email}
                        </Text>
                    )}
                />
            )}
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    center: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    user: {
        borderBottomWidth: 1,
        borderBottomColor: 'white',
        paddingVertical: 20,
        paddingRight: 20,
        marginLeft: 20,
    },
});
export default UsersTestScreen;
import { NavigationContainer } from '@react-navigation/native';
import { StyleSheet, Text, View, Image, TouchableOpacity, ScrollView, Touchable } from 'react-native';
import MainContainer from './navigation/MainContainer';
import Home from './navigation/screens/Home';
import Goals from './navigation/screens/Goals';
import Profile from './navigation/screens/Profile';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginScreen from './navigation/screens/loginscreen';

export default function App() {
  const Stack = createNativeStackNavigator();
  
  return (
    <MainContainer>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Home" component={Home}/>
          <Stack.Screen name="Goals" component={Goals}/>
          <Stack.Screen name="Profile" component={Profile}/>
          <Stack.Screen name="Login" component={LoginScreen}></Stack.Screen>
        </Stack.Navigator>
      </NavigationContainer>
    </MainContainer>
  );
}

const styles = StyleSheet.create({
  text: {
    fontFamily: "Avenir Next",
    color: "1D2029"
  },
  socialButton: {
    flexDirection: "row",
    marginHorizontal: 12,
    paddingHorizontal: 30,
    borderWidth: StyleSheet.hairlineWidth,
    borderColor: "rgba(171, 180, 189, 0.6)",
    borderRadius: 4,
    backgroundColor: "#fff",
    shadowColor: "rgba(171, 180, 0.35)",
    shadowOffset: {width: 0, height: 10},
    shadowOpacity: 1,
    shadowRadius: 20,
    elevation: 5
  }
});
